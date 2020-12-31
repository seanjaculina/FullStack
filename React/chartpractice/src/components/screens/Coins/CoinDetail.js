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
// Chart configs and such

const CoinDetail = ({ match, location }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [paginatedDayValue, setPaginatedDayValue] = useState(7); // allow pagination
  const [coin, setCoin] = useState('');
  const [coinData, setCoinData] = useState(null);
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
  }, [coin, location, location.pathname, paginatedDayValue]);

  if (coinData) {
    const coinDatesAndPrices = createDatePriceCollection(coinData);
    console.log(coinDatesAndPrices);
  }

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: `Price changes the last ${paginatedDayValue} days`,
        fill: true,
        lineTension: 0.5,
        borderColor: 'rgba(255,255,255,0.7)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: `${coin} prices`,
      fontSize: 20,
    },
    legend: {
      display: true,
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
        <Container>
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
        </Container>
      )}
      <div style={{ marginTop: '50px' }}>
        <Line data={data} options={options} />
      </div>
    </Container>
  );
};

export default CoinDetail;
