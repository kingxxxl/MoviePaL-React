import {Box, Button, HStack, Text, VStack} from '@chakra-ui/react';
import React, {useContext, useEffect, useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Dashboard = () => {
  //   const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  // useEffect(() => {
  //   const requestMovie = async () => {
  //     const request = await fetch('/user/wishlist');
  //     const data = await request.json();
  //     console.log(data);
  //     if (request.status === 200) {
  //       setMovies(data);
  //     }
  //     if (request.status === 400) {
  //         console.log('error');
  //       setMovies(["no movies"])
  //         return;
  //     }
  //   };
  //   requestMovie();
  // }, []);

  const { logout, removeIsLogged } = useContext(AuthContext);

  return (
    <VStack>


        <Text color="#121440" fontSize="70px">
            Welcome back {localStorage.getItem('userName').toLocaleUpperCase()}!
        </Text>

        <VStack>
        <Button onClick={() => navigate('/wishList') } width={"100%"} height={"20%"} color={'#121440'} fontSize={'70px'}> WishList </Button>
        <Button onClick={() => navigate('/favorite-list') } width={"100%"} height={"20%"} color={'#121440'} fontSize={'70px'}> FavoriteList </Button>
        <Button onClick={() => navigate('/watched-list') } width={"100%"} height={"20%"} color={'#121440'} fontSize={'70px'}> WatchedList </Button>
        </VStack>





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
