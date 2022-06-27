import React from 'react';
import {Badge, Box, Image} from "@chakra-ui/react";
import * as PropTypes from "prop-types";
import Imdb from '../img/IMDB_Logo_2016.svg.png';


const Textt = ({property, movie}) => {
    return (
        <Box maxW='xl' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image w={"100%"} src={movie.poster} alt={"..."}/>

            <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                        {movie.type}
                    </Badge>
                    <Box
                        color='gray.500'
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
                    fontSize='2xl'
                    fontWeight='bold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                >
                    {movie.title}
                </Box>

                <Box  fontSize='xl'>
                    {movie.year}
                </Box>

                <Box display='flex' mt='2' alignItems='center'>

                    <Image w={"60px"} src={Imdb} alt={"..."}/>
                    <Box as='span' ml='2' color='gray.600' fontSize='l'>
                        {movie.imdbRating}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
};

export default Textt;