import React from 'react';
import Card from 'react-bootstrap/Card';
const TestimonialItem = ({ data }) => {
  return (
    <Card className="rec-card">
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {data.position}
          <hr />
          <small style={{ display: 'block', padding: '0.3rem 0' }}>
            {data.association}
          </small>
        </Card.Subtitle>
        <Card.Text id="text_of">{data.recommendation}</Card.Text>
        <Card.Link
          target="_blank"
          href={data.linkedin}
          className="linkedin-btn"
        >
          {data.name}'s LinkedIn
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default TestimonialItem;
