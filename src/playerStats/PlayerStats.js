import React, { useRef, useEffect, useState } from 'react';
import musicNoteIcon from '../assets/music-note.svg';
import musicTuneSlashIcon from '../assets/music-tune-slash.svg';
import musicFile from '../assets/Ambient.mp4'; 
import "../styles/playerStats.css";

const PlayerStats = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div id='playerStats'>
      <h1>DIGITAL CARA LEVEL 32</h1>
      <div id='playerStats__lines'>
        <span id='playerStats__lines__thick'></span>
        <span id='playerStats__lines__thin'></span>
      </div>
      <h2>Fullstack in learning</h2>
      <div className="music-toggle" onClick={toggleMusic}>
        {isPlaying ? (
          <img src={musicNoteIcon} alt="Play" />
        ) : (
        <img src={musicTuneSlashIcon} alt="Pause" />
          
        )}
      </div>
      <audio ref={audioRef} src={musicFile}></audio>
    </div>
  );
};

export default PlayerStats;