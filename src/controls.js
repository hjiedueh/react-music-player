import React from 'react';
import useMusicPlayer from './usemusicplayer';
import ProgressBar from './progressbar'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { faForward } from '@fortawesome/free-solid-svg-icons'
import { faBackward } from '@fortawesome/free-solid-svg-icons'


const Controls = () => {
	const {isPlaying, currentTrackName, togglePlay, playPreviousTrack, playNextTrack} = useMusicPlayer()


	return (
		<div>
			<div>
				<div>
					<h2 className='track-name'>{currentTrackName}</h2>
				</div>
				<div className='controls'>
					<FontAwesomeIcon icon={faBackward} className="player-icon" onClick={playPreviousTrack}/>
					<FontAwesomeIcon icon={isPlaying ? faPause : faPlay} className="player-icon" onClick={togglePlay}/>
					<FontAwesomeIcon icon={faForward} className="player-icon" onClick={playNextTrack}/>
				</div>
			</div>
			<ProgressBar/>
		</div>
	)
}

export default Controls