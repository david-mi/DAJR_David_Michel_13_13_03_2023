import PropTypes from "prop-types";

export const LogoPropTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.exact({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired
};