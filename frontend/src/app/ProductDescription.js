import PropTypes from 'prop-types';

export default PropTypes.shape({
  pk: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  discount: PropTypes.number,
  brand: PropTypes.string,
  color: PropTypes.arrayOf(PropTypes.string),
});
