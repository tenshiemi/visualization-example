import React from 'react';
import PauseIcon from 'material-ui/svg-icons/av/pause-circle-outline';
import PlayIcon from 'material-ui/svg-icons/av/play-circle-outline';
import { cyan500 } from 'material-ui/styles/colors';

const Controls = ({ isPlaying, startAnimation, stopAnimation }) => (
  <div className="ControlsWrapper" >
    {isPlaying ? (
      <button className="IconWrapper" type="button" onClick={stopAnimation}>
        <PauseIcon style={{ color: cyan500 }} />
      </button>
    ) : (
      <button className="IconWrapper" type="button" onClick={startAnimation}>
        <PlayIcon style={{ color: cyan500 }} />
      </button>
    )}
  </div>
);

export default Controls;
