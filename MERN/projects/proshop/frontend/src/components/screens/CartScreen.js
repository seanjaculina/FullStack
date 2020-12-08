import React, { useEffect } from 'react';

// For redux state stuff (for functional components only)
import { useDispatch, useSelector } from 'react-redux';

// Action imports
import { addToCart, removeFromCart } from '../../actions/cartActions';

// React-bootstrap imports
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';

// React router imports
import { Link } from 'react-router-dom';

// Component imports
import Message from '../Message';

const CartScreen = ({ match, location, history }) => {
  // Pull out the id of the product that was possibly added to cart (remember we made id optional because only when we add to cart, the items id should be sent in the request and take us to the cart (ui thing))
  // if there is no id, then the user is just looking at the cart so the useEffect will not dispatch the addToCart and it will simply just be showing the cart
  const productId = match.params.id;

  // pull out the qty query string in the url (we use the location prop for this)
  // location.search will return ?key=val and we of course only want the value part of this query string
  // because that is the qty to add! So, we can split that string by = sign and then get the value by getting the 2nd index in the array
  // that split returns =? [?qty, 1] for example
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();

  // get the items in the cart from the store
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart; // get all the cart items (An array) from the cart [cartItems is the key in local storage which we are persisting - see initialState in store.js and also the addCart action]

  useEffect(() => {
    // If we are adding an item, we should dispatch the item and the qty else we should just display the cart instead
    if (productId) dispatch(addToCart(productId, qty));
  }, [dispatch, productId, qty]);

  // Removes the item from the cart
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    // if logged in, redirect to shipping page or else it will just go to login
    history.push('/login?redirect=shipping');
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your Cart is Empty <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              //.product property is the ID of the product in local storage
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fluid
                      rounded
                    ></Image>
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value)),
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className="fas fa-trash" />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                Subtotal (
                {cartItems.reduce((accum, item) => accum + item.qty, 0)})items
              </h2>
              $
              {cartItems
                .reduce((accum, item) => accum + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed to checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
