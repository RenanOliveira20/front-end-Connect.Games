import React, { useState } from "react";
import api from "../../../api/api";
import { Trash, Like, Dislike, Post, Comments } from "./styles";
import { Card, Button } from "react-bootstrap";
import FormComment from "../Comment/ReviewFormComment";
import CardComment from "../Comment/CardComment";

const CardPost = (props) => {
  const { data, getPosts } = props;
  const [showFormComment, setShowFormComment] = useState(false);
  
  const userId = localStorage.getItem("userId")
  
  const deletePost = async () => {
    try {
      await api.deletePost(data._id);
      getPosts();
    } catch (error) {
      console.log(error);
    }
  };

  const reactionLike = async () => {
    try {
      if( data.likes.indexOf(userId) !==  -1 ) {
        await api.putReactionsPost(data._id, {like: false})  
      } else {
        await api.putReactionsPost(data._id, {like: true})
      }
    } catch (error) {
      console.log(error)
    } finally {
      getPosts()
    }
    
  }

  const reactionDislike = async () => {
    try { 
      if( data.dislikes.indexOf(userId) !== -1) {
        await api.putReactionsPost(data._id, {dislike: false})  
      } else {
        await api.putReactionsPost(data._id, {dislike: true})
      }
    } catch (error) {
      console.log(error)
    } finally {
      getPosts()
    }
  }

  return (
    <Post>
      <span>{data.username}</span>
      <Card style={{ width: "50%" }}>
        {data.imageUrl ? <Card.Img variant="top" src={data.imageUrl} /> : null}
        <Card.Body>
          <Card.Text>{data.text}</Card.Text>
          <Button variant="danger m-1" onClick={reactionLike}>
            <Like />
          </Button>
          <Button
            variant="danger m-1"
            onClick={reactionDislike}
          >
            <Dislike />
          </Button>
          <Button variant="danger m-1" onClick={deletePost}>
            <Trash />
          </Button>
        </Card.Body>
        {showFormComment ? (
          <FormComment
            idPost={data._id} getPosts={getPosts}
            onCancel={() => setShowFormComment(false) }
          />
        ) : (
          <Button variant="danger m-1" onClick={() => setShowFormComment(true)}>
            Comment
          </Button>
        )}
        <Comments>
          {data.comments.map((e) => {
            return <CardComment key={e._id} data={e} getPosts={getPosts} idPost={data._id} />;
          })}
        </Comments>
      </Card>
    </Post>
  );
};

export default CardPost;
