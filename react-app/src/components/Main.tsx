import React from 'react';
import './Main.css';
import Team from './Team';
import Players from './Players';

const Main: React.FC = () => {
  return (
    <main className="main-content">
      <img src="/images/CourtBackground.png" alt="Haikyuu Court" />
      <Team />
      <Players />
    </main>
  );
};

export default Main;

