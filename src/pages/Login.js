import React, { useState, useContext } from 'react';
import {
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Link as ChakraLink,
  Text,
  VStack,
} from '@chakra-ui/react';
// import Logo from '../img/logobs.png';
import Logo from '../img/posters.jpg';
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
    <HStack spacing="0">
      <Flex
        height="100vh"
        width={['100%', '100%', '50%']}
        backgroundColor="white"
        alignItems="center"
        justifyContent="center"
      >
        <VStack width={['90%', '600px']} spacing="2rem">
          <Text fontWeight="extrabold" color="blue.700" fontSize="70px">
            MoviePal
          </Text>
          <Text color="#121440" fontSize="70px">
            Welcome back
          </Text>
          <Input
            value={username}
            onChange={e => setUsername(e.target.value)}
            height="53px"
            placeholder="Username"
            type="text"
          ></Input>
          <Input
            value={password}
            onChange={e => setPassword(e.target.value)}
            height="53px"
            placeholder="Password"
            type="password"
          ></Input>
          <Button
            fontSize="1.5rem"
            width="182px"
            backgroundColor="#121440"
            color="white"
            onClick={onClick}
          >
            Login
          </Button>
          <HStack fontSize="22px">
            <Text color="#A8A6AF">You don't have an account</Text>
            <Link to="/register">Register !</Link>
          </HStack>
        </VStack>
      </Flex>
      <Flex
        width="50%"
        display={['none', 'none', 'flex']}
        height="100vh"
        alignItems="center"
        justifyContent="center"
        backgroundColor="#F9F9FC"
      >
        <Image src={Logo} width="100%" height="100%"></Image>
      </Flex>
    </HStack>
  );
};

export default Login;
