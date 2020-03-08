import React, { useState, useEffect } from 'react';
import { useInput } from '../../../hooks/input-hooks';
import { isSymbolPresent, convertToCurrency } from '../../../helpers/index';
import { buyStock } from '../../../api/helpers';

const TradeForm = ({ cash, symbols, addStock }) => {
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
    buyStock(formatedSymbol, formatedAmount)
      .then(({ data }) => {
        addStock(data);
        resetForm();
      })
      .catch(err => {
        resetAmount();
        setTransactionIsValid(false);
        setAmountIsValid(false);
        console.error(err.message);
      });
  };

  return (
    <div id="trade-form-container">
      <h3>{cash ? `Wallet: ${convertToCurrency(cash)}` : ''}</h3>
      <div className="trade-form-wrapper">
        <form className="trade-form" onSubmit={handleSubmit}>
          <label>Symbol</label>
          <input
            type="text"
            placeholder="e.g. AAPL"
            onKeyUp={() => handleKeyUp(validateSymbol)}
            {...bindSymbol}
          />

          <label>Amount</label>
          <input
            type="text"
            placeholder="e.g. 50"
            disabled={!symbolIsValid}
            onKeyUp={() => handleKeyUp(validateAmount)}
            {...bindAmount}
          />
        </form>
        <button
          className="buy-btn"
          type="submit"
          form="trade-form"
          disabled={!transactionIsValid}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default TradeForm;