import React, {useContext, useState} from 'react';
import {GlobalContext} from '../context/GlobalStatus';
function AddTran() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const {addTransaction} = useContext(GlobalContext);
  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            onChange={e => {
              setText(e.target.value);
            }}
            value={text}
            type='text'
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            value={amount}
            type='number'
            placeholder='Enter amount...'
            onChange={e => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  );
}

export default AddTran;
