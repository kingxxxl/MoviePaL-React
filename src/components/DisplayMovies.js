import React, {useState} from 'react';
import {
    Box,
    Button,
    ButtonGroup,
    Container, FormControl, FormLabel,
    Grid,
    GridItem,
    HStack,
    Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay,
    SimpleGrid,
    Stack,
    Text, useDisclosure,
    VStack
} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import Textt from "./Textt";
import {Select} from "chakra-react-select";

const DisplayMovies = ({movies}) => {
    const navigate = useNavigate();
    const [counter, setCounter] = useState(0);
    const [isNewLine, setIsNewLine] = useState(true);

    const {isOpen, onOpen, onClose} = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [list, setList] = useState("");
    const [movie, setMovie] = useState("");

    console.log(list);
    console.log(movie);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const request = await fetch('/movie/add/name/wish-list/' + movie, {
            method: 'POST',
        });
        const data = await request.json();
        if (request.status === 200) {
            console.log(data);
            navigate(0)
        }
        if (request.status === 404) {
            console.log('error');
            return;
        }
    }


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

        <>
            <Box bg={"#101526"}>
                <SimpleGrid minChildWidth={['10rem', '15rem']} spacing='40px'>
                    {movies.map(movie => (
                        <Textt key={movie.imdbID} property={property} movie={movie}/>
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
                    <ModalContent bg={"#101526"}>
                        <ModalHeader textColor={"white"} bg={"#101526"}>Add Movie To Your List</ModalHeader>
                        <ModalBody>

                            <VStack bg={"#101526"}>

                                {/*<Box>*/}
                                {/*    <Text textColor={"white"} fontSize={"3rem"}>Add Movie To Your List</Text>*/}
                                {/*</Box>*/}

                                <Box>
                                    <Input textColor={"white"} onChange={(e) => setMovie(e.target.value)}
                                           placeholder={"Movie Title"} value={movie}/>
                                    <Box width={"100%"} bgColor={"white"} textColor={"black"}>
                                        <Select
                                            onChange={(e) => setList(e.value)}
                                            placeholder={"Select a list"}
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