import React, { useState, useEffect } from 'react';
import { isSymbolPresent } from '../../../helpers/index';
import { addStock } from '../../../api/helpers';

const TradeForm = ({ cash, symbols }) => {
  const [symbol, setSymbol] = useState('');
  const [amount, setAmount] = useState('');

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
    if (isSymbolPresent(symbols, symbol)) {
      setSymbolIsValid(true);
    } else {
      setSymbolIsValid(false);
    }
  };

  const validateAmount = () => {
    if (amount % 1 === 0) {
      setAmountIsValid(true);
    } else {
      setAmountIsValid(false);
    }
  };

  const resetForm = () => {
    setSymbol('');
    setAmount('');
    setTransactionIsValid(false);
    setSymbolIsValid(false);
    setAmountIsValid(false);
  };

  const handleKeyUp = cb => {
    clearTimeout(timeoutId);
    setTimeoutId(setTimeout(cb, 1000));
  };

  const handleInputChange = target => {
    const { name, value } = target;
    if (name === 'symbol') {
      setSymbol(value.replace(/ /g, '').toUpperCase());
    } else if (name === 'amount') {
      setAmount(Number(value));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // if (!transactionIsValid) return;

    addStock(symbol, amount)
      .then(() => {
        console.log('success');
        resetForm();
      })
      .catch(err => {
        setAmount('');
        setTransactionIsValid(false);
        setAmountIsValid(false);
        console.error(err.message);
      });
  };

  return (
    <div>
      <h3>{cash ? `Cash: $${cash}` : ''}</h3>
      <form id="trade-form" onSubmit={handleSubmit}>
        <label>
          Symbol
          <input
            type="text"
            name="symbol"
            value={symbol}
            placeholder="AAPL"
            onChange={({ target }) => handleInputChange(target)}
            onKeyUp={() => handleKeyUp(validateSymbol)}
          />
        </label>
        <label>
          Amount
          <input
            type="text"
            name="amount"
            value={amount}
            placeholder="1000"
            // disabled={!symbolIsValid}
            onChange={({ target }) => handleInputChange(target)}
            onKeyUp={() => handleKeyUp(validateAmount)}
          />
        </label>
      </form>
      <button type="submit" form="trade-form" disabled={false}>
        Buy
      </button>
    </div>
  );
};

export default TradeForm;
