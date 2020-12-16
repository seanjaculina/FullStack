import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          {/* This will take in a bunf of props as the form when we use this */}
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
