import propTypes from 'prop-types';

export default propTypes.shape({
  board: propTypes.instanceOf(Array).isRequired,
  currentPlayer: propTypes.number.isRequired,
  resetBoard: propTypes.func.isRequired,
});
