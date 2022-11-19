import React, { createContext, ReactNode } from 'react';
import useCats from './hooks/useCats';
// import useBreeds from './hooks/useBreeds';
import { ICatContextType } from '../@types/cat';

interface Props {
    children?: ReactNode
}

export const CatContext = createContext<ICatContextType | null>(null);

export const CatContextProvider = ({ children }: Props): JSX.Element => {
  const {
    cats,
    setCats,
    breeds,
    setBreeds,
    selectBreed
  } = useCats();

  // const {
  //   breeds,
  //   setBreeds,
  //   selectBreed
  // } = useBreeds();

  const provider = {
    cats,
    setCats,
    breeds,
    setBreeds,
    selectBreed
  };

  return (
    <CatContext.Provider value={provider}>{children}</CatContext.Provider>
  );
};