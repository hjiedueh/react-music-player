import React, {useState} from 'react';
import desire from './songs/desire.mp3'
import Go from './songs/Go DJ.mp3'
import Mal from './songs/Mal days.mp3'
import Cover from './songs/covers/desire.jpg' 

const MusicPlayerContext = React.createContext([{}, () => {}]);

const MusicPlayerProvider = (props) => {
	const [state, setState] = useState({
		tracks: [
			{
				name: 'SC - desire',
				file: desire,
				duration: '04:13',
				cover: Cover
			},
			{
				name: 'Lil Wayne - Go DJ',
				file: Go,
				duration: '04:41',
				cover: Cover
			},
			{
				name: 'SC - Mal days',
				file: Mal,
				duration: '02:03',
				cover: Cover
			},
		],
		isPlaying: false,
		currentTrackIndex: 0
	});

	return (
		<MusicPlayerContext.Provider value={[state, setState]}>
			{props.children}
		</MusicPlayerContext.Provider>
	);
}

export { MusicPlayerContext, MusicPlayerProvider}