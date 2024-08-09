import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Sobre Nós</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
          </Col>
          <Col md={4}>
            <h5>Links Rápidos</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Home</a></li>
              <li><a href="/contact" className="text-light">Contato</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contato</h5>
            <p>
              <strong>Email:</strong> info@example.com<br />
              <strong>Telefone:</strong> (11) 1234-5678
            </p>
          </Col>
        </Row>
        <div className="text-center mt-3">
          <p>&copy; {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
