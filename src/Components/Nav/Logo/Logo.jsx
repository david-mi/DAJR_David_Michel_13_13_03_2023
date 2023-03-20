import { Link } from "react-router-dom";
import { LogoPropTypes } from "./propTypes";

/**
 * @typedef LogoProps
 * @type {Object}
 * @property {string} title
 * @property {Object} image
 * @property {string} image.src
 * @property {string} image.alt
 */

/**
 * Main application logo
 * 
 * @param {LogoProps} props
 * @returns {JSX.Element}
 */

const Logo = ({ image, title }) => {
  const { alt, src } = image;
  return (
    <Link className="main-nav-logo" to="/">
      <img
        className="main-nav-logo-image"
        src={src}
        alt={alt}
      />
      <h1 className="sr-only">{title}</h1>
    </Link>
  );
};

Logo.propTypes = LogoPropTypes;

export default Logo;