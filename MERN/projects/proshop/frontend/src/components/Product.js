import React from 'react';
import {Link} from 'react-router-dom';

// Component imports
import Rating from './Rating';

import {Card} from 'react-bootstrap';

const {Img, Body, Title, Text} = Card;

const Product = ({product}) => {
  // destructure the props more
  const {_id, image, name, rating, numReviews, price} = product;
  /**
   * Notice the two anchor tages in the card. These link us to another relative url within our application of the url: /product/:id
   * where the id is the id from this item in the DB (File to start). And this makes sense because we would want to be able to see specific
   * item info based off this ID on a new page however this url is to somewhere that does not exist. We actually have to setup react-router
   * to allow this routing to work such that /product/:id will render the corresponding id that was padded into the match of the url
   * 
   * this would then be extracted using match (From react router) in the component that should render for this product, use a useEffect
   * to fetch data initially from the backend on this product, and then display in our UI all the data needed.
   * 
   * This paradigm is followed A LOT IN MANY MERN / MANY APPS IN GENERAL!
   */
  return (
    <Card className="my-3 p-3 rounder">
      <Link to={`/product/${_id}`}>
        <Img src={image} variant="top"/>
      </Link>
      <Body>
        <Link to={`/product/${_id}`}>
          <Title as="div">
            <strong>{name}</strong>
          </Title>
        </Link>
        <Text as="div">
          <Rating value={rating} text={`${numReviews} reviews`}/>
        </Text>
        <Text as="h3">
          ${price}
        </Text>
      </Body>
    </Card>
  )
}

export default Product;
