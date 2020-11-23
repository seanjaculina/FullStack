import React from 'react';

// Component imports
import Product from '../Product';

// react-bootstrap stuff
import {Row, Col} from 'react-bootstrap';

// products file
import products from '../../products';

const HomeScreen = () => {
  /**
   * This component will render all the products in the DB (file to start)
   * by mapping out product reusable components
   */
  return (
    <>
      <Row>
        {
          products.map(product => {
            return (
              <Col sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            )
          })
        }
      </Row>
    </>
  )
}

export default HomeScreen;
