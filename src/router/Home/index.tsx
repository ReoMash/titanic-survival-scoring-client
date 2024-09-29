import { Button, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  const onClickNavigate = () => {
    navigate('/register/userName');
  };

  return (
    <VStack>
      <Text fontSize='3xl'>Titanic Survival Scoring</Text>
      <img src='./images/ship.png' />
      <Button colorScheme='blue' onClick={onClickNavigate}>
        Get Started
      </Button>
    </VStack>
  );
};
