import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// bootstrap
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from 'react-bootstrap';

// Component imports
import Rating from '../Rating';
import Loader from '../Loader';
import Message from '../Message';

// action imports
import { listProductDetails } from '../../actions/productActions';

// match object which is in props when using router to give html5 history. Match will allow us to pull out params from the url of the
// "page" being rendered!
const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  // this hook allows us to dispatch actions to our redux store
  const dispatch = useDispatch();

  // this hook allows us to pull out some state from our store - in this case pull out theproduct details state
  const productDetails = useSelector((state) => state.productDetails);

  // pull out the loading state, error state and product that was fetched
  const { loading, error, product } = productDetails;

  useEffect(() => {
    // will dispatch the listProductDetails action to send request to our API
    // to get the product details of the product we clicked on in the UI and the page with description of the product
    // we get the item by the ID in the URL - when using dispatch, we simply
    // pass in an action and then it fires off and sends the type and payload to the reducers for us when we made the combineReducers
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match.params.id]);

  // adds the product to cart with the amount of quantity selected (passed as a query string)
  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`); // redirect in the client side using history api
  };

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message value="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <Button
                    onClick={addToCartHandler}
                    className="btn-block"
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
