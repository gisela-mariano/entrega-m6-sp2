import React from 'react';
import { createContext, useState } from 'react';
import { IIsRequestedContext, IReactChildren } from '../../interfaces';

const DEFAULT_VALUE = {
  isRequested: false,
  setIsRequested: () => {}
}

export const IsRequestedContext = createContext<IIsRequestedContext>(DEFAULT_VALUE);

export const IsRequestedProvider = ({ children }: IReactChildren) => {
  const [isRequested, setIsRequested] = useState(DEFAULT_VALUE.isRequested);

  return (
    <IsRequestedContext.Provider value={{ isRequested, setIsRequested }}>
      {children}
    </IsRequestedContext.Provider>
  );
};
