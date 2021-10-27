import React, { useState } from "react";
import api from "../../../api/api";
import { Trash, Like, Dislike, Comment } from "./styles";
import { Card, Button } from "react-bootstrap";

const CardComment = ({data, idPost, getPosts}) => {
  
  const userId = localStorage.getItem("userId")

  const deleteComment = async () => {
    try {
      console.log(data)
      await api.deleteComment( idPost, data._id);
      getPosts();
    } catch (error) {
      console.log(error);
    }
  };

  const reactionLike = async () => {
    try {
      if( data.likes.splice(data.likes.indexOf(userId), 1)) {
        await api.putReactionsComment(data._id, {like: false})  
      } else {
        await api.putReactionsComment(data._id, {like: true})
      }
    } catch (error) {
      console.log(error)
    }
  }

  const reactionDislike = async () => {
    try {
      if( data.dislikes.includes(userId)) {
        await api.putReactionsComment(data._id, {dislike: false})  
      } else {
        await api.putReactionsComment(data._id, {dislike: true})
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Comment>
      <Card style={{ width: "70%" }}>
        <Card.Body>
          <Card.Text>{data.text}</Card.Text>
          <Button variant="danger m-1" onClick={reactionLike}>
            <Like />
          </Button>
          <Button variant="danger m-1" onClick={reactionDislike}>
            <Dislike />
          </Button>
          <Button variant="danger m-1" onClick={deleteComment}>
            <Trash />
          </Button>
        </Card.Body>
      </Card>
    </Comment>
  );
};

export default CardComment;
