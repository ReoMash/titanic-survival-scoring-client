import { Button, Input, Text, VStack } from '@chakra-ui/react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisteredDataContext } from '../../RegisteredDataContext';

export const RegisterUserName = () => {
  const { registeredData, setRegisteredData } = useContext(
    RegisteredDataContext
  );

  const navigate = useNavigate();
  const onClickNavigate = () => {
    navigate('/register/age');
  };

  return (
    <VStack>
      <Text>What Is Your Name?</Text>
      <Input
        bg={'white'}
        onChange={(e) =>
          setRegisteredData({
            ...registeredData,
            userName: e.target.value,
          })
        }
      />
      <Button
        colorScheme='blue'
        onClick={onClickNavigate}
        isDisabled={!registeredData.userName}
      >
        Register
      </Button>
    </VStack>
  );
};
