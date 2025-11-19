import React from 'react';
import PlayerSlot from './PlayerSlot';
import './Team.css';

const Team = () => {
  return (
    <div className="team-lineup">
      <div className="court">
        <div className="front-row">
          <div className="player-position pos-4">
            <PlayerSlot />
          </div>
          <div className="player-position pos-5">
            <PlayerSlot />
          </div>
          <div className="player-position pos-6">
            <PlayerSlot />
          </div>
          <div className="player-position pos-libero">
            <PlayerSlot />
          </div>
        </div>
        <div className="back-row">
          <div className="player-position pos-1">
            <PlayerSlot />
          </div>
          <div className="player-position pos-2">
            <PlayerSlot />
          </div>
          <div className="player-position pos-3">
            <PlayerSlot />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
