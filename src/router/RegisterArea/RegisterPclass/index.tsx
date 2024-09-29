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

export const RegisterPclass = () => {
  const { registeredData, setRegisteredData } = useContext(
    RegisteredDataContext
  );

  const navigate = useNavigate();
  const onClickNavigate = () => {
    navigate('/register/sibSp');
  };

  return (
    <VStack>
      <Text>Your Social Rank...?</Text>
      <RadioGroup
        value={registeredData.pclass}
        onChange={(value) => {
          setRegisteredData({ ...registeredData, pclass: value });
        }}
        defaultValue='0'
      >
        <HStack>
          <Radio value='1'>Upper Class</Radio>
          <Radio value='2'>Middle Class</Radio>
          <Radio value='3'>Working Class</Radio>
        </HStack>
      </RadioGroup>
      <Button colorScheme='blue' onClick={onClickNavigate}>
        Register
      </Button>
    </VStack>
  );
};
