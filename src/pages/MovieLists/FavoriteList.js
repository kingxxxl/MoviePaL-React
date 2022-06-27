import React, {useEffect, useState} from 'react';
import {Box, Button, HStack, Link, Text, VStack} from '@chakra-ui/react';
import {Navigate, useNavigate} from 'react-router-dom';

import DisplayMovies from "../../components/DisplayMovies";


const FavoriteList = () => {
    const [movies, setMovies] = useState([]);
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
        <Box h={"100vh"} bg={"#101526"}>

            <DisplayMovies movies={movies}/>

        </Box>
    )
}
export default FavoriteList;