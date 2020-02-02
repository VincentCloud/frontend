import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  ListGroup,
  ListGroupItem,
  Table
} from 'reactstrap';
import './Overview.css';

const Overview = props => {
  return (
    <div className="container">
      <Card className="tile">
        <CardBody>
          <CardTitle>Hospital Name</CardTitle>
          <CardSubtitle>Hospital Location</CardSubtitle>
        </CardBody>
        <CardText>
          <ul>
            <li>Masks 100</li>
          </ul>
        </CardText>
      </Card>
      <Card className="tile">
        <CardBody>
          <CardTitle>Hospital Name</CardTitle>
          <CardSubtitle>Hospital Location</CardSubtitle>
        </CardBody>
        <CardText>
          <ul>
            <li>100 Masks</li>
          </ul>
        </CardText>
      </Card>
    </div>
  );
};

export default Overview;
