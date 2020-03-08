/*
 * This function sorts the portfolio in ascending order
 * Input: array of objects
 * Output: sorted array of objects
 */

exports.sortPortfolio = (portfolio, direction) => {
  const compare = (a, b) => {
    if (!a[criteria] || !b[criteria]) {
      return 0;
    }

    const elementA =
      typeof a[criteria] === 'string' ? a[criteria].toLowerCase() : a[criteria];

    const elementB =
      typeof b[criteria] === 'string' ? b[criteria].toLowerCase() : b[criteria];

    let comparison = 0;
    if (elementA > elementB) {
      comparison = 1;
    } else if (elementA < elementB) {
      comparison = -1;
    }

    if (direction === 'desc') {
      return comparison * -1;
    } else {
      return comparison;
    }
  };

  return data.sort(compare);
};
