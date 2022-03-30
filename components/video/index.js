import { memo } from 'react';

import styles from './video.module.css';

const Video = () => {
  return (
    <>
      <div className={styles.bottom_video}>
        <video className={styles.video} playsInline autoPlay muted loop crossOrigin="true">
          <source src="/movie/photobooth_test.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
};

Video.displayName = 'Video';
export default memo(Video);
