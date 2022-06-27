import React from 'react';
import {Badge, Box, Image} from "@chakra-ui/react";
import * as PropTypes from "prop-types";


const Textt = ({property, movie}) => {
    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image  w={"100%"} src={movie.poster} alt={property.imageAlt} />

            <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                        New
                    </Badge>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        {property.beds} beds &bull; {property.baths} baths
                    </Box>
                </Box>

                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                >
                    {property.title}
                </Box>

                <Box>
                    {property.formattedPrice}
                    <Box as='span' color='gray.600' fontSize='sm'>
                        / wk
                    </Box>
                </Box>

                <Box display='flex' mt='2' alignItems='center'>
                    {Array(5)
                        .fill('')
                        .map((_, i) => (
                          <Box>
                              GG
                          </Box>
                        ))}
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                        {property.reviewCount} reviews
                    </Box>
                </Box>
            </Box>
        </Box>
    )
};

export default Textt;