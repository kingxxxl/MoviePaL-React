import React, {useEffect, useState} from 'react';
import {Box, Button, HStack, Link, Spinner, Stack, Text, VStack} from '@chakra-ui/react';
import {Navigate, useNavigate} from 'react-router-dom';

import DisplayMovies from "../../components/DisplayMovies";


const FavoriteList = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [noMovies, setNoMovies] = useState(false);

    useEffect(() => {
        const requestFavoriteList = async () => {
            const request = await fetch('/user/favorite-list');
            const data = await request.json();
            if (request.status === 200) {
                setMovies(data);
                setLoading(false);
            }
            if (request.status === 400) {
                console.log('error');
                setLoading(false);
                setNoMovies(true);
                return;
            }
        };
        requestFavoriteList();
    }, []);


    return (
        <Box h={"100vh"} bg={"#101526"}>

            <Stack isInline spacing={4} display={"flex"} justifyContent={"center"}>
                {loading &&
                    <Spinner color={"white"} size="xl" mt={"50vh"}/>}
            </Stack>

            {(!loading && !noMovies) && <DisplayMovies movies={movies} listType={"favorite"}/>}
            {(!loading && noMovies) && <DisplayMovies movies={movies} listType={"favorite"}/>}
        </Box>
    )
}
export default FavoriteList;