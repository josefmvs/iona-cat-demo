import React, { createContext, ReactNode } from 'react';
import useCats from './hooks/useCats';
import { ICatContextType } from '../@types/cat';

interface Props {
    children?: ReactNode
}

export const CatContext = createContext<ICatContextType | null>(null);

export const CatContextProvider = ({ children }: Props): JSX.Element => {
  const {
    cats,
    setCats
  } = useCats();

  const provider = {
    cats,
    setCats
  };

  return (
    <CatContext.Provider value={provider}>{children}</CatContext.Provider>
  );
};