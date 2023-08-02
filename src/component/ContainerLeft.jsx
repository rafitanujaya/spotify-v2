import NavigasiBar from "./NavigasiBar";
import PlayLists from "./playlists/PlayLists";

export default function ContainerLeft() {
  return (
    <>
    <div className="container-left">
      <header>
        <NavigasiBar/>
        <PlayLists/>
      </header>
    </div>
    </>
  );
}
