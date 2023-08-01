
// * Import component Song
import Song from "./Song";

export default function Songs() {
  return (
    <>
      <div className="song-title">Songs</div>
      <div className="song-list">
        <Song />
      </div>
    </>
  );
}
