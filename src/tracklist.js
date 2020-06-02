import React, {useEffect} from 'react';
import useMusicPlayer from './usemusicplayer';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'

const TrackList = () => {
	const {trackList, playTrack, currentTrackName, isPlaying, togglePlay, currentTrackCover, progressBarWidth, currentTrackIndex} = useMusicPlayer();
	
	useEffect(() => {
		let progress = document.getElementsByClassName('tracklist-progress')

		let current = document.getElementsByClassName("active");

		if (current.length === 0) {
			document.getElementsByClassName('tracklist-progress')[currentTrackIndex].className += ' active'
		} else {
			current[0].style.width = '0'
			current[0].className = current[0].className.replace(" active", "")
			progress[currentTrackIndex].className += ' active'
			current[0].style.width = progressBarWidth
		}
	})



	return (
		<Navbar collapseOnSelect expand="lg" variant="dark" className="bottom-header">
			<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
			<Navbar.Collapse id="responsive-navbar-nav">
				<ul className='tracklist'>
					{trackList.map((track, index) => (
						<li className='track-container' onClick={() => playTrack(index)}>
							<img src={currentTrackCover} className='tracklist-cover'/>
							<div className='tracklist-progress'></div>
							<span className='tracklist-name'>{track.name}</span>
						</li>
					))}
				</ul>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default(TrackList)