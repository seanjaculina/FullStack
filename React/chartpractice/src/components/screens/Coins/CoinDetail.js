import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { Button, Container, Table, Spinner } from 'reactstrap';

// Component imports
import PaginationBar from '../../../PaginationBar';
import LoadingSpinner from '../../../LoadingSpinner';

// Helper methods
import { createDatePriceCollection } from '../../../helpers/dateConversion';
import {
  slicePathName,
  sliceAndUpperCasePathName,
} from '../../../helpers/slicePathName';

const CoinDetail = ({ match, location }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [paginatedDayValue, setPaginatedDayValue] = useState(7); // allow pagination
  const [coin, setCoin] = useState('');
  const [coinData, setCoinData] = useState({});
  // const [datePriceCoin, setDatePriceCoin] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const coinName = slicePathName(location.pathname);
      setCoin(sliceAndUpperCasePathName(location));
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=usd&days=${paginatedDayValue}&interval=daily`,
      );
      setCoinData(data);
      setIsLoading(false);
    };
    fetchData();
  }, [location, paginatedDayValue]);

  // Only if the coinData exists should we run our conversions
  let datePriceInfo = [];
  if (coinData && coinData.prices) {
    const coinDatesAndPrices = createDatePriceCollection(coinData);
    datePriceInfo = coinDatesAndPrices;
    console.log(datePriceInfo);
  }

  const data = {
    labels: datePriceInfo.map((price) => price.date),
    datasets: [
      {
        fill: true,
        lineTension: 0.5,
        borderColor: 'rgba(255,255,255,0.7)',
        borderWidth: 2,
        data: datePriceInfo.map((price) => parseFloat(price.price)),
        backgroundColor: 'rgba(0,100, 255, 0.2)',
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: `${coin} prices the last ${paginatedDayValue} days`,
      fontSize: 30,
      fontColor: '#fff',
      fontFamily: "'Dosis', sans-serif",
      padding: 30,
    },
    legend: {
      display: false,
      position: 'bottom',
    },
    scales: {
      xAxes: [],
    },
  };

  return (
    <Container className="coins_container">
      {isLoading && <LoadingSpinner />}
      {coin && (
        <>
          <h1>{coin}</h1>
          <Link to="/coindetails">
            <Button>Go Back</Button>
          </Link>
          <p
            style={{
              color: '#fff',
              margin: '1rem',
            }}
          >
            Select number of days to look back at price fluctuation
          </p>
          <PaginationBar
            setPagination={setPaginatedDayValue}
            nums={[7, 14, 30, 90, 365]}
          />
        </>
      )}
      <div style={{ marginTop: '50px' }}>
        <Line data={data} options={options} />
      </div>
    </Container>
  );
};

export default CoinDetail;
