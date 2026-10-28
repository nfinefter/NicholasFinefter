import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { AppHeader } from "@/components/layout/AppHeader";
import { MobileNav } from "@/components/layout/MobileNav";
import { NowPlayingBar } from "@/components/layout/NowPlayingBar";
import { Sidebar } from "@/components/layout/Sidebar";
import { fullName, getPlaylist } from "@/data/portfolio";

const PAGE_TITLES: Record<string, string> = {
  "/browse": "Home",
  "/search": "Search",
  "/library": "Library",
  "/artist/me": "About me",
};

function titleFor(pathname: string) {
  if (pathname.startsWith("/playlist/")) {
    return getPlaylist(pathname.slice("/playlist/".length))?.title;
  }
  return PAGE_TITLES[pathname];
}

export function AppLayout() {
  const { pathname, hash } = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  // The page scrolls inside <main>, so the browser won't reset it on navigation.
  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    mainRef.current?.scrollTo({ top: 0 });
  }, [pathname, hash]);

  useEffect(() => {
    const title = titleFor(pathname);
    document.title = title ? `${title} | ${fullName}` : `${fullName} | Portfolio`;
  }, [pathname]);

  return (
    <div className="flex h-dvh overflow-hidden bg-[var(--bg-base)]">
      <Sidebar className="hidden md:flex" />

      <div className="flex min-w-0 flex-1 flex-col">
        <main
          ref={mainRef}
          className={cn(
            "flex flex-1 flex-col overflow-y-auto overflow-x-hidden",
            "pb-[calc(var(--player-height)+var(--mobile-nav-height))] md:pb-[var(--player-height)]",
          )}
        >
          <AppHeader />
          <Outlet />
        </main>
      </div>

      <MobileNav />
      <NowPlayingBar />
    </div>
  );
}
