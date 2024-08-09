import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <div>
      <h1>Contato</h1>
      <p>Preencha o formulário abaixo para entrar em contato conosco:</p>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Seu nome" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Seu email" />
        </Form.Group>

        <Form.Group controlId="formBasicMessage">
          <Form.Label>Mensagem</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Sua mensagem" />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
