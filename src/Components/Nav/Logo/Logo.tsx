import { Link } from "react-router-dom";
import { LogoPropTypes } from "./propTypes";
import type { Props } from "../Nav";

/**
 * Main application logo
 * 
 */

const Logo = ({ image, title }: Props) => {
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