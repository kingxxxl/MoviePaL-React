import React, { useEffect, useState} from 'react';
import {Box, Button, HStack, Link, Text, VStack} from '@chakra-ui/react';
import {Navigate, useNavigate} from 'react-router-dom';

const FavoriteList = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const requestFavoriteList = async () => {
            const request = await fetch('/user/favorite-list');
            const data = await request.json();
            console.log("no no" + data);
            if (request.status === 200) {
                setMovies(data);
            }
            if (request.status === 400) {
                console.log('error');
                setMovies(["no movies"])
                return;
            }
        };
        requestFavoriteList();
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
export default FavoriteList;