import { Row, Col } from 'react-grid-system';
import Header from '@components/header';
import Entry from '@components/entry';

import { data as items } from '@data/film.json';

const Flight = () => {
  return (
    <>
      <main className="main">
        <section>
          <h1>All Projects</h1>
        </section>

        <Row className="react_row" nogutter debug>
          <Col sm={1} md={3} lg={3}>
            <div className="entry">
              <Entry
                title="Atelier Design Yield®"
                description="The design system."
                image="https://assets.zeit.co/image/upload/q_auto/front/assets/design/geist-card.png"
                href="https://zeit.co/design"
              />
            </div>
          </Col>

          <Col sm={1} md={4} lg={4}>
            <div className="entry">
              <Entry
                title="Three.js"
                description="My current three.js projects."
                image="https://res.cloudinary.com/dsdlhtnpw/image/upload/v1572672667/dusk_o7qcsa.png"
                href="https://github.com/pacocoursey/dusk"
                position="top"
              />
            </div>
          </Col>

          <Col sm={1} md={5} lg={5}>
            <div className="entry">
              <Entry
                title="Xi"
                description="Monochrome Atom UI theme"
                image="https://res.cloudinary.com/dsdlhtnpw/image/upload/v1572672666/xi_xti7x0.png"
                href="https://github.com/pacocoursey/xi-ui"
                position="top"
              />
            </div>
          </Col>

          <Col sm={1} md={4} lg={4}>
            <div className="entry">
              <Entry
                title="Xi"
                description="Monochrome Atom UI theme"
                image="https://res.cloudinary.com/dsdlhtnpw/image/upload/v1572672666/xi_xti7x0.png"
                href="https://github.com/pacocoursey/xi-ui"
                position="top"
              />
            </div>
          </Col>

          <Col sm={1} md={8} lg={8}>
            <div className="entry">
              <Entry
                title="F2PRS"
                description="Accurate hiscores for RuneScape"
                image="https://res.cloudinary.com/dsdlhtnpw/image/upload/v1572672667/f2prs_se1f4c.png"
                href="https://github.com/pacocoursey/f2prs"
                position="top"
              />
            </div>
          </Col>

          <Col sm={1} md={3} lg={3}>
            <div className="entry">
              <Entry
                title="Atelier Design Yield®"
                description="The design system."
                image="https://assets.zeit.co/image/upload/q_auto/front/assets/design/geist-card.png"
                href="https://zeit.co/design"
              />
            </div>
          </Col>

          <Col sm={1} md={4} lg={4}>
            <div className="entry">
              <Entry
                title="Three.js"
                description="My current three.js projects."
                image="https://res.cloudinary.com/dsdlhtnpw/image/upload/v1572672667/dusk_o7qcsa.png"
                href="https://github.com/pacocoursey/dusk"
                position="top"
              />
            </div>
          </Col>

          <Col sm={1} md={5} lg={5}>
            <div className="entry">
              <Entry
                title="Xi"
                description="Monochrome Atom UI theme"
                image="https://res.cloudinary.com/dsdlhtnpw/image/upload/v1572672666/xi_xti7x0.png"
                href="https://github.com/pacocoursey/xi-ui"
                position="top"
              />
            </div>
          </Col>

          <Col sm={1} md={4} lg={4}>
            <div className="entry">
              <Entry
                title="Xi"
                description="Monochrome Atom UI theme"
                image="https://res.cloudinary.com/dsdlhtnpw/image/upload/v1572672666/xi_xti7x0.png"
                href="https://github.com/pacocoursey/xi-ui"
                position="top"
              />
            </div>
          </Col>

          <Col sm={1} md={8} lg={8}>
            <div className="entry">
              <Entry
                title="F2PRS"
                description="Accurate hiscores for RuneScape"
                image="https://res.cloudinary.com/dsdlhtnpw/image/upload/v1572672667/f2prs_se1f4c.png"
                href="https://github.com/pacocoursey/f2prs"
                position="top"
              />
            </div>
          </Col>
        </Row>
      </main>
    </>
  );
};

export default Flight;
