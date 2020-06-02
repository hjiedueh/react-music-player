import React from 'react';
import useMusicPlayer from './usemusicplayer';

function Cover() {
	const {currentTrackCover} = useMusicPlayer()

	return (
		<div className='track-cover'>
			<img src={currentTrackCover}/>
		</div>
	)
}

export default (Cover)