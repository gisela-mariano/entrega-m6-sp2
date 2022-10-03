import React from "react";
import { createContext, useState } from "react";
import { IAmountResultStatusContext, IReactChildren } from "../../interfaces";

const DEFAULT_VALUE = {
  status: 0,
  setStatus: () => {}
}

export const AmountResultStatusContext = createContext<IAmountResultStatusContext>(DEFAULT_VALUE);

export const AmountResultStatusProvider = ({children}: IReactChildren) => {
  const [status, setStatus] = useState(DEFAULT_VALUE.status)

  return(
    <AmountResultStatusContext.Provider value={{status, setStatus}}>
      {children}
    </AmountResultStatusContext.Provider>
  )
}