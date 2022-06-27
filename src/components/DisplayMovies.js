import React, {useState} from 'react';
import {Box, Button, Container, Grid, GridItem, HStack, Image, SimpleGrid, Stack, Text, VStack} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import Textt from "./Textt";

const DisplayMovies = ({movies}) => {
    const navigate = useNavigate();
    const [counter, setCounter] = useState(0);
    const [isNewLine, setIsNewLine] = useState(true);

    const checkCounter = async () => {
        await console.log(counter);
        if (counter > 3) {
            setIsNewLine(true);
        } else {
            console.log("no new line");
            setCounter(counter + 1);
            setIsNewLine(false);
        }
    }

    const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center in the heart of historic Los Angeles',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
    }
    return (

        // <>
        //
        //     {/*<VStack>*/}
        //
        //
        //     {/*<Box bg={"black"}display={"flex"} justifyContent={"center"} alignItems={"center"}>*/}
        //
        //         {/*<Grid templateColumns='repeat(5, 1fr)' gap={4}>*/}
        //
        //
        //
        //         {/*        {movies.map(movie => (*/}
        //
        //         {/*            <GridItem colStart={0} colEnd={4} h='10' bg='papayawhip' >*/}
        //
        //         {/*                    <Image display={"flex"} src={movie.poster} alt="..."/>*/}
        //         {/*                    <Text color={"white"} key={movie.imdbID}>{movie.title} {movie.year}</Text>*/}
        //
        //         {/*            </GridItem>*/}
        //
        //         {/*        ))}*/}
        //
        //         {/*</Grid>*/}
        //
        //
        //         {/*{ movies.map(movie => (*/}
        //         {/*    <Box key={movie.imdbID}>*/}
        //         {/*        <Image w={"100%"} h={"100%"} src={movie.poster} alt="..."/>*/}
        //         {/*        <Textt key={movie.imdbID}>{movie.title} {movie.year}</Textt>*/}
        //         {/*    </Box>*/}
        //         {/*))}*/}
        //
        //
        //         {/*//todo later*/}
        //         {/*{*/}
        //         {/*    checkCounter() && movies.map(movie => (*/}
        //         {/*        <Box key={movie.imdbID}>*/}
        //         {/*            <Image w={"100%"} h={"100%"} src={movie.poster} alt="..."/>*/}
        //         {/*            <Textt key={movie.imdbID}>{movie.title} {movie.year}</Textt>*/}
        //         {/*        </Box>*/}
        //         {/*    ))*/}
        //         {/*}*/}
        //
        //
        //
        //
        //     </Box>
        //         <Button alignSelf={"center"} onClick={() => navigate("/add-movie")}>
        //             Add Movies
        //         </Button>
        //         <Button alignSelf={"center"} onClick={() => navigate(-1)}>
        //             Go Back
        //         </Button>
        //     </VStack>
        // </>


        <>

            <SimpleGrid minChildWidth={['15rem','30rem']} spacing='40px'>
                {movies.map(movie => (

                    <Textt key={movie.imdbID} property={property} movie={movie}/>
                ))}

            </SimpleGrid>
        </>


    )
}

export default DisplayMovies;