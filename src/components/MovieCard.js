import React from 'react';
import {Badge, Box, Image, Tooltip} from "@chakra-ui/react";
import Imdb from '../img/IMDB_Logo_2016.svg.png';
import {DeleteIcon} from '@chakra-ui/icons'


const MovieCard = ({movie, listType}) => {



    const removeMovie = async (e) => {


        const request = await fetch("/movie/remove/name/"+listType + "-list/" + e, {
            method: 'DELETE',
        });
        const data = await request.json();
        if (request.status === 200) {
            console.log("Movie removed")
            return;
        }
        if (request.status === 400) {
            console.log('error');
            return;
        }
    }

    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='xl' p={"1"} overflow='hidden'>
            <Image boxSize='280px' boxShadow={"-webkit-box-shadow: 5px 13px 28px 5px #2D3B6A; \n" +
                "box-shadow: 5px 13px 28px 5px #2D3B6A;"} borderRadius='xl' src={movie.poster} alt={"..."}/>

            <Box p='3'>
                <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
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


                {/*<Tooltip label="Hey, I'm here!" aria-label='A tooltip'>*/}
                {/*    Hover me*/}
                {/*</Tooltip>*/}
                <Tooltip

                    label={movie.title}

                >
                    <Box mt='1'
                         color='white'
                         fontSize='2xl'
                         fontWeight='bold'
                         as='h4'
                         lineHeight='tight'
                         noOfLines={1}>

                        {movie.title}
                    </Box>

                </Tooltip>

                <Box color='white' fontSize='xl'>
                    {movie.year}
                </Box>

                <Box display='flex' mt='2' alignItems='center'>

                    <Image w={"60px"} src={Imdb} alt={"..."}/>
                    <Box as='span' ml='2' color='white' fontSize='l'>
                        {movie.imdbRating}
                    </Box>
                    <Tooltip label={"Remove"}>
                        <DeleteIcon  w={8} h={8} ml={"20px"}/>
                    </Tooltip>

                </Box>
            </Box>
        </Box>
    )
};

export default MovieCard;