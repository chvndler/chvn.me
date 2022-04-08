import { motion } from 'framer-motion';
import styles from './framer-box.module.css';

const FramerBox = () => {
  return (
    <>
      <div className={styles.framer_box}>
        <motion.button
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
        />
      </div>
    </>
  );
};

export default FramerBox;
