import PlayList from "./PlayList";

export default function PlayLists() {
  return (
    <>
    <div className="container-playlist">
      <div className="Banner-playlist">
        <h2 className="title-playlist">
          <i className="fas fa-list" /> Your Playlist
        </h2>
        <p>
          <i className="fas fa-plus" />
        </p>
      </div>
      <div className="list-playlists">
        <PlayList/>
      </div>
    </div>
    </>
  );
}
