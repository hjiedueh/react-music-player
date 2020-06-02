import React from 'react';

function Playlist(props) {
	return (
		<div>
			<ul>
				{props.tracks.map(track => (
					<li>{track.name}</li>
				))}
			</ul>
		</div>
	)
}

export default (Playlist)