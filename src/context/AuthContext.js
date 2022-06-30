import { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(localStorage.getItem('loggedIn'));

  const login = async (username, password) => {
    try {
      const request = await fetch('/user/login', {
        headers: {
          Authorization: `Basic ${window.btoa(username + ':' + password)}`,
          "X-Requested-With": `XMLHttpRequest`,
        },
        method: 'POST',
      });

      console.log(request.url);
      const data = await request.json();

      if (request.status === 401) {
        return false;
      }
      if (request.status === 201) {
        localStorage.setItem('userName', username);
        return true;
      }
      return false;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  const register = async (username, password) => {
    try {
      const request = await fetch('/user/register', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ username, password }),
      });
      console.log(request.url);

      if (request.status === 201) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.error(e);
      return false;
    }
  };



  const addIsLogged = () => {
    setIsLogged(true);
    localStorage.setItem('loggedIn', true);
  };

  const removeIsLogged = () => {
    setIsLogged(null);
    localStorage.removeItem('loggedIn');
  };

  const logout = async () => {
    const request = await fetch('/api/v1/auth/logout');
    if (request.status === 204) {
      return true;
    }
  };

  return (
    <AuthContext.Provider
      value={{ login, register, isLogged, addIsLogged, removeIsLogged, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
