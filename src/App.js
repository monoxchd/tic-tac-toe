import React from 'react';

import GameProvider from './modules/game/GameProvider';
import GameScene from './scenes/Game/Game.scene';

const Application = () => (
  <GameProvider>
    <GameScene />
  </GameProvider>
);

export default Application;
