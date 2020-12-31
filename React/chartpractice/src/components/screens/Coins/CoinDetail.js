import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { Button, Container, Table, Spinner } from 'reactstrap';

// Component imports
import PaginationBar from '../../../PaginationBar';
import LoadingSpinner from '../../../LoadingSpinner';
const state = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
    },
  ],
};

const CoinDetail = ({ match, location }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [paginatedDayValue, setPaginatedDayValue] = useState(7); // allow pagination
  const [coin, setCoin] = useState('');
  const [coinData, setCoinData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const coinName = location.pathname.slice(6); // get the name of the coin from the path of this url using the location API
      setCoin(
        location.pathname.slice(6)[0].toUpperCase() +
          location.pathname.slice(7),
      );
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=usd&days=${paginatedDayValue}`,
      );
      setCoinData(data);
      setIsLoading(false);
    };
    fetchData();
  }, [coin, location.pathname, paginatedDayValue]);
  console.log(coinData);
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
        <Line
          data={state}
          options={{
            title: {
              display: true,
              text: `${coin} prices`,
              fontSize: 20,
            },
            legend: {
              display: true,
              position: 'bottom',
            },
          }}
        />
      </div>
    </Container>
  );
};

export default CoinDetail;
