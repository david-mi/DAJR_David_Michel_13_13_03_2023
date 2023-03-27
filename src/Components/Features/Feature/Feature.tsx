import { FeaturePropTypes } from "./propTypes";
import type { Feature as Props } from "../Features";

/**
 * Show feature, containing a title, text and image as logo
 */

const Feature = ({ title, text, image }: Props) => {
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