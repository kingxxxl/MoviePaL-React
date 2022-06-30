import React, { useState, useContext } from 'react';
import {
  Box,
  Button, Divider,
  Flex,
  HStack,
  Image,
  Input,
  Link as ChakraLink, Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Logo from '../img/posters.jpg';
import back from '../img/back_v2.png';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Login = ({ setLoggedIn, loggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { login, addIsLogged } = useContext(AuthContext);

  const onClick = async () => {
    const loginResult = await login(username, password);
    if (loginResult) {
      addIsLogged();
      navigate('/dashboard');
    }
  };

  // console.log(login);

  if (localStorage.getItem('loggedIn')) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <HStack h={"110vh"} bg={"#101526"} spacing="0">
      <Flex
        height="100vh"
        width={['100%', '100%', '50%']}
        alignItems="center"
        justifyContent="center"
      >
        <VStack width={['90%', '600px']} spacing="2rem">
          <Box>
            <Image  borderRadius={"xl"} backgroundColor={"rgba(111, 0, 255)"} src={back} />
            <Text fontFamily={"fantasy"} color="white" fontSize="3.6rem">
              MoviePal
            </Text>

          </Box>

          <Text color="white" fontSize="70px">
            Welcome back
          </Text>
          <Input
            value={username}
            onChange={e => setUsername(e.target.value)}
            height="53px"
            placeholder="Username"
            type="text"
            color={"white"}

          ></Input>
          <Input
            value={password}
            onChange={e => setPassword(e.target.value)}
            height="53px"
            placeholder="Password"
            type="password"
            color={"white"}

          ></Input>
          <Button
            fontSize="1.5rem"
            width="182px"
            backgroundColor={'#6f00ff'}
            textColor={'white'}
            onClick={onClick}
          >
            Login
          </Button>
          <HStack textColor={"#6f00ff"} fontSize="22px" >

            <Box mt={"90px"} >
              <HStack>
                <Text color="#A8A6AF" >You don't have an account?</Text>

                <Link    to="/register">Register !</Link>
              </HStack>


            </Box>

          </HStack>
        </VStack>

      </Flex>

      <Stack  bg={"#6f00ff"} direction='row' h='110vh' p={"2px"}>
      </Stack>

      <Flex
        width="50%"
        display={['none', 'none', 'flex']}
        height="100vh"
        alignItems="center"
        justifyContent="center"
        backgroundColor="#F9F9FC"
      >
        <Image src={Logo} width="100%" height="110vh"></Image>
      </Flex>
    </HStack>
  );
};

export default Login;
