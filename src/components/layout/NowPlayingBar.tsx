import { Link } from "react-router-dom";
import { Pause, Play } from "lucide-react";
import { featuredPlaylistSlug, fullName } from "@/data/portfolio";
import { usePlayer } from "@/hooks/usePlayer";
import { cn } from "@/lib/utils";

export type NowPlayingBarProps = {
  title?: string;
  subtitle?: string;
  playlistHref?: string;
  isPlaying?: boolean;
  onTogglePlay?: () => void;
};

function Equalizer({ paused }: { paused?: boolean }) {
  return (
    <div
      className={cn("equalizer", paused && "equalizer-paused")}
      aria-hidden
    >
      <span className="equalizer-bar" />
      <span className="equalizer-bar" />
      <span className="equalizer-bar" />
      <span className="equalizer-bar" />
    </div>
  );
}

export function NowPlayingBar({
  title: titleProp,
  subtitle: subtitleProp,
  playlistHref: playlistHrefProp,
  isPlaying: isPlayingProp,
  onTogglePlay: onTogglePlayProp,
}: NowPlayingBarProps = {}) {
  const { current, isPlaying: playerPlaying, toggle } = usePlayer();

  const title = titleProp ?? current?.title ?? "Portfolio";
  const subtitle = subtitleProp ?? current?.subtitle ?? fullName;
  const playlistHref =
    playlistHrefProp ??
    (current ? `/playlist/${current.slug}` : `/playlist/${featuredPlaylistSlug}`);
  const isPlaying = isPlayingProp ?? playerPlaying;
  const onTogglePlay = onTogglePlayProp ?? toggle;

  return (
    <footer
      className="fixed inset-x-0 bottom-0 z-50 flex h-[var(--player-height)] items-center justify-between gap-4 border-t border-white/10 bg-[var(--bg-highlight)] px-4 md:pl-[calc(var(--sidebar-width)+1rem)] md:pr-6"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <Link
        to={playlistHref}
        className="flex min-w-0 flex-1 items-center gap-3 transition-opacity hover:opacity-90 md:max-w-[30%]"
      >
        <div
          className="flex size-14 shrink-0 items-center justify-center rounded bg-[var(--bg-elevated)]"
          style={
            current
              ? { background: current.gradient }
              : undefined
          }
          aria-hidden
        >
          <Equalizer paused={!isPlaying} />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-[var(--text-primary)]">
            {title}
          </p>
          <p className="truncate text-xs text-[var(--text-secondary)]">
            {subtitle}
          </p>
        </div>
      </Link>

      <div className="hidden flex-1 items-center justify-center md:flex">
        <button
          type="button"
          onClick={onTogglePlay}
          className="flex size-10 items-center justify-center rounded-full bg-[var(--text-primary)] text-black transition-transform hover:scale-105 active:scale-95"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause className="size-5 fill-current" />
          ) : (
            <Play className="size-5 fill-current pl-0.5" />
          )}
        </button>
      </div>

      <div className="flex flex-1 justify-end md:max-w-[30%]">
        <Link
          to={playlistHref}
          className="text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] hover:underline"
        >
          View playlist
        </Link>
      </div>
    </footer>
  );
}
