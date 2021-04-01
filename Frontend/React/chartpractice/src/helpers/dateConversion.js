const convertISOString = (timeSince) => {
  const realDateString = new Date(timeSince);
  const stringDate = realDateString.toDateString();
  return stringDate;
};

// Will take the prices array and parse out the iso string to convert it to an actual
// data string and the price fixed and return a formatted object of that data
export const createDatePriceCollection = (coinData) => {
  const data = coinData.prices.map((coin) => {
    const currentISODate = coin[0];
    const currentPriceAtISO = coin[1].toFixed(2);
    const date = convertISOString(currentISODate);
    return {
      date,
      price: currentPriceAtISO,
    };
  });
  return data.splice(1); // the days query always returns day + 1 so we can remove the furthest out date in our array of dates and prices
};
