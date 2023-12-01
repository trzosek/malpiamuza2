import React from 'react'
import { Button } from './ui/button'
import {LuHome,LuListMusic} from"react-icons/lu"
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className="space-y-4 py-4">
      <div className="px-3 py-2">
        <h1 className="mb-2 px-4 text-xl font-semibold tracking-tight">
          Małpia Muza 2
        </h1>
      </div>
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Odkrywaj
        </h2>
        <div className="space-y-1">
          <Link href="/home">
        <Button variant="ghost" className="w-full justify-start gap-2" >
          <LuHome size={16}/>
            Strona główna
          </Button>
          </Link>
          <Link href="/home/playlist">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <LuListMusic size={16}/>
            Playlisty
          </Button>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Sidebar