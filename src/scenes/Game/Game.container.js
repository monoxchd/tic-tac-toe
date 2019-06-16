import React from 'react';

import compose from '../../utils/compose';
import { withGameConsumer } from '../../modules/game/GameProvider';

import Game from './Game';

const GameContainer = () => <Game />;

export default compose(
  withGameConsumer,
)(GameContainer);
