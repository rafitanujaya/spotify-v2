import { useState, useEffect } from "react";
import DataSongs from "../../Data/DataSongs";

export default function Song() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    setSongs(DataSongs);
  }, []);

  const handlePlayPause = (id) => {
    setSongs((prevSongs) =>
      prevSongs.map((song) =>
        song.id === id ? { ...song, isPlaying: !song.isPlaying } : song
      )
    );
  };

  return (
    <>
      {songs.map((song) => (
        <div className="song" key={song.id}>
          <div className="song-img">
            <img src={song.img} width={120} height={100} alt="" />
            <div className="play" onClick={() => handlePlayPause(song.id)}>
              {song.isPlaying ? (
                <i className="fas fa-pause" />
              ) : (
                <i className="fas fa-play" />
              )}
            </div>
          </div>
          <div className="song-body">
            <h3>{song.title}</h3>
            <p>{song.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
