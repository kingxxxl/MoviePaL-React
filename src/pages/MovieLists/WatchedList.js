import React, { useEffect, useState} from 'react';
import {Box, Button, HStack, Image, Link, Text, VStack} from '@chakra-ui/react';
import {Navigate, useNavigate} from 'react-router-dom';
import DisplayMovies from "../../components/DisplayMovies";

const WatchedList = () => {

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const requestWatchedList = async () => {
            const request = await fetch('/user/watched-list');
            const data = await request.json();
            console.log(data);
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
        <>
            <DisplayMovies movies={movies}/>

        </>
    )
}
export default WatchedList;