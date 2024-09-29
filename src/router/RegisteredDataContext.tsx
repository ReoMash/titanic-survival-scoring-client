import { createContext, useState } from 'react';

type Props = {
  children: JSX.Element;
};

type RegisteredData = {
  userName: string;
  age: string;
  sex: string;
  pclass: string;
  sibSp: number;
  parch: number;
  embarked: string;
};

type RegisterContextType = {
  registeredData: RegisteredData;
  setRegisteredData: (registeredData: RegisteredData) => void;
};

export const RegisteredDataContext = createContext<RegisterContextType>({
  registeredData: {
    userName: '',
    age: '0',
    sex: '0',
    pclass: '0',
    sibSp: 0,
    parch: 0,
    embarked: '0',
  },
  setRegisteredData: (registeredData: RegisteredData) => {},
});

export const Context = ({ children }: Props) => {
  const [registeredData, setRegisteredData] = useState<RegisteredData>({
    userName: '',
    age: '0',
    sex: '0',
    pclass: '1',
    sibSp: 0,
    parch: 0,
    embarked: 'S',
  });

  return (
    <RegisteredDataContext.Provider
      value={{ registeredData, setRegisteredData }}
    >
      {children}
    </RegisteredDataContext.Provider>
  );
};
