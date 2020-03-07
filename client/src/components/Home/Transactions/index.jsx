import React, { useState, useEffect } from 'react';
import TransactionList from './TransactionList';
import { getAllTransactions } from '../../../api/helpers';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getAllTransactions()
      .then(({ data }) => setTransactions(data))
      .catch(e => console.error(e.message));
  }, []);

  return (
    <>
      <h2>Transactions</h2>
      <TransactionList transactions={transactions} />
    </>
  );
};

export default Transactions;
