import React from 'react';
import { MusicPlayerProvider} from './musicplayercontext'
import Audio from './audio'
import TrackList from './tracklist'
import Player from './player'


function App() {
  return (
    <MusicPlayerProvider>
      <div className='main'>
      	<Audio/>
      	<TrackList/>
      	<Player/>
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
