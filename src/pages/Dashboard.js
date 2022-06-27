import {Button, Text, VStack} from '@chakra-ui/react';
import React, {useContext, useEffect, useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Dashboard = () => {
    const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const requestMovie = async () => {
      const request = await fetch('/user/wishlist');
      const data = await request.json();
      console.log(data);
        setMovies(data);
    };
    requestMovie();
  }, []);

  const { logout, removeIsLogged } = useContext(AuthContext);

  return (
    <VStack>
        {movies.map(movie => (<Text key={movie}>{movie.title}</Text>))}
      <Button
        onClick={() => {
          const isLogedOut = logout();
          if (isLogedOut) {
            removeIsLogged();
            navigate('/login');
          }
        }}
      >
        Logout !
      </Button>
    </VStack>
  );
};

export default Dashboard;
