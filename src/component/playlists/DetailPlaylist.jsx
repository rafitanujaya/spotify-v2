// * Import component
import Songs from "../songs/Songs";

export default function DetailPlaylist() {
  return (
    <>
      <div className="detail-playlist">
        <div className="card-detail-playlist">
          <div className="card-img-detail-playlist">
            <img
              src=""
              width="150px"
              height="150px"
              alt=""
            />
          </div>
          <div className="card-body-detail-playlist">
            <h2>Playlist</h2>
          </div>
        </div>
        <Songs />
      </div>
    </>
  );
}
