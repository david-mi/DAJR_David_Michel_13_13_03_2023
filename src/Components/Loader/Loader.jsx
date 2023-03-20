import styles from "./loader.module.css";
import { LoaderPropTypes } from "./propTypes";

/**
 * Loader reused everwhere need on the application
 * 
 * @param {Object} props
 * @param {string} className
 * @returns {JSX.Element}
 */

const Loader = ({ className }) => {
  return (
    <div className={`${styles.loader} ${className}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

Loader.propTypes = LoaderPropTypes;

export default Loader;