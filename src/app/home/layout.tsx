import Sidebar from "@/components/sidebar";
import Player from "@/components/player";
import { PlaylistContextProvider } from "@/context/playlist-context";
import { ModeToggle } from "@/components/mode-toggle";
import { UserDropdown } from "@/components/user-dropdown";
import SessionWraper from "@/components/session-wraper";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PlaylistContextProvider>
        <div className="w-60 h-[calc(100%-5rem)] border-r border-border">
          <Sidebar />
        </div>
        <div className="grow p-8 overflow-auto max-h-[calc(100%-5rem)]">
          <div className="flex justify-end">
            <div className="flex gap-4">
              <ModeToggle />
              <SessionWraper>
              <UserDropdown />
              </SessionWraper>
            </div>
          </div>
          <div className="space-y-4">{children}</div>
        </div>
        <Player />
      </PlaylistContextProvider>
    </>
  );
}
