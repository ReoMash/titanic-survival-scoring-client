import {
  Button,
  HStack,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisteredDataContext } from '../../RegisteredDataContext';

export const RegisterEmbarked = () => {
  const { registeredData, setRegisteredData } = useContext(
    RegisteredDataContext
  );

  const navigate = useNavigate();
  const onClickNavigate = () => {
    navigate('/result');
  };

  return (
    <VStack>
      <Text>Chose Your Departure Port</Text>
      <RadioGroup
        value={registeredData.embarked}
        onChange={(value) => {
          setRegisteredData({ ...registeredData, embarked: value });
        }}
        defaultValue='0'
      >
        <HStack>
          <Radio value='C'>Cherbourg</Radio>
          <Radio value='Q'>Queenstown</Radio>
          <Radio value='S'>Southampton</Radio>
        </HStack>
      </RadioGroup>
      <Button colorScheme='blue' onClick={onClickNavigate}>
        Register
      </Button>
    </VStack>
  );
};
