import formatCurrency from 'format-currency';
import moment from 'moment';

export const isSymbolPresent = (symbols, target) => {
  /* 
  Symbols are sorted -> perform binary search
  Symbol Format: {
    "symbol": "AAPL",
    "date": "2017-04-19",
    "isEnabled": true,
    }
  */

  if (!Array.isArray(symbols) || typeof target !== 'string' || target.length === 0) {
    return false;
  }

  let startIndex = 0;
  let endIndex = symbols.length - 1;

  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (target === symbols[middleIndex]['symbol']) {
      if (symbols[middleIndex]['isEnabled']) {
        return true;
      } else {
        return false;
      }
    }
    // Search Right Side Of Array
    if (target > symbols[middleIndex]['symbol']) {
      startIndex = middleIndex + 1;
    }
    // Search Left Side Of Array
    if (target < symbols[middleIndex]['symbol']) {
      endIndex = middleIndex - 1;
    }
  }

  return false;
};

export const convertToCurrency = num => {
  let opts = { format: '%s%v', symbol: '$' };
  return formatCurrency(num, opts);
};

export const formatDate = date => {
  return moment(date).format('MM/DD/YYYY');
};
