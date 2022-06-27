import React, { useEffect, useState} from 'react';
import {Box, Button, HStack, Link, Text, VStack} from '@chakra-ui/react';
import {Navigate, useNavigate} from 'react-router-dom';

const Wishlist = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const requestMovie = async () => {
            const request = await fetch('/user/wishlist');
            const data = await request.json();
            console.log(data);
            if (request.status === 200) {
                setMovies(data);
            }
            if (request.status === 400) {
                console.log('error');
                setMovies(["no movies"])
                return;
            }
        };
        requestMovie();
    }, []);



    return (
        <VStack>
            <Text color="#121440" fontSize="70px">
                {movies.map(movie => (<Text key={movie.imdbID}>{movie.title} {movie.year}</Text>))}
            </Text>

            <Button onClick={() => navigate(-1)}>
                    Go Back
            </Button>
        </VStack>
    )
}
export default Wishlist;