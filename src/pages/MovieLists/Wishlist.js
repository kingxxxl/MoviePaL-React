import React, {useEffect, useState} from 'react';
import {Box, Button, HStack, Image, Link, Spinner, Stack, Text, VStack} from '@chakra-ui/react';
import {Navigate, useNavigate} from 'react-router-dom';
import DisplayMovies from "../../components/DisplayMovies";

const Wishlist = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [noMovies, setNoMovies] = useState(false);



    const navigate = useNavigate();
    useEffect(() => {
        const requestMovie = async () => {
            const request = await fetch('/user/wish-list');
            const data = await request.json();
            console.log(data);
            if (request.status === 200) {
                setLoading(false);
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
        requestMovie();
    }, []);


    return (
        <Box h={"100vh"} bg={"#101526"}>

            <Stack  isInline spacing={4} display={"flex"} justifyContent={"center"}>
                {loading &&
                <Spinner color={"white"} size="xl" mt={"50vh"} />}
            </Stack>

            {(!loading && !noMovies)&& <DisplayMovies movies={movies} listType={"wish"} />}
            {(!loading && noMovies)  && <DisplayMovies movies={movies} listType={"wish"} />}
        </Box>
    )
}
export default Wishlist;