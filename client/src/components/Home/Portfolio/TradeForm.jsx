import React, { useState, useEffect } from 'react';
import { useInput } from '../../../hooks/input-hooks';
import { isSymbolPresent, convertToCurrency } from '../../../helpers/index';
import { addStock } from '../../../api/helpers';

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
    const formated = symbol.replace(/ /g, '').toUpperCase();
    if (isSymbolPresent(symbols, formated)) {
      setSymbolIsValid(true);
    } else {
      setSymbolIsValid(false);
    }
  };

  const validateAmount = () => {
    if (Number(amount) % 1 === 0) {
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
    if (!transactionIsValid) return;

    const formatedSymbol = symbol.replace(/ /g, '').toUpperCase();
    const formatedAmount = Number(amount);
    addStock(formatedSymbol, formatedAmount)
      .then(() => resetForm())
      .catch(err => {
        resetAmount();
        setTransactionIsValid(false);
        setAmountIsValid(false);
        console.error(err.message);
      });
  };

  return (
    <div>
      <h3>{cash ? `Cash: ${convertToCurrency(cash)}` : ''}</h3>
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
