//Player header and song information
//Importing React library. In each file that we may use jsx React should be imported
import React from 'react';
//Making Player function 

const Song = ({currentSong})=> {
    
    return (
        <div className= 'song-container'>
            <img src ={currentSong.cover} alt= {currentSong.name}></img>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    );
};

//Exporting the component to import into App.js
export default Song;




