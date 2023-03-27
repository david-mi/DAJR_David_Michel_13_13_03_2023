import PropTypes from "prop-types";

export const FeaturePropTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.exact({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired
};