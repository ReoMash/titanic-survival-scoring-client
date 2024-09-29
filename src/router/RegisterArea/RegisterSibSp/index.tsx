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

export const RegisterSibSp = () => {
  const { registeredData, setRegisteredData } = useContext(
    RegisteredDataContext
  );
  const [sibSpNumber, setSibSpNumber] = useState(registeredData.sibSp);

  const navigate = useNavigate();
  const onClickNavigate = () => {
    navigate('/register/parch');
  };

  return (
    <VStack>
      <Text>How many Siblings and Spounses Do You Accompany?</Text>
      <VStack alignItems={'start'}>
        <HStack>
          <Text>Siblings</Text>
          <NumberInput
            defaultValue={0}
            min={0}
            max={10}
            bg={'white'}
            onChange={(value) => setSibSpNumber(sibSpNumber + Number(value))}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </HStack>
        <HStack>
          {' '}
          <Text>Sponses</Text>
          <NumberInput
            defaultValue={0}
            min={0}
            max={1}
            bg={'white'}
            onChange={(value) => setSibSpNumber(sibSpNumber + Number(value))}
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
          setRegisteredData({ ...registeredData, sibSp: sibSpNumber });
        }}
      >
        Register
      </Button>
    </VStack>
  );
};
