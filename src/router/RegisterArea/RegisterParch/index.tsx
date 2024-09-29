import {
  Button,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisteredDataContext } from '../../RegisteredDataContext';

export const RegisterParch = () => {
  const { registeredData, setRegisteredData } = useContext(
    RegisteredDataContext
  );
  const [parchNumber, setParchNumber] = useState(registeredData.parch);

  const navigate = useNavigate();
  const onClickNavigate = () => {
    navigate('/register/embarked');
  };

  return (
    <VStack>
      <Text>How many Parents and Children Do You Accompany?</Text>
      <VStack alignItems={'start'}>
        <HStack>
          <Text>Parents</Text>
          <NumberInput
            defaultValue={0}
            min={0}
            max={2}
            bg={'white'}
            onChange={(value) => setParchNumber(parchNumber + Number(value))}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </HStack>
        <HStack>
          <Text>Children</Text>
          <NumberInput
            defaultValue={0}
            min={0}
            max={10}
            bg={'white'}
            onChange={(value) => setParchNumber(parchNumber + Number(value))}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </HStack>
      </VStack>
      <Button
        colorScheme='blue'
        onClick={() => {
          onClickNavigate();
          setRegisteredData({ ...registeredData, parch: parchNumber });
        }}
      >
        Register
      </Button>
    </VStack>
  );
};
