import React from 'react';
import { createContext, useState } from 'react';
import { IAmountResultContext, IReactChildren } from '../../interfaces';

const DEFAULT_VALUE = {
  amount: {},
  setAmount: () => {},
};

export const AmountResultContext =
  createContext<IAmountResultContext>(DEFAULT_VALUE);

export const AmountResultProvider = ({ children }: IReactChildren) => {
  const [amount, setAmount] = useState(DEFAULT_VALUE.amount);

  return (
    <AmountResultContext.Provider value={{ amount, setAmount }}>
      {children}
    </AmountResultContext.Provider>
  );
};
