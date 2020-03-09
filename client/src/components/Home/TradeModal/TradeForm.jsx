import React, { useState, useEffect } from 'react';
import ErrorMessage from '../../Errors/index';
import { useInput } from '../../../hooks/input-hooks';
import { isSymbolPresent, convertToCurrency } from '../../../helpers/index';
import { buyStock, getCurrentPrices, getOpeningPrices } from '../../../api/helpers';

const TradeForm = ({
  cash,
  portfolio,
  symbols,
  addStock,
  setOpeningPrices,
  setCurrentPrices,
}) => {
  const { value: symbol, bind: bindSymbol, reset: resetSymbol } = useInput('');
  const { value: amount, bind: bindAmount, reset: resetAmount } = useInput('');

  const [symbolIsValid, setSymbolIsValid] = useState(false);
  const [amountIsValid, setAmountIsValid] = useState(false);
  const [transactionIsValid, setTransactionIsValid] = useState(false);
  const [transactionSuccessful, setTransactionSuccessful] = useState(false);

  const [timeoutId, setTimeoutId] = useState(null);

  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState('');
  const renderErrorMessage = () => <ErrorMessage hasError={hasError} message={error} />;
  const renderSuccessMessage = () =>
    transactionSuccessful ? (
      <p style={{ color: 'green' }}>Transaction successful</p>
    ) : (
      <p style={{ visibility: 'hidden' }}>...</p>
    );

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
    const value = Number(amount);

    if (isNaN(value)) {
      setAmountIsValid(false);
      return;
    }
    if (value % 1 === 0) {
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
    if (!transactionIsValid) {
      setHasError(true);
      setError('Transaction is not valid');
    }
    const formatedSymbol = symbol.replace(/ /g, '').toUpperCase();
    const formatedAmount = Number(amount);
    buyStock(formatedSymbol, formatedAmount)
      .then(({ data }) => {
        setHasError(false);
        setTransactionSuccessful(true);
        addStock(data);
        resetForm();
      })
      .catch(err => {
        setHasError(true);
        setError('Error in transaction. Try again later.');
        resetAmount();
        setTransactionIsValid(false);
        setAmountIsValid(false);
        console.error(err.message);
      });
  };

  useEffect(() => {
    async function getNewStockData() {
      const stocks = Object.keys(portfolio);
      const { data: currentPrices } = await getCurrentPrices(stocks);
      setCurrentPrices(currentPrices);
      const { data: openingPrices } = await getOpeningPrices(stocks);
      setOpeningPrices(openingPrices);
    }
    getNewStockData();
  }, [cash]);

  const handleError = () => {};

  return (
    <div id="trade-form-container">
      <h3>{cash ? `Wallet: ${convertToCurrency(cash)}` : ''}</h3>
      <div className="trade-form-wrapper">
        <form id="buy-form" className="trade-form" onSubmit={handleSubmit}>
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
            onKeyUp={() => handleKeyUp(validateAmount)}
            {...bindAmount}
          />
        </form>
        <button
          className="buy-btn"
          type="submit"
          form="buy-form"
          disabled={!transactionIsValid}
        >
          Buy
        </button>
        {renderErrorMessage()}
        {renderSuccessMessage()}
      </div>
    </div>
  );
};

export default TradeForm;
