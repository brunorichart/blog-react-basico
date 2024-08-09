import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Spinner, Alert } from 'react-bootstrap';

const PostDetail = () => {
  const { id } = useParams(); // Obtém o ID do post da URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:8000/posts/${id}`);
        if (!response.ok) {
          throw new Error('Erro ao carregar o post');
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <Container className="text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Carregando...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Alert variant="danger">
          {error}
        </Alert>
      </Container>
    );
  }

  if (!post) {
    return (
      <Container>
        <Alert variant="warning">
          Post não encontrado.
        </Alert>
      </Container>
    );
  }

  return (
    <Container>
      <h1>{post.title}</h1>
      <Card>
        <Card.Body>
          <Card.Text>{post.body}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PostDetail;
