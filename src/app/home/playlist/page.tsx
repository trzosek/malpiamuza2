"use client"
import PlaylistElement from "@/components/playlist-element";
import { Separator } from "@/components/ui/separator";
import { UsePlaylist } from "@/context/playlist-context";
import songs from "@/data/songs";
import {AiFillPauseCircle,AiFillPlayCircle} from "react-icons/ai"

export default function Page() {
  const { playlist, setPlaylist, isPlaying, setIsPlaying } = UsePlaylist();
  const playPlaylist = () => {
    if (playlist.length === 0) {
      setPlaylist(songs);
      setTimeout(() => {
        setIsPlaying(true);
      }, 100);
    } else setIsPlaying(!isPlaying);
  };
  return (
    <>
      <div className="flex gap-4">
        <div className="w-48 h-48 rounded-sm overflow-hidden">
          <img
            src="https://t3.ftcdn.net/jpg/05/49/56/62/360_F_549566283_ld7v94hB0GM37jR6nODZzbY94XOCsC42.jpg"
            alt="Playlist Cover"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-4 mt-auto">
          <p className="text-[4rem] font-bold tracking-tight">Dudek beats</p>
          <p className="text-xl text-muted-foreground font-semibold tracking-tight">
            {songs.length} utworów
          </p>
        </div>
      </div>
      <button onClick={playPlaylist}>
      {isPlaying ? (
            <AiFillPauseCircle size={70} />
          ) : (
            <AiFillPlayCircle size={70} />
          )}

      </button>

      <Separator />
      <div className="flex flex-col gap-2 overflow-y-auto">
        {songs.map((song,index) => (
          <PlaylistElement song={song} key={song.id} index={index} />
        ))}
      </div>

    </>
  );
}
