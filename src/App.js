import React from 'react';
import Header from './components/Header';
import {Balance} from './components/Balance';
import {IncExp} from './components/IncExp';
import TransactionList from './components/TransactionList';
import AddTran from './components/AddTran';
import './App.css';
import {GlobalProvider} from './context/GlobalStatus';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncExp />
        <TransactionList />
        <AddTran />
      </div>
    </GlobalProvider>
  );
}

export default App;
