
import DataPlaylist from "../../Data/DataPlaylist";
import { useState, useEffect } from "react";

export default function PlayList() {
  const [ playlists, setPlaylists] = useState([])

  useEffect(() => {
    setPlaylists(DataPlaylist);
  }, []);

  return (
    <>
    {playlists.map((playlist) => (
        <div className="playlist" key={playlist.id}>
          <div className="playlist-img">
            <img
              src={playlist.img}
              height={50}
              width={50}
              alt={playlist.playlist}
            />
          </div>
          <div className="playlist-body">
            <p className="playlist-body-title">{playlist.playlist}</p>
          </div>
        </div>
      ))}
    </>
  );
}
