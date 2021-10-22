import React, { useState } from "react";
import { useHistory } from "react-router";
import api from "../../../api/api";
import { Trash, Like, Dislike } from "./styles";
import { Card, Button } from "react-bootstrap";
const post = {
  text: "post",
  imageUrl: "",
  user: {
    userName: "JhonatanVeras",
  },
  comments: [],
  likes: [],
  dislikes: [],
};
const CardPost = () => {
  return (
    <Card style={{ width: "30rem" }}>
      {post.imageUrl ? <Card.Img variant="top" src={post.imageUrl} /> : null}
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger m-1">Comment</Button>
        <Button variant="danger m-1"><Like/></Button>
        <Button variant="danger m-1"><Dislike/></Button>
        <Button variant="danger m-1"><Trash/></Button>
      </Card.Body>
    </Card>
  );
};

export default CardPost;
