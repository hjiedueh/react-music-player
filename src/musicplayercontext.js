import React, {useState} from 'react';
import desire from './songs/desire.mp3'
import Go from './songs/Go DJ.mp3'
import Mal from './songs/Mal days.mp3'
import desireCover from './songs/covers/desire.jpg'
import djCover from './songs/covers/go-dj.jpg'
import malCover from './songs/covers/mal-days.jpg'

const MusicPlayerContext = React.createContext([{}, () => {}]);

const MusicPlayerProvider = (props) => {
	const [state, setState] = useState({
		tracks: [
			{
				name: 'SC - desire',
				file: desire,
				duration: '04:13',
				cover: desireCover
			},
			{
				name: 'Lil Wayne - Go DJ',
				file: Go,
				duration: '04:41',
				cover: djCover
			},
			{
				name: 'SC - Mal days',
				file: Mal,
				duration: '02:03',
				cover: malCover
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