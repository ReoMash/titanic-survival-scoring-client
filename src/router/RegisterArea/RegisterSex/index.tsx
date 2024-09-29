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

export const RegisterSex = () => {
  const { registeredData, setRegisteredData } = useContext(
    RegisteredDataContext
  );

  const navigate = useNavigate();
  const onClickNavigate = () => {
    navigate('/register/pclass');
  };

  return (
    <VStack>
      <Text>About Your Gender...</Text>
      <RadioGroup
        value={registeredData.sex}
        onChange={(value) => {
          setRegisteredData({ ...registeredData, sex: value });
        }}
        defaultValue='female'
      >
        <HStack>
          <Radio value='female'>Female</Radio>
          <Radio value='male'>Male</Radio>
        </HStack>
      </RadioGroup>
      <Button colorScheme='blue' onClick={onClickNavigate}>
        Register
      </Button>
    </VStack>
  );
};
