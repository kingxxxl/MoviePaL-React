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


    return (

        <>
            <Box bg={"#101526"}>
                <SimpleGrid columns={[2, 3, 4]}
                            spacing={"40px"}>
                    {movies.map(movie => (
                        <Textt key={movie.imdbID} movie={movie}/>
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
                                    <Input textColor={"white"} onChange={(e) => setMovie(e.target.value)}
                                           placeholder={"Movie Title"} value={movie}
                                    />
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