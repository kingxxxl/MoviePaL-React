import React, { useContext, useState } from 'react';
import {
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
// import Logo from '../img/logobs.png';
import Logo from '../img/posters.jpg';

import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { register } = useContext(AuthContext);

  const onClick = async () => {
    const registerResult = await register(username, password);
    if (registerResult) {
      navigate('/login');
    }
  };

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
          <Text  color="#121440" fontSize="70px">
            Welcome !
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
            onClick={onClick}
            backgroundColor="#121440"
            color="white"
          >
            Register
          </Button>
          <HStack fontSize="22px">
            <Text color="#A8A6AF">You have an account ? </Text>
            <Link to="/login">Login !</Link>
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
