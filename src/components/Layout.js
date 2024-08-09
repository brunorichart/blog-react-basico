import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './Navbar';
import Footer from './Footer';
import './Layout.css'; // Opcional, se você tiver estilos personalizados

const Layout = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      <Container className="my-4">
        <Row>
          <Col>
            <div className="central-content">
              {children}
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;