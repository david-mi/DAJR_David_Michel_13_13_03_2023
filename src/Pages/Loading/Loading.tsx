import Loader from "../../Components/Loader/Loader";
import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <h1 className={styles.title}>Récupération des données...</h1>
      <Loader className={styles.loader} />
    </div>

  );
};

export default Loading;