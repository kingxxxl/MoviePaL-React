import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    ButtonGroup,
    Container, FormControl, FormLabel,
    Grid,
    GridItem,
    HStack,
    Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Progress,
    SimpleGrid,
    Stack,
    Text, useDisclosure,
    VStack
} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import {Select} from "chakra-react-select";
import MovieCard from "./MovieCard";



const DisplayMovies = ({movies, listType}) => {
    const navigate = useNavigate();
    const [counter, setCounter] = useState(0);
    const [isNewLine, setIsNewLine] = useState(true);

    const {isOpen, onOpen, onClose} = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [list, setList] = useState("");
    const [movie, setMovie] = useState("");
    const [foundMovies, setFoundMovies] = useState([]);
    const [searchLoading, setSearchLoading] = useState(false);
    const [foundsomething, setFoundsomething] = useState(false);
    const [search, setSearch] = useState([]);




const handleSubmit = async (e) => {
    e.preventDefault();

    const request = await fetch("/movie/add/name/" + list + "-list/" + movie, {
        method: 'POST',
    });
    const data = await request.json();
    if (request.status === 200) {
        navigate(0)
    }
    if (request.status === 400) {
        console.log('error');
        return;
    }
}



const findMovie = async (e) => {
    setMovie(e.target.value)
    setCounter(counter + 1);
    if (counter >= 3) {
        setSearchLoading(true);
        const request = await fetch(`https://www.omdbapi.com/?s=${e.target.value}&apikey=65199301`,
            {method: 'GET'});
        const data = await request.json();

        if (data.Search === undefined) {
        } else {
            await setFoundMovies(data.Search);
            await setSearchLoading(true);
            await setFoundMovies(data.Search);

        }
    }
    setSearchLoading(false);
    setCounter(e.target.value.length);
}
    useEffect(() => {
        setSearch(foundMovies);
    }, [foundMovies]) ;


    function copyMovie(e) {
        const temp = e.target.firstChild.data
        setMovie(temp.toLocaleLowerCase())

    }

return (

    <>
        <Box bg={"#101526"}>
            <SimpleGrid columns={[2, 3, 6]}
                        spacing={"40px"}>
                {movies.map(movie => (
                    <MovieCard key={movie.imdbID} movie={movie} listType={listType}/>
                ))}
            </SimpleGrid>

            <VStack>


                <ButtonGroup gap='4' my={"3"}>

                    <VStack>
                        <Button colorScheme='whiteAlpha' my={"3"} p={"6"}
                                fontWeight={"bold"}
                                fontSize={"1.5rem"}
                                w={"15rem"} h={"3rem"}
                                onClick={onOpen}
                        > Add Movies
                        </Button>
                        <Button colorScheme='blackAlpha' w={"15rem"}
                                fontWeight={"bold"}

                                fontSize={"1.5rem"} h={"3rem"} my={"5"} p={"4"} onClick={() => navigate(-1)}> Go
                            Back</Button>


                    </VStack>
                </ButtonGroup>


            </VStack>


            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay backdropFilter={"blur(6px)"}/>
                <ModalContent bg={"#101526"} outlineColor={"#6f00ff"}
                >
                    <ModalHeader textColor={"white"} bg={"#101526"}>Add Movie To Your List</ModalHeader>
                    <ModalBody>

                        <VStack bg={"#101526"}
                        >

                            <Box>
                                {
                                    searchLoading && <Progress size='xs' isIndeterminate/>

                                }


                                <Input textColor={"white"} onChange={findMovie}
                                       placeholder={"Movie Title"} value={movie}
                                />

                                <VStack>
                                    {foundMovies.map(movie => (

                                        <Text onClick={copyMovie} color={"white"} key={movie.imdbID} value={movie.Title}>{movie.Title} ({movie.Year})</Text>

                                    ))}

                                    {/*<Text color={"white"} >{foundMovies[0].Title}</Text>*/}
                                </VStack>
                                <Box width={"100%"}
                                     bgColor={"#101526"}
                                     textColor={"gray"}

                                >
                                    <Select

                                        onChange={(e) => setList(e.value)}
                                        placeholder={"Select a list"}
                                        borderColor={"#265798"}


                                        options={[
                                            {
                                                label: "Wish List",
                                                value: "wish",
                                            },
                                            {
                                                label: "Favorite List",
                                                value: "favorite",
                                            },
                                            {
                                                label: "Watched List",
                                                value: "watched",
                                            },
                                        ]}
                                    />
                                </Box>


                            </Box>

                        </VStack>

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
                            Add The Movie

                        </Button>

                        <Button onClick={onClose}>
                            Go Back </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    </>


)
}

export default DisplayMovies;