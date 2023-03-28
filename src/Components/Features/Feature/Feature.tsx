import { FeaturePropTypes } from "./propTypes";
import type { FeatureType } from "../Features";

/**
 * Show feature, containing a title, text and image as logo
 */

const Feature = ({ title, text, image }: FeatureType) => {
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