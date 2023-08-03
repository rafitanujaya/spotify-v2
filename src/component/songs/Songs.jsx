/* eslint-disable react/prop-types */

// * Import component Song
import Song from "./Song";

export default function Songs({song = "songs"}) {
  return (
    <>
      <div className="song-title">{song}</div>
      <div className="song-list">
        <Song />
      </div>
    </>
  );
}
