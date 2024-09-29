import { Text, VStack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export const RegisterArea = () => {
  return (
    <VStack>
      <Text>Questions</Text>
      <VStack bg='blue.200' w='80%' p={20} borderRadius={'lg'}>
        <Outlet />
      </VStack>
    </VStack>
  );
};
