import Artwork from "@/components/artwork";
import playlists from "@/data/playlists";

export default function Home() {
  return (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Stworzone dla ciebie
        </h2>
        <p className="text-sm text-muted-foreground">
          Przygotowane przez wieczorkiewicz company.
        </p>
      </div>
      {playlists.map((playlist)=> (
        <Artwork playlist={playlist} key={playlist.id} />
      ))}
      
      </>
    
  );
}
