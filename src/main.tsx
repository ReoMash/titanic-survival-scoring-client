import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Home } from './router/Home';
import { RegisterArea } from './router/RegisterArea';
import { RegisterAge } from './router/RegisterArea/RegisterAge';
import { RegisterEmbarked } from './router/RegisterArea/RegisterEmbarked';
import { RegisterParch } from './router/RegisterArea/RegisterParch';
import { RegisterPclass } from './router/RegisterArea/RegisterPclass';
import { RegisterSex } from './router/RegisterArea/RegisterSex';
import { RegisterSibSp } from './router/RegisterArea/RegisterSibSp';
import { RegisterUserName } from './router/RegisterArea/RegisterUserName';
import { Context } from './router/RegisteredDataContext';
import { Result } from './router/Result';

const router = createHashRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/register',
      element: <RegisterArea />,
      children: [
        {
          path: '/register/userName',
          element: <RegisterUserName />,
        },
        {
          path: '/register/age',
          element: <RegisterAge />,
        },
        {
          path: '/register/sex',
          element: <RegisterSex />,
        },
        {
          path: '/register/pclass',
          element: <RegisterPclass />,
        },
        {
          path: '/register/sibSp',
          element: <RegisterSibSp />,
        },
        {
          path: '/register/parch',
          element: <RegisterParch />,
        },
        {
          path: '/register/embarked',
          element: <RegisterEmbarked />,
        },
      ],
    },
    {
      path: '/result',
      element: <Result />,
    },
  ],
  {
    basename: '/titanic-survival-scoring-client',
  }
);

createRoot(document.getElementById('root')!).render(
  <ChakraProvider>
    <React.StrictMode>
      <Context>
        <RouterProvider router={router} />
      </Context>
    </React.StrictMode>
  </ChakraProvider>
);
