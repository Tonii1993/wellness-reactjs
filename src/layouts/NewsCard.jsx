// NewsCard.js
import React from "react";
import Card from "react-bootstrap/Card";
import TextExpander from "../components/TextExpander";
import { Link } from "react-router-dom";

const NewsCard = ({ ...item }) => {
  const descriptionMaxLength = 100;

  return (
    <Card style={{ width: "23rem", height: "28rem" }}>
      <Card.Img variant="top" src={item.img} alt={item.title} />
      <Card.Body>
        <Link to={`/news/${item.id}`}>
          <Card.Title className="text-base">{item.title}</Card.Title>
          <TextExpander text={item.review} maxLength={descriptionMaxLength} />
        </Link>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
