import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { memo } from 'react';
import styles from './grid.module.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

class Grid extends React.Component {
  render() {
    // {lg: layout1, md: layout2, ...}
    // var layouts = getLayoutsFromSomewhere();

    const layout = [
      { i: '0', h: 1, w: 2, x: 0, y: 0, moved: false, static: false },
      { i: '1', h: 1, w: 1, x: 2, y: 0, moved: false, static: false },
      { i: '2', h: 2, w: 1, x: 2, y: 1, moved: false, static: false },
    ];
    return (
      <ResponsiveGridLayout
        className={styles.layout}
        layouts={layout}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        isResizable={false}
        useCSSTransforms={true}>
        <div className={styles.cell} key="1">
          1
        </div>
        <div className={styles.cell} key="2">
          2
        </div>
        <div className={styles.cell} key="3">
          3
        </div>
      </ResponsiveGridLayout>
    );
  }
}

Grid.displayName = 'Grid';
export default memo(Grid);
