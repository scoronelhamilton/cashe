import React, { useState } from 'react';
import { useInput } from '../../../hooks/input-hooks';
import { isSymbolPresent } from '../../../helpers/index';

const TradeForm = ({ cash, symbols }) => {
  const { value: symbol, bind: bindSymbol, reset: resetSymbol } = useInput('');
  const { value: amount, bind: bindAmount, reset: resetAmount } = useInput('');
  const [symbolIsValid, setSymbolIsValid] = useState(false);
  const [amountIsValid, setAmountIsValid] = useState(false);
  const [hasEnoughCash, setHasEnoughCash] = useState(false);
  const [transactionIsValid, setTransactionIsValid] = useState(false);

  const validateSymbol = () => {
    const formatedSymbol = symbol.replace(/ /g, '').toUpperCase();
    if (isSymbolPresent(symbols, formatedSymbol)) {
      setSymbolIsValid(true);
    } else {
      setSymbolIsValid(false);
    }
  };

  const validateAmount = () => {
    // Check if is whole number
    if (parseInt(amount) % 1 === 0) {
      setAmountIsValid(true);
    } else {
      setAmountIsValid(false);
      return;
    }

    // Check if cash is enough
    // get price of symbol
    //
  };

  // • A user can only buy whole number quantities of shares.
  // • A user can only buy shares if they have enough cash in their account for a given purchase.
  // • A user can only buy shares if the ticker symbol is valid.

  const validateAllFields = () => {
    if (symbolIsValid && amountIsValid && hasEnoughCash) {
      setTransactionIsValid(true);
    } else {
      setTransactionIsValid(false);
    }
  };

  const resetForm = () => {
    resetTicker();
    resetAmount();
  };

  const handleSubmit = e => {
    e.preventDefault();
    validateAllFields();
    if (!transactionIsValid) return;

    console.log('valid');
    //   // add transaction to db
    resetForm();
    //   // add transaction to db
  };

  return (
    <div>
      <h3>{`Cash: $${cash}`}</h3>
      <form id="trade-form" onSubmit={handleSubmit}>
        <label>
          Symbol
          <input type="text" placeholder="AAPL" onBlur={validateSymbol} {...bindSymbol} />
        </label>
        <label>
          Amount
          <input type="text" placeholder="100" onBlur={validateAmount} {...bindAmount} />
        </label>
      </form>
      <button type="submit" form="trade-form" disabled={!transactionIsValid}>
        Buy
      </button>
    </div>
  );
};

export default TradeForm;
