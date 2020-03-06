import React, { useState, useEffect } from 'react';
import TransactionList from './TransactionList';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  return (
    <>
      <h2>Transactions</h2>
      <TransactionList transactions={transactions} />
    </>
  );
};

export default Transactions;
