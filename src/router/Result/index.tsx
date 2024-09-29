import { Button, Text, VStack } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { RegisteredDataContext } from '../RegisteredDataContext';

import axios from 'axios';

export const Result = () => {
  const { registeredData } = useContext(RegisteredDataContext);

  const [prediction, setPrediction] = useState<number>();
  const make_prediction = async () => {
    const response = await axios.post('http://127.0.0.1:5000/result', {
      registeredData,
    });
    setPrediction(Math.floor(response.data.prediction * 100 * 100) / 100);
  };
  console.log(prediction);
  return (
    <VStack>
      <Button onClick={() => make_prediction()} colorScheme='blue'>
        See Result
      </Button>
      {prediction ?? <Text> Survival Prediction : {prediction}%</Text>}
    </VStack>
  );
};
