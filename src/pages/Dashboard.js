import {Box, Button, HStack, Image, SimpleGrid, Text, VStack} from '@chakra-ui/react';
import React, {useContext, useEffect, useState} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import wish from '../img/wish.png';
import watched from '../img/watched.png';
import fav  from '../img/fav.png';

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

    const {logout, removeIsLogged} = useContext(AuthContext);

    return (
        <VStack h={"100vh"} bg={"#101526"}>


            <Text color="white" fontSize="1.8rem" my={"3rem"}>
                Welcome back {localStorage.getItem('userName').toLocaleUpperCase()}!
            </Text>

            <HStack>

                <SimpleGrid columns={[1, 3, 3]}>
                    <Image onClick={() => navigate('/wishlist')} cursor={"pointer"}   src={wish} alt="wishlist" />
                    <Image src={fav} onClick={() => navigate('/favorite-list')} cursor={"pointer"} alt="favoritelist" />
                    <Image src={watched} onClick={() => navigate('/watched-list')} cursor={"pointer"} alt="watchedlist" />
                </SimpleGrid>



            </HStack>

            {/*<VStack>*/}
            {/*    <Box>*/}

            {/*        <Image src={wish} alt="wishlist" width="100%" height="100%" />*/}

            {/*        <Button colorScheme='blue' mr={3} fontSize={"1.5rem"} h={"3rem"} my={"5"}*/}
            {/*                w={"20rem"} h={"3rem"} onClick={() => navigate('/wishlist')}>Wish List</Button>*/}
            {/*        <Button colorScheme='blue' mr={3} fontSize={"1.5rem"} h={"3rem"} my={"5"}*/}
            {/*                w={"20rem"} h={"3rem"} onClick={() => navigate('/favorite-list')}>Favorite List</Button>*/}
            {/*        <Button colorScheme='blue' mr={3} fontSize={"1.5rem"} h={"3rem"} my={"5"}*/}
            {/*                w={"20rem"} h={"3rem"} onClick={() => navigate('/watched-list')}>Watched List</Button>*/}

            {/*    </Box>*/}


            {/*</VStack>*/}


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
