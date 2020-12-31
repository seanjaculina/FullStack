import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Container, Table } from 'reactstrap';
const CoinDetail = ({ match }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [coin, setCoin] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    const { id } = match.params;
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}`,
      );
      setCoin(data);
    };
    fetchData();
    setIsLoading(false);
  }, [match.params, match.params.id]);
  console.log(coin);
  return (
    <Container className="coins_container">
      {isLoading && <h1>loading...</h1>}
      {coin && (
        <Container>
          <h1>{coin.name}</h1>
          <Link to="/coindetails">
            <Button>Go Back</Button>
          </Link>
        </Container>
      )}
    </Container>
  );
};

export default CoinDetail;
