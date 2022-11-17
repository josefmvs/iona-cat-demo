import React, { createContext, ReactNode } from 'react';
import useCats from './hooks/useCats';
import { ICatContextType } from '../@types/cat';

interface Props {
    children?: ReactNode
}

export const CatContext = createContext<ICatContextType | null>(null);

export const CatContextProvider = ({ children }: Props): JSX.Element => {
  const {
    count,
    addCount,
    decreaseCount,
  } = useCats();

  const provider = {
    count,
    addCount,
    decreaseCount
  };

  return (
    <CatContext.Provider value={provider}>{children}</CatContext.Provider>
  );
};