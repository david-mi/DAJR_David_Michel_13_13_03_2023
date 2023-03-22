import { Link } from "react-router-dom";
import styles from "./notFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>Oops !</h1>
      <h2>Page non trouvée.</h2>
      <Link to="/">
        <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
        Revenir à la page d'accueil
      </Link>
    </div>
  );
};

export default NotFound;