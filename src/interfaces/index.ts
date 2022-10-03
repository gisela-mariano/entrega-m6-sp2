import React, { ReactNode } from 'react';

export interface IForm {
  amount: number;
  installments: number;
  mdr: number;
  days: string;
}

export interface IDataRequest {
  amount: number;
  installments: number;
  mdr: number;
  days?: string[];
}

export interface IResult {
  data: { [key: string]: number };
  status: number;
}

export interface IResultAmount {
  [key: string]: number;
}

export interface IAmountResultContext {
  amount: IResultAmount;
  setAmount: React.Dispatch<React.SetStateAction<IResultAmount>>;
}

export interface IAmountResultStatusContext {
  status: number;
  setStatus: React.Dispatch<React.SetStateAction<number>>;
}

export interface IIsLoadingContext {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IIsRequestedContext {
  isRequested: boolean;
  setIsRequested: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IReactChildren {
  children: ReactNode | ReactNode[];
}

export interface IPropsInput {
  isErrored: {
    amount: string | undefined;
    installments: string | undefined;
    mdr: string | undefined;
    days: string | undefined;
  };
}
