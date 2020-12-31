const convertISOString = (timeSince) => {
  const realDateString = new Date(timeSince);
  const stringDate = realDateString.toDateString();
  return stringDate;
};

export const createDatePriceCollection = (coinData) => {
  if (!coinData) return null;
  const data = coinData.prices.map((coin, index) => {
    const currentISODate = coin[index][0];
    const currentPriceAtISO = coin[index][1].toFixed(2);
    const date = convertISOString(currentISODate);
    return {
      date,
      price: currentPriceAtISO,
    };
  });
  console.log(data);
  return data;
};
