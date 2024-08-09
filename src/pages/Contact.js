import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { sendEmail } from '../utils/api'; // Importar a função para enviar e-mail

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const emailData = {
      name,
      email,
      message,
    };

    try {
      const result = await sendEmail(emailData);
      setSuccessMessage('E-mail enviado com sucesso!');
      setErrorMessage('');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setErrorMessage('Falha ao enviar o e-mail. Tente novamente.');
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <h1>Contato</h1>
      <p>Preencha o formulário abaixo para entrar em contato conosco:</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Nome</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Seu nome" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Seu email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </Form.Group>

        <Form.Group controlId="formBasicMessage">
          <Form.Label>Mensagem</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            placeholder="Sua mensagem" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
          />
        </Form.Group>

        <Button variant="primary" type="submit" className='mt-3'>
          Enviar
        </Button>
      </Form>

      {successMessage && <Alert variant="success" className="mt-3">{successMessage}</Alert>}
      {errorMessage && <Alert variant="danger" className="mt-3">{errorMessage}</Alert>}
    </div>
  );
};

export default Contact;

