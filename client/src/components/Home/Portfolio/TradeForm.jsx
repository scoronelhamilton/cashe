import React, { useState, useEffect } from 'react';
import { useInput } from '../../../hooks/input-hooks';
import { isSymbolPresent } from '../../../helpers/index';

const TradeForm = ({ cash, symbols }) => {
  const { value: symbol, bind: bindSymbol, reset: resetSymbol } = useInput('');
  const { value: amount, bind: bindAmount, reset: resetAmount } = useInput('');

  const [symbolIsValid, setSymbolIsValid] = useState(false);
  const [amountIsValid, setAmountIsValid] = useState(false);
  const [transactionIsValid, setTransactionIsValid] = useState(false);

  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    if (amountIsValid && symbolIsValid) {
      setTransactionIsValid(true);
    } else {
      setTransactionIsValid(false);
    }
  }, [symbolIsValid, amountIsValid]);

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
    const formatedAmount = Number(amount);
    if (formatedAmount % 1 === 0) {
      setAmountIsValid(true);
    } else {
      setAmountIsValid(false);
    }
  };

  const resetForm = () => {
    resetSymbol();
    resetAmount();
    setTransactionIsValid(false);
    setSymbolIsValid(false);
    setAmountIsValid(false);
  };

  const handleKeyUp = cb => {
    clearTimeout(timeoutId);
    setTimeoutId(setTimeout(cb, 1000));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('here');
    if (!transactionIsValid) return;

    console.log('valid');
    //   // add transaction to db
    resetForm();
  };

  return (
    <div>
      <h3>{`Cash: $${cash}`}</h3>
      <form id="trade-form" onSubmit={handleSubmit}>
        <label>
          Symbol
          <input
            type="text"
            placeholder="AAPL"
            onKeyUp={() => handleKeyUp(validateSymbol)}
            {...bindSymbol}
          />
        </label>
        <label>
          Amount
          <input
            type="text"
            placeholder="1000"
            disabled={!symbolIsValid}
            onKeyUp={() => handleKeyUp(validateAmount)}
            {...bindAmount}
          />
        </label>
      </form>
      <button type="submit" form="trade-form" disabled={!transactionIsValid}>
        Buy
      </button>
    </div>
  );
};

export default TradeForm;
