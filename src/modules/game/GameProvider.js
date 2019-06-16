import React, { createContext, Component } from 'react';
import propTypes from 'prop-types';

const GameContext = createContext({});

export default class GameProvider extends Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  getInitialState = () => ({
    board: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ],
    currentPlayer: 1,
  });

  resetBoard = () => {
    this.setState(this.getInitialState());
  }

  getContextValue = () => {
    const {
      board,
      currentPlayer,
    } = this.state;

    return {
      board,
      currentPlayer,
      resetBoard: this.resetBoard,
    };
  }

  render() {
    const { children } = this.props;

    return (
      <GameContext.Provider value={this.getContextValue()}>
        {children}
      </GameContext.Provider>
    );
  }
}

export const withGameConsumer = Child => props => (
  <GameConsumer>
    {context => (
      <Child {...props} gameContext={context} />
    )}
  </GameConsumer>
);

GameProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export const GameConsumer = GameContext.Consumer;
