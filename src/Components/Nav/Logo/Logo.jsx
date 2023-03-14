import { Link } from "react-router-dom";

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

export default Logo;