import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//nitila

const initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);

//providers

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions

  function deleteTransaction(id) {
    dispatch({type: 'DELETE_TRANSACTION', payload: id});
  }

  function addTransaction(transaction) {
    dispatch({type: 'Add_TRANSACTION', payload: transaction});
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
