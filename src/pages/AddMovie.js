import {Box, Button, HStack, Image, Input, Link, Text, VStack} from '@chakra-ui/react';
import {Select} from "chakra-react-select";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const AddMovie = () => {
    const navigate = useNavigate();
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
            navigate("/dashboard");
        }
        if (request.status === 404) {
            console.log('error');
            return;
        }
    }


    return (
        <>
            <VStack>

                <Box>
                    <Text fontSize={"3rem"}>Add Movie To Your List</Text>
                </Box>

                <Box>
                    <Input onChange={(e) => setMovie(e.target.value)} placeholder={"Movie Title"} value={movie}/>
                    <Box width={"85%"}>
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

                <Button onClick={handleSubmit}>
                    Add The Movie
                </Button>


                <Button onClick={() => navigate(-1)}>
                    Go Back </Button>
            </VStack>

        </>
    );
}
export default AddMovie;

