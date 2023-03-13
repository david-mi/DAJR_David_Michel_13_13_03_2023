import { FeaturePropTypes } from "./propTypes";

/**
 * @typedef FeatureImage
 * @type {object}
 * @property {string} src
 * @property {string} alt
 */

/**
 * Show feature, containing a title, text and image as logo
 * 
 * @param {object} props
 * @param {string} props.title 
 * @param {string} props.text 
 * @param {FeatureImage} props.image
 * @returns {JSX.Element}
 */

const Feature = ({ title, text, image }) => {
  const { src, alt } = image;
  return (
    <div className="feature-item">
      <img
        src={src}
        alt={alt}
        className="feature-icon"
      />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

Feature.propTypes = FeaturePropTypes;

export default Feature;