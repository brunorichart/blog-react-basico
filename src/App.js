
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Layout
import Layout from './components/Layout';

//Páginas
import Home from './pages/Home';
import Contact from './pages/Contact';
import Posts from './pages/Posts'; // Importar o novo componente
import PostDetail from './pages/PostDetail';
import Login from './pages/Login';

import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/*
            <Route
              path="/posts"
              element={
                <ProtectedRoute element={<Posts />} />
              }
            />
            */}
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostDetail />} /> {/* Adicionar a rota para visualizar post */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </Router>
  );
}

export default App;

