import Link from 'next/link'
import React from 'react'
type Playlist = {
  id:number
  title : string
  author: string
  cover : string
}
const Artwork = ({playlist} :any) => {
  return (
    <Link href="/home/playlist">
    <div className="space-y-3 w-[150px]">
      <div className="rounded-md overflow-hidden">
        <img
          src={playlist.cover}
          width="150px"
          height="150px"
          className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"
        />
      </div>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{playlist.title}</h3>
        <p className="text-xs text-muted-foreground">{playlist.author}</p>
      </div>
    </div>
    </Link>

  )
}

export default Artwork