import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Coins.css';

import { Button, Container, Table } from 'reactstrap';

// Component imports
import PaginationBar from './PaginationBar';

const CoinDetails = () => {
  const [coins, setCoins] = useState([]);
  const [paginatedValue, setPaginatedValue] = useState(1); // allow pagination
  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${paginatedValue}&sparkline=false`,
      );
      setCoins(data);
    };
    fetch();
  }, [paginatedValue]);

  const paginate = (val) => {
    setPaginatedValue(val);
  };

  return (
    <Container className="coins_container">
      <Container>
        <h1>Coin Details</h1>
        <Link to="/">
          <Button>Go Home</Button>
        </Link>
        <PaginationBar
          setPagination={paginate}
          nums={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        />
      </Container>
      <Table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Coin</th>
            <th>Current Price</th>
            <th>Market Cap Rank</th>
            <th>Get More Insights</th>
          </tr>
        </thead>
        <tbody>
          {coins &&
            coins.map((coin) => {
              return (
                <tr key={coin.id}>
                  <td className="coin-symbol">
                    <span>{coin.symbol}</span>
                  </td>
                  <td className="coin-dat">
                    <div>
                      <img src={coin.image} alt={coin.id} />
                      {coin.id}
                    </div>
                  </td>
                  <td className="coin-price">
                    <span>$ {coin.current_price.toFixed(2)}</span>
                  </td>
                  <td className="coin-market">
                    <span>{coin.market_cap_rank}</span>
                  </td>
                  <td className="coin-link">
                    <div>
                      <Link to={`/coin/${coin.id}`}>
                        <Button color="primary">See more</Button>
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default CoinDetails;
