import { Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/layout/MobileNav";
import { NowPlayingBar } from "@/components/layout/NowPlayingBar";
import { Sidebar } from "@/components/layout/Sidebar";

export function AppLayout() {
  return (
    <div className="flex h-dvh overflow-hidden bg-[var(--bg-base)]">
      <Sidebar className="hidden md:flex" />

      <div className="flex min-w-0 flex-1 flex-col">
        <main
          className={cn(
            "flex-1 overflow-y-auto overflow-x-hidden",
            "pb-[calc(var(--player-height)+var(--mobile-nav-height))] md:pb-[var(--player-height)]",
          )}
        >
          <Outlet />
        </main>
      </div>

      <MobileNav />
      <NowPlayingBar />
    </div>
  );
}
