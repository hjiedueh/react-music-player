import {useState, useContext, useEffect, useLayoutEffect} from 'react';
import {MusicPlayerContext} from './musicplayercontext'
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

const useMusicPlayer = () => {
	let audioPlayer

	const [state, setState] = useContext(MusicPlayerContext);
	const [currentTrackDuration, setCurrentTrackDuration] = useState(0);
 	const [currentTrackMoment, setCurrentTrackMoment] = useState(0);
  	const [progressBarWidth, setProgressBarWidth] = useState('0');
  	const [clickedTime, setClickedTime] = useState(0);

	const initPlayer = () => {
		audioPlayer = document.getElementById('audioPlayer')
		audioPlayer.addEventListener('loadedmetadata', handleMetadata)
		audioPlayer.addEventListener('timeupdate', handleTimeUpdate)
	}

	useEffect(() => {
		if (clickedTime && clickedTime !== currentTrackMoment) {
			audioPlayer.currentTime = clickedTime
			setClickedTime(null)
		}
	}, [clickedTime, currentTrackMoment])

	useLayoutEffect(() => {
		initPlayer()
		
	})
	

	function togglePlay() {
		if (!state.isPlaying) {
			audioPlayer.play()
			setState(state => ({...state, isPlaying: true}))
		} else {
			audioPlayer.pause()
			setState(state => ({...state, isPlaying: false}))
		}
	}

	function playTrack(index) {
		if (index === state.currentTrackIndex) {
			togglePlay();
		} else {
			audioPlayer.pause()
			audioPlayer.load()
			audioPlayer.play()
			setState(state => ({...state, currentTrackIndex: index, isPlaying: true}))
		}
	}

	function playNextTrack() {
		const newIndex = (state.currentTrackIndex + 1) % state.tracks.length;
		playTrack(newIndex)
	}

	function playPreviousTrack() {
		const newIndex = ((state.currentTrackIndex + -1) % state.tracks.length + state.tracks.length) % state.tracks.length;
		playTrack(newIndex);
	}

	function formatDuration(duration) {
		return moment
		.duration(duration, 'seconds')
		.format('mm:ss', {trim: false})
	}

	function handleMetadata() {
		const duration = Math.floor(audioPlayer.duration);
		setCurrentTrackDuration(formatDuration(duration))
	}

	function handleTimeUpdate() {
		setCurrentTrackMoment(formatDuration(Math.floor(audioPlayer.currentTime)))
		setProgressBarWidth(Math.floor((audioPlayer.currentTime/audioPlayer.duration) * 100)+'%')
		if (audioPlayer.currentTime === audioPlayer.duration) {
			playNextTrack()
		}
	}

	function calcClickedTime(e) {
		const clickedPositionInPage = e.pageX
		const bar = document.getElementById('prog-back')
		const barStart = bar.getBoundingClientRect().left + window.scrollX
		const barWidth = bar.offsetWidth
		const clickPositionInBar = clickedPositionInPage - barStart
		const timePerPixel = audioPlayer.duration/barWidth
		console.log(bar)
		setClickedTime(timePerPixel * clickPositionInBar)
		audioPlayer.currentTime = clickedTime
	}

	function handleTimeDrag(e) {

		const updateTimeOnMove = e => {
			document.addEventListener('timeupdate', calcClickedTime)
		}
		document.addEventListener('mousemove', updateTimeOnMove)
		document.addEventListener('mouseup', () => {
			document.removeEventListener('mousemove', updateTimeOnMove)
		})
	}




	return {
		playTrack,
	    togglePlay,
	    currentTrackIndex: state.currentTrackIndex,
	    currentTrackName: state.currentTrackIndex !== null && state.tracks[state.currentTrackIndex].name,
	    currentTrackCover: state.currentTrackIndex !== null && state.tracks[state.currentTrackIndex].cover,
	    trackList: state.tracks,
	    isPlaying: state.isPlaying,
	    playPreviousTrack,
	    playNextTrack,
	    currentTrackDuration,
	    currentTrackMoment,
	    progressBarWidth,
	    initPlayer,
	    handleMetadata,
	    handleTimeUpdate,
	    handleTimeDrag,
	    clickedTime,
	    calcClickedTime
	}
};

export default (useMusicPlayer)