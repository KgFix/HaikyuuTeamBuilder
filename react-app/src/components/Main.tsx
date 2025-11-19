import React from 'react';
import './Main.css';
import Team from './Team';

const Main: React.FC = () => {
  return (
    <main className="main-content">
      <img src="/images/CourtBackground.png" alt="Haikyuu Court" />
      <Team />
    </main>
  );
};

export default Main;

