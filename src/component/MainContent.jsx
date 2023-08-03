import Songs from './songs/Songs'
import DetailPlaylist from './playlists/DetailPlaylist'

export default function MainContent() {
  return (
    <>
    <main>
        <Songs/>
        <Songs song={"songs trending"}/>
        <DetailPlaylist/>
    </main>
    
    </>
  )
}
