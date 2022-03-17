import { Row, Col } from 'react-grid-system';
import Entry from '@components/entry';

import styles from './grid.module.css';

const Grid = () => {
  return (
    <div className={styles.container}>
      <Row className={styles.grid_row} nogutter debug>
        <Col className={styles.col} sm={1} md={8} lg={8}>
          <div className={styles.entry}></div>
        </Col>
        <Col className={styles.col} sm={1} md={4} lg={4}>
          <div className={styles.entry}>
            <Entry
              title="Vercel Design"
              description="The Vercel Design System"
              image="https://assets.zeit.co/image/upload/q_auto/front/assets/design/geist-card.png"
              href="https://zeit.co/design"
            />
          </div>
        </Col>
        <Col className={styles.col} sm={1} md={4} lg={4}>
          <div className={styles.entry}>
            <Entry
              title="Vercel Design"
              description="The Vercel Design System"
              image="https://assets.zeit.co/image/upload/q_auto/front/assets/design/geist-card.png"
              href="https://zeit.co/design"
            />
          </div>
        </Col>
        <Col className={styles.col} sm={1} md={8} lg={8}>
          <div className={styles.entry}>
            <Entry
              title="Vercel Design"
              description="The Vercel Design System"
              image="https://assets.zeit.co/image/upload/q_auto/front/assets/design/geist-card.png"
              href="https://zeit.co/design"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Grid;
