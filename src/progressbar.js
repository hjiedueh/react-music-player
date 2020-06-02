import React, {useEffect} from 'react'
import BG from './songs/bg.JPG'
import useMusicPlayer from './usemusicplayer';

const ProgressBar = (props) => {
	const {progressBarWidth, calcClickedTime, currentTrackDuration, currentTrackMoment} = useMusicPlayer()
	// console.log(progressBarWidth)

	useEffect(() => {
		document.getElementById('point').style.left = progressBarWidth
		document.getElementById('progress').style.width = progressBarWidth
	})

	return (
		<div>
			<div>
				<div className='prog-back' id='prog-back' onClick={calcClickedTime}>
					<div className='point' id='point' onMouseUp={calcClickedTime}>
					</div>
					<div className='progress' id='progress'>
					</div>
				</div>
			</div>
			<div className='time'>
				<span className='curr-time'>{currentTrackMoment}</span>
				<span className='duration-time'>{currentTrackDuration}</span>
			</div>
		</div>
	)
}

export default ProgressBar