import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "song of David", id: 1 },
    { title: "song of Solomon", id: 2 },
    { title: "song of Boaz", id: 3 },
  ]);

  const [age, setAge] = useState(20);
  const addSong = (title2) => {
    setSongs([...songs, { title: title2, id: uuidv4() }]);
  };
  useEffect(() => {
    console.log("Use Effect Ran", songs);
  }, [songs]);

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  );
};

export default SongList;
