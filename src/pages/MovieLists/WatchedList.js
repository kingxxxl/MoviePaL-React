import React, { useEffect, useState} from 'react';
import {Box, Button, HStack, Link, Text, VStack} from '@chakra-ui/react';
import {Navigate, useNavigate} from 'react-router-dom';

const WatchedList = () => {

    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const requestWatchedList = async () => {
            const request = await fetch('/user/watched-list');
            const data = await request.json();
            console.log("the fuck?!" + data);
            if (request.status === 200) {
                console.log(data);
                setMovies(data);
            }
            if (request.status === 400) {
                console.log('error');
                setMovies(["no movies"])
                return;
            }
        };
        requestWatchedList();
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
export default WatchedList;