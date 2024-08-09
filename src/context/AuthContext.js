import React, { createContext, useState, useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //const navigate = useNavigate();


  useEffect(() => {
    if (token) {
      const fetchUserData = async () => {
        try {
          const response = await fetch('http://localhost:8000/posts', {//   /users
            headers: {
              //'Authorization': `Bearer ${token}`
            }
          });
          console.log(response);
          if (response.ok) {
            const data = await response.json();
            setUser(data);
          } else {
            throw new Error('Failed to fetch user data');
          }
        } catch (error) {
          console.error(error);
          setToken(null);
          localStorage.removeItem('token');
         // navigate('/login');
         window.location.href = '/login';
        } finally {
          setLoading(false);
        }
      }
    }
  }, [token]); 



  const login = async (email, password) => {

    try {
      const response = await fetch('http://localhost:8000/login');
      if (response.ok) {
        
        const { token } = await response.json();

        setToken(token);
        localStorage.setItem('token', token);

        if(token === 'xxxxxxxxxxxxxxx'){
          window.location.href = '/posts';
          
        }else{
          alert('Usuário ou senha incorretos')
        }
      }
    }catch (error) {
      console.error('Login failed:', error);
    }
    console.log('chamou o login')
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    //navigate('/login');
    console.log('logout')
  };

  const value = {
    token,
    user,
    loading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};
