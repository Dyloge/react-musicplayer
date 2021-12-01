// Player buttons and other stuff
//Importing React library. In each file that we may use jsx React should be imported
import React  from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay ,faAngleLeft,faAngleRight,faPause} from '@fortawesome/free-solid-svg-icons';

//Making Player function 
const Player = ({currentSong, setCurrentSong, isPlaying, setIsPlaying, audioRef,songInfo,setSongInfo ,songs,setSongs})=> {
    const activeLibraryHandler= (nextPrev)=> {
        const newSongs = songs.map((song)=> {
            if(song.id ===nextPrev.id) {
                return {
                    ...song,
                    active:true,
                }
            } else {
                return {
                    ...song,
                    active:false,
                };
            }

        })
        setSongs(newSongs);
    }

    //Event Handlers
    const playSongHandler= ()=> {
        if (isPlaying ){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };
    const dragHandler =(e) => {

        audioRef.current.currentTime =e.target.value
        setSongInfo ({...songInfo,currentTime :e.target.value})
    };
    const skipTrackHandler = async (direction)=> {
        let currentIndex = songs.findIndex((song) => song.id ===currentSong.id)
        if (direction ==='skip-forward') {
           await setCurrentSong(songs[(currentIndex+1) % songs.length]);
           activeLibraryHandler(songs[(currentIndex+1) % songs.length]);
        }
        if (direction ==='skip-back') {
            if ((currentIndex-1) % songs.length ===-1) {
                await setCurrentSong (songs[songs.length -1]);
                activeLibraryHandler(songs[songs.length -1]);
                if(isPlaying) audioRef.current.play();
                return;
            }
            await setCurrentSong(songs[(currentIndex-1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex-1) % songs.length]);
        }
        if(isPlaying) audioRef.current.play();
    };


    const formatTime =(time)=> {
        return (
            Math.floor(time/60) +':'+ ('0'+Math.floor(time % 60)).slice(-2)
    )
    };

    //Add the styles
    const trackAnim = {
        transform : `translateX(${songInfo.animationPercentage}%)`
    };



    return (
        <div className= 'player'>
            <div className="time-control">
                <h6>{formatTime(songInfo.currentTime)}</h6>
                <div style = {{background:`linear-gradient(to right,${currentSong.color[0]},${currentSong.color[1]})`}}className="track">
                    <input min={0} max= {songInfo.duration || 0} value= {songInfo.currentTime} onChange = {dragHandler}
                    type="range" />
                    <div style = {trackAnim} className="animate-track">

                    </div>
                </div>
                <h6>{songInfo.duration ? formatTime(songInfo.duration) : '0:00'}</h6>
            </div>
            <div className="play-control">
                <FontAwesomeIcon  onClick= { () => skipTrackHandler('skip-back')} className='skip-back' size = '2x' icon ={faAngleLeft}/>
                <FontAwesomeIcon onClick = {playSongHandler}className='play' size = '2x' icon ={isPlaying ? faPause: faPlay}/>
                <FontAwesomeIcon onClick= { () => skipTrackHandler('skip-forward')} className='skip-forward'  size = '2x' icon ={faAngleRight}/>
            </div>

        </div>
    );
//Exporting the component to import into App.js
};
export default Player;