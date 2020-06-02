import React, {useState, useEffect} from 'react';
import { MusicPlayerContext} from './musicplayercontext';
import Top from './top';
import Playlist from './playlist';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { faForward } from '@fortawesome/free-solid-svg-icons'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'

function Player(props) {
	const [tracks, setTracks] = useState([]);
	const [currentTrack, setCurrentTrack] = useState(0);
	
	console.log(tracks[currentTrack])

	useEffect(() => {
		setTracks(props.tracks);
	}, [])

	
	

	return (
		<div>
		   <MusicPlayerContext.Provider value={tracks}>
			<Top track={tracks[currentTrack]}/>
			<div>
				<FontAwesomeIcon icon={faBackward} className="player-icon" />
				<FontAwesomeIcon icon={faPlay} className="player-icon" />
				<FontAwesomeIcon icon={faForward} />
				<FontAwesomeIcon icon={faVolumeUp} className="player-icon"/>
			</div>
			<div id="ProgBar">
				<span id="ProgPoint"></span>
			</div>
			<Playlist tracks={tracks}/>
		   </MusicPlayerContext.Provider>
		</div>
	)
}

export default (Player)