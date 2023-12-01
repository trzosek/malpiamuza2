"use client"
import React, { createContext, useContext, useEffect, useState } from "react";

type song =  {
  id: number;
    title: string;
    artist: string;
    link: string;
    cover: string;
}
interface PlaylistContextValue {
  playlist: song[]
  setPlaylist: React.Dispatch<React.SetStateAction<song[]>>
  isPlaying: boolean
  setIsPlaying : React.Dispatch<React.SetStateAction<boolean>>
  currentSong : song | undefined
  setCurrentSong: React.Dispatch<React.SetStateAction<song | undefined>>
}
type childrenInterface = {
  children: React.ReactNode;
};

const PlaylistContext = createContext<PlaylistContextValue>({} as PlaylistContextValue);

export const PlaylistContextProvider = ({ children }: childrenInterface) => {
  const [playlist, setPlaylist] = useState<song[]>([]);
  const [isPlaying,setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState<song>();

  useEffect(() => {
    setCurrentSong(playlist[0]);
  }, [playlist]);
  

  return (
    <PlaylistContext.Provider value={{ playlist,setPlaylist,isPlaying,setIsPlaying,currentSong,setCurrentSong }}>
      {children}
    </PlaylistContext.Provider>
  );
};
export const UsePlaylist = () => {
  return useContext(PlaylistContext);
};