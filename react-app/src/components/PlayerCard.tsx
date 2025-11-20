import React from 'react';
import './PlayerCard.css';

interface PlayerCardProps {
  player: {
    id: string;
  };
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <div className="player-card">
      <img src={`/images/Players/${player.id}.png`} alt={player.id} />
    </div>
  );
};

export default PlayerCard;
