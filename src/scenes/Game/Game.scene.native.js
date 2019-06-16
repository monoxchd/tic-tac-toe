import React, { PureComponent } from 'react';

import GameContainer from './Game.container';

export default class GameScene extends PureComponent {
  render() {
    return <GameContainer {...this.props} />
  }
}
