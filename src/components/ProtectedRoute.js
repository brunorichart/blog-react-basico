import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { token, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Mostrar uma tela de carregamento enquanto o estado de autenticação está sendo verificado
  }

  return token ? <Element {...rest} /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
