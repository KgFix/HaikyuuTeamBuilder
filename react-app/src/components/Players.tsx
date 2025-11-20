import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import './Players.css';
import PlayerCard from './PlayerCard';

interface Player {
  id: string;
  // add other player properties here if they exist in the document
}

const Players: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const playersCollection = collection(db, 'players');
      const playerSnapshot = await getDocs(playersCollection);
      const playerList = playerSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPlayers(playerList as Player[]);
    };

    fetchPlayers();
  }, []);

  return (
    <div className="players-container">
      {players.map(player => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
};

export default Players;
