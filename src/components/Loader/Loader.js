import styles from './loader.module.css';
const Loader = () => {
  return (
    <div className={styles.containerLoader}>
      <div className={styles.loader}></div>
    </div>
  );
};
export default Loader;
