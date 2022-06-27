import React, {useEffect, useState} from 'react';
import {Box, Button, HStack, Image, Link, Text, VStack} from '@chakra-ui/react';
import {Navigate, useNavigate} from 'react-router-dom';
import DisplayMovies from "../../components/DisplayMovies";

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
        <Box h={"100vh"} bg={"#101526"}>
            <DisplayMovies movies ={movies}/>

        </Box>
    )
}
export default Wishlist;