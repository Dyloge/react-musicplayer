import React from 'react';
import { useState,useRef } from "react";
//Importing styles
import './styles/app.scss';
//Importing Components
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';
//Importing Utilities
import data from './data';


function App() {
    //Referenece
    const audioRef = useRef(null);
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [songInfo, setSongInfo] = useState({
      currentTime:0,
      duration:0,
      animationPercentage:0,
    });

  const timeUpdateHandler =(e)=>{
    const current = e.target.currentTime;
    const duration =e.target.duration;
    //Calculate Percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation =Math.round((roundedCurrent /roundedDuration) *100);
    setSongInfo({...songInfo,currentTime: current,duration:duration-current,animationPercentage:animation})
  };
  const songEndHandler=async () =>{
    let currentIndex = songs.findIndex((song) => song.id ===currentSong.id)
    await setCurrentSong(songs[(currentIndex+1) % songs.length]);
    if(isPlaying) audioRef.current.play();
  }

  return (
    <div className={`App ${libraryStatus ? 'library-active': ''}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong = {currentSong}/>
      <Player currentSong ={currentSong} setCurrentSong={setCurrentSong} isPlaying = {isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef} setSongInfo={setSongInfo} songInfo={songInfo} songs= {songs} setSongs={setSongs}/>
      <Library setCurrentSong={setCurrentSong} songs ={songs} setSongs={setSongs} setSongInfo={setSongInfo} songInfo={songInfo} audioRef={audioRef} isPlaying={isPlaying} libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref= {audioRef} src={currentSong.audio} onEnded={songEndHandler}></audio>
    </div>
  );
}

export default App;
