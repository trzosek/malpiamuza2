"use client"
import {
    RxShuffle,
    RxPlay,
    RxTrackNext,
    RxTrackPrevious,
    RxSymbol,
    RxSpeakerLoud,
    RxPause,
  } from "react-icons/rx";
  import { IconContext } from "react-icons";
  import { Slider } from "@/components/ui/slider";
  import { UsePlaylist } from "@/context/playlist-context";
  import { useEffect, useRef, useState } from "react";
  import { formatujCzas } from "@/hooks/format-time";
  import { cn } from "@/lib/utils";



  const Player = () => {

    const { playlist,isPlaying, setIsPlaying,currentSong,setCurrentSong } = UsePlaylist();
    const audio = useRef<HTMLAudioElement>(null);
  
    // const [currentSong, setCurrentSong] = useState(playlist[0]);
  
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
  
    const [shuffled,setShuffled] = useState(false)
    const [looped,setLooped] = useState(false)
  
    // useEffect(() => {
    //   setCurrentSong(playlist[0]);
    // }, [playlist]);
  
    useEffect(()=> {
      if (isPlaying) {
        setTimeout(()=> {
          audio.current?.play();
        },100)
        
      }
    },[currentSong])

    useEffect(() => {
      isPlaying ? audio.current?.play() : audio.current?.pause();
    }, [isPlaying]);
  
  
    const updateTime = () => {
      if (audio.current != null) setCurrentTime(audio.current.currentTime);
    };
    const updateDuration = () => {
      if (audio.current != null) setDuration(audio.current.duration);
    };
  
    const play = () => {
      setIsPlaying(!isPlaying);
    };
  
    const skip = async () => {
      const index = playlist.findIndex((x) => x.title == currentSong?.title);
      index == playlist.length - 1
        ? await setCurrentSong(playlist[0])
        : await setCurrentSong(playlist[index + 1]);
      
    };
  
    const back = async () => {
      const index = playlist.findIndex((x) => x.title == currentSong?.title);
      index == 0
        ? await setCurrentSong(playlist[playlist.length - 1])
        : await setCurrentSong(playlist[index - 1]);
    };
  
    const shuffle = () => {
      setShuffled(!shuffled)
    }
  
    const loop = () => {
      setLooped(!looped)
    }
  
    if (playlist.length == 0)
      return (
        <div className="self-end w-full h-20 border-t border-border flex justify-between px-4"></div>
      );
    return (
      <IconContext.Provider value={{ size: "26" }}>
        <div className="self-end w-full h-20 border-t border-border flex justify-between px-4">
          <div className="w-[30%] max-w-[180px] h-full">
            <div className="flex items-center h-full gap-2">
              <div className="w-14 h-14">
                <img
                  src={currentSong && currentSong.cover}
                  alt="song cover"
                  className="w-full h-full rounded-sm min-w-[56px]"
                />
              </div>
              <div>
                <p className="text-base font-semibold tracking-tight hover:cursor-pointer hover:underline truncate">
                  {currentSong && currentSong.title}
                </p>
                <p className="text-sm text-muted-foreground font-semibold tracking-tight hover:cursor-pointer hover:underline truncate">
                  {currentSong && currentSong.artist}
                </p>
              </div>
            </div>
          </div>
          <div className="w-[40%] max-w-[722px] h-full">
            <div className="flex flex-col items-center justify-center ">
              <div className="flex justify-center items-center gap-4">
                <div className="mt-2 space-x-4">
                  <button onClick={shuffle}>
                    <RxShuffle className={cn(shuffled ? "text-primary" : " text-foreground")} />
                  </button>
                  <button onClick={back}>
                    <RxTrackPrevious />
                  </button>
                </div>
  
                <div className="mt-2">
                  <button onClick={play}>
                    {isPlaying ? <RxPause size="30" /> : <RxPlay size="30" />}
                  </button>
                </div>
  
                <div className="mt-2 space-x-4">
                  <button onClick={skip}>
                    <RxTrackNext />
                  </button>
                  <button onClick={loop}>
                    <RxSymbol className={cn(looped ? "text-primary" : "text-foreground")} />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2 w-full">
                <div>
                  <span className="text-sm text-muted-foreground hover:cursor-default">
                    {formatujCzas(currentTime)}
                  </span>
                </div>
                <div className="w-full">
                  <Slider
                    max={audio.current?.duration}
                    step={1}
                    className="w-full h-1"
                    value={[currentTime]}
                    onValueChange={(e)=> {if (audio.current) audio.current.currentTime = e[0]}}
                  />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground hover:cursor-default">
                    {formatujCzas(duration)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%] max-w-[180px] h-full">
            <div className="flex justify-end items-center h-full">
              <div className="flex gap-2 items-center">
                <button>
                  <RxSpeakerLoud />
                </button>
                <Slider
                defaultValue={[1]}
                  max={1}
                  step={0.01}
                  className="w-32 h-1"
                  onValueChange={(e)=> {if (audio.current) audio.current.volume = e[0]}}
                />
              </div>
            </div>
          </div>
          <audio
            src={currentSong && currentSong.link}
            ref={audio}
            onTimeUpdate={updateTime}
            onCanPlay={updateDuration}
            onEnded={skip}
          ></audio>
        </div>
      </IconContext.Provider>
    );
  };
  
  export default Player;
  
