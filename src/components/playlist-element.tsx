import { UsePlaylist } from "@/context/playlist-context";
import songs from "@/data/songs";
import { cn } from "@/lib/utils";
import { RxPause, RxPlay, RxSymbol } from "react-icons/rx";
const PlaylistElement = ({ song, index }: any) => {
  const {
    currentSong,
    setCurrentSong,
    playlist,
    setPlaylist,
    isPlaying,
    setIsPlaying,
  } = UsePlaylist();
  const setSong = async () => {
    if (playlist.length === 0) {
      await setPlaylist(songs);
      await setCurrentSong(song);
      setIsPlaying(true);
    }
    setCurrentSong(song);
  };

  return (
    <div
      className={cn(
        "w-full h-14 rounded-sm hover:bg-muted flex items-center group",
        currentSong == song ? "text-primary" : "text-foreground"
      )}
    >
      <div className="w-10 h-10 aspect-square flex items-center justify-center">
        {currentSong == song ? (
          isPlaying ? (
            <RxSymbol size={24} className="animate-spin group-hover:hidden" />
          ) : (
            <p className="group-hover:hidden">{index + 1}</p>
          )
        ) : (
          <p className="group-hover:hidden">{index + 1}</p>
        )}

        {currentSong == song ? (
          isPlaying ? (
            <button onClick={() => setIsPlaying(false)}>
              <RxPause
                size={24}
                className="hidden group-hover:block text-foreground"
              />
            </button>
          ) : (
            <button onClick={() => setIsPlaying(true)}>
              <RxPlay
                size={24}
                className="hidden group-hover:block text-foreground"
              />
            </button>
          )
        ) : (
          <button onClick={setSong}>
            <RxPlay
              size={24}
              className="hidden group-hover:block text-foreground"
            />
          </button>
        )}
      </div>
      <div className="flex items-center gap-2">
        <div className="w-12 h-full aspect-square rounded-sm overflow-hidden">
          <img src={song.cover} alt="song cover" className="w-full h-full" />
        </div>
        <div>
          <p className="font-semiboldtracking-tight text-lg">{song.title}</p>
          <p className="text-muted-foreground tracking-tight text-lg">
            {song.artist}
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default PlaylistElement;
