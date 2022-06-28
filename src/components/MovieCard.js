import React from 'react';
import {Badge, Box, Image} from "@chakra-ui/react";
import Imdb from '../img/IMDB_Logo_2016.svg.png';


const MovieCard = ({movie}) => {
    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='xl' p={"1"}>
            <Image w={"100rem"} src={movie.poster} alt={"..."}/>

            <Box p='3'>
                <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full'   px='2' colorScheme='teal'>
                        {movie.type}
                    </Badge>
                    <Box
                        color='white'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        &bull;  {movie.runtime}

                    </Box>
                </Box>

                <Box
                    mt='1'
                    color='white'
                    fontSize='2xl'
                    fontWeight='bold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}

                >
                    {movie.title}
                </Box>

                <Box color='white' fontSize='xl'>
                    {movie.year}
                </Box>

                <Box display='flex' mt='2' alignItems='center'>

                    <Image w={"60px"} src={Imdb} alt={"..."}/>
                    <Box as='span' ml='2' color='white' fontSize='l'>
                        {movie.imdbRating}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
};

export default MovieCard;