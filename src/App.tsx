import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from '@/components/layout/AppLayout'
import { ProfileGuard } from '@/components/layout/ProfileGuard'
import { ProfileProvider } from '@/hooks/useProfile'
import { PlayerProvider } from '@/hooks/usePlayer'
import ProfileGate from '@/pages/ProfileGate'
import BrowsePage from '@/pages/BrowsePage'
import SearchPage from '@/pages/SearchPage'
import LibraryPage from '@/pages/LibraryPage'
import PlaylistPage from '@/pages/PlaylistPage'
import ArtistPage from '@/pages/ArtistPage'

export default function App() {
  return (
    <ProfileProvider>
      <PlayerProvider>
        <Routes>
        <Route path="/" element={<ProfileGate />} />
        <Route element={<AppLayout />}>
          <Route element={<ProfileGuard />}>
            <Route path="/browse" element={<BrowsePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/liked" element={<Navigate to="/library?filter=liked" replace />} />
            <Route path="/playlist/:slug" element={<PlaylistPage />} />
            <Route path="/artist/me" element={<ArtistPage />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PlayerProvider>
    </ProfileProvider>
  )
}
