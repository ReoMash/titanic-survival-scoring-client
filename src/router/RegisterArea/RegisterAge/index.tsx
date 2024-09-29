import {
  Button,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisteredDataContext } from '../../RegisteredDataContext';

export const RegisterAge = () => {
  const { registeredData, setRegisteredData } = useContext(
    RegisteredDataContext
  );
  const navigate = useNavigate();
  const onClickNavigate = () => {
    navigate('/register/sex');
  };

  return (
    <VStack>
      <Text>How Old Are You?</Text>
      <NumberInput
        defaultValue={20}
        min={0}
        max={100}
        bg={'white'}
        onChange={(value) => {
          setRegisteredData({ ...registeredData, age: value });
        }}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Button colorScheme='blue' onClick={onClickNavigate}>
        Register
      </Button>
    </VStack>
  );
};
