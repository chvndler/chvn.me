import styles from './grid.module.css';

const Grid = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.entry}>Button.One</div>
      <div className={styles.entry}>Button.Two</div>
      <div className={styles.entry}>Button.Three</div>
      <div className={styles.entry}>Button.Four</div>
    </div>
  );
};

export default Grid;
