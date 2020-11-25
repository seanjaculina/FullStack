import React, { useState, useEffect } from 'react';

// Component imports
import Product from '../Product';

// react-bootstrap stuff
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

// import any action creators we want to use to fire off actions to change state.
// in this case, we will want to dispatch an action in the useEffect to send a request to
// get all the products from our store
import { listProducts } from '../../actions/productActions';

// this component interacts wil global redux state
const HomeScreen = () => {
  // this replaces mapDispatchToProps in class components and uses the functional hook method instad!
  const dispatch = useDispatch();

  // get the productList state from our store which contains the products we fetched by dispatching the action to do so
  // in the useEffect and also contains the loading state and any errors. We use useSelector to select the state we need
  // for this component from our app level store. This can be seen in store.js where we literally
  // put state in our combinedReducers which has the data of our products that gets manipulated through the productReducers
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    // dispatch the listProducts action which is a function in our actions directory which basically fetches data from our API
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {products.map((product) => {
            return (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
