import React, { useState, useRef } from 'react';
import audioFile from '../../../../songs/traveling.wav';
import './SongPlayer.css'

const SongPlayer = () => {
  const audioPlayer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);

  const togglePlay = () => {
    if (isPlaying) {
      audioPlayer.current.pause();
    } else {
      audioPlayer.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const stopPlay = () => {
    audioPlayer.current.pause();
    audioPlayer.current.currentTime = 0;
    setIsPlaying(false);
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
    audioPlayer.current.volume = event.target.value;
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioPlayer.current.currentTime);
  };

  const handleLoadedData = () => {
    setDuration(audioPlayer.current.duration);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="song-player">
      <audio
        src={audioFile}
        ref={audioPlayer}
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={handleLoadedData}
      />
      <div className="song-controls">
        <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
        <button onClick={stopPlay}>Stop</button>
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={(event) => {
            audioPlayer.current.currentTime = event.target.value;
            setCurrentTime(event.target.value);
          }}
        />
        <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default SongPlayer;
