import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Component imports
import Product from '../Product';

// react-bootstrap stuff
import { Row, Col } from 'react-bootstrap';

const HomeScreen = () => {
  /**
   * This component will render all the products in the DB (file to start)
   * by mapping out product reusable components
   */
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Cannot use async useEffect so need to use another function inside it. For me, I prefer IIFEs
    (async () => {
      const { data } = await axios.get('/api/products'); // using a proxy to send requests to the 5000 server running backend
      //const productList = data.json(); no need with axios
      setProducts(data);
    })();
  }, []);
  return (
    <>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomeScreen;
