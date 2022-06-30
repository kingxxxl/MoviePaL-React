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



        <VStack h={"120vh"} bg={"#101526"}>


            <Text color="white" textAlign={"center"} shadow={"2xl"} fontWeight={"bold"} fontFamily={"s"} fontSize="2rem" my={"3rem"}>
                MOVIE LIGHT FOR EVERY NIGHT
            </Text>

            <HStack>

                <SimpleGrid columns={[1, 1, 3]} >
                    <Image opacity={1}  _hover={{opacity: 0.7}}  onClick={() => navigate('/wishlist')} cursor={"pointer"}   src={wish} alt="wishlist" />
                    <Image opacity={1}  _hover={{opacity: 0.7}} src={fav} onClick={() => navigate('/favorite-list')} cursor={"pointer"} alt="favoritelist" />
                    <Image opacity={1}  _hover={{opacity: 0.7}} src={watched} onClick={() => navigate('/watched-list')} cursor={"pointer"} alt="watchedlist" mb={"90px"} />
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


            <Box>
                <Button
                    w={"13rem"}
                    colorScheme={"whiteAlpha"}
                    fontWeight={"bold"}
                    fontSize={"1.4rem"}
                    p={6}
                    onClick={() => {
                        const isLogedOut = logout();
                        if (isLogedOut) {
                            removeIsLogged();
                            navigate('/login');
                        }
                    }}
                >
                    LOGOUT
                </Button>
            </Box>

        </VStack>

    );
};

export default Dashboard;
