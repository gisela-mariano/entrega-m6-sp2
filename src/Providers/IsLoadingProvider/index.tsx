import React from 'react';
import { createContext, useState } from 'react';
import { IIsLoadingContext, IReactChildren } from '../../interfaces';

const DEFAULT_VALUE = {
  isLoading: false,
  setIsLoading: () => {}
}

export const IsLoadingContext = createContext<IIsLoadingContext>(DEFAULT_VALUE);

export const IsLoadingProvider = ({ children }: IReactChildren) => {
  const [isLoading, setIsLoading] = useState(DEFAULT_VALUE.isLoading);

  return (
    <IsLoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </IsLoadingContext.Provider>
  );
};
