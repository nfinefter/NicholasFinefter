import { NavLink, useNavigate } from "react-router-dom";
import { CircleUser, Heart, Home, Library, LogOut, Search } from "lucide-react";
import { useProfile } from "@/hooks/useProfile";
import { cn } from "@/lib/utils";

const tabs = [
  { to: "/browse", label: "Home", icon: Home },
  { to: "/search", label: "Search", icon: Search },
  { to: "/library", label: "Library", icon: Library },
  { to: "/library?filter=liked", label: "Liked", icon: Heart },
  { to: "/artist/me", label: "You", icon: CircleUser },
] as const;

export function MobileNav({ className }: { className?: string }) {
  const navigate = useNavigate();
  const { clearProfile } = useProfile();

  const switchPerspective = () => {
    clearProfile();
    navigate("/");
  };

  return (
    <nav
      className={cn(
        "fixed inset-x-0 bottom-[var(--player-height)] z-40 flex h-[var(--mobile-nav-height)] items-stretch justify-around border-t border-white/10 bg-[var(--bg-elevated)] md:hidden",
        className,
      )}
      aria-label="Mobile"
    >
      {tabs.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            cn(
              "flex flex-1 flex-col items-center justify-center gap-0.5 text-[10px] font-medium text-[var(--text-secondary)] transition-colors",
              isActive && "text-[var(--accent-green)]",
            )
          }
        >
          {({ isActive }) => (
            <>
              <Icon
                className={cn(
                  "size-5",
                  isActive && "stroke-[var(--accent-green)]",
                )}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span>{label}</span>
            </>
          )}
        </NavLink>
      ))}
      <button
        type="button"
        onClick={switchPerspective}
        className="flex flex-1 flex-col items-center justify-center gap-0.5 text-[10px] font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
        aria-label="Switch perspective"
        title="Switch perspective"
      >
        <LogOut className="size-5" strokeWidth={2} />
        <span>Switch</span>
      </button>
    </nav>
  );
}
