import DOFUS_SONG from "assets/dofus.mp3";
import { useEffect, useState } from "react";

import { FaPause, FaPlay } from "react-icons/fa";

const Player = () => {
  const [song] = useState(new Audio(DOFUS_SONG));
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState("1");

  useEffect(() => {
    isPlaying ? song.play() : song.pause();
  }, [isPlaying, song]);

  useEffect(() => {
    song.volume = +volume;
  }, [volume, song]);

  return (
    <div className="flex items-center absolute right-1/3 left-2/3 lg:right-0 top-1/2 z-50 md:-translate-x-2 lg:-translate-x-0 -translate-y-1/2 space-x-2">
      {!isPlaying ? (
        <FaPlay
          className="text-orange_dofus text-2xl cursor-pointer"
          onClick={() => {
            setIsPlaying((prev) => !prev);
          }}
        />
      ) : (
        <FaPause
          className="text-orange_dofus text-2xl cursor-pointer"
          onClick={() => {
            setIsPlaying((prev) => !prev);
          }}
        />
      )}
      <input
        value={volume}
        onChange={(e) => setVolume(e.target.value)}
        type={"range"}
        min="0"
        max="1"
        step={0.1}
        className="bg-orange_dofus border-orange_dofus cursor-pointer"
      />
    </div>
  );
};

export default Player;
