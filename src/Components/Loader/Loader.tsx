import styles from "./loader.module.css";
import { LoaderPropTypes } from "./propTypes";

interface Props {
  className: string
}

/**
 * Loader reused everwhere need on the application
 * 
 */

const Loader = ({ className }: Props) => {
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