import React from 'react';
import Controls from './controls'
import Cover from './cover'

function Player() {
	return (
		<div className="player">
			<Cover/>
			<Controls/>
		</div>
	)
}

export default (Player)