import './App.css';
import React from 'react';
import { Button } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import Microphone from './Microphone';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="mic-container">
          {/* <h1>Hi there, I am your AI Assistant Buddy here!</h1> */}
          {/* <Button variant="outlined"> <MicIcon style={{ fontSize: 60, color: 'blue' }} />
        </Button> */}

          {/* {isRecording ? (
          <Button onClick={handleStopRecording}><MicIcon style={{ fontSize: 60, color: 'blue' }} /></Button>
        ) : (
          <Button onClick={handleStartRecording}><MicOffIcon style={{ fontSize: 60, color: 'blue' }} /></Button>
        )} */}
          <Microphone />
        </div>
      </div>
    </div>

  );
}

export default App;
