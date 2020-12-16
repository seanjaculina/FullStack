import React from 'react';
import Card from 'react-bootstrap/Card';
const RecommendationItem = ({ data }) => {
  return (
    <Card className="rec-card">
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {data.position}
          <br />
          <small>{data.association}</small>
        </Card.Subtitle>
        <Card.Text>{data.recommendation}</Card.Text>
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

export default RecommendationItem;
