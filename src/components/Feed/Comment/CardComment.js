import React from "react";
import api from "../../../api/api";
import { Trash, Like, Dislike, Comment, LikeDislike, Profile, ImgProfile } from "./styles";
import { Card, Button } from "react-bootstrap";

const CardComment = ({data: comment, post, getPosts}) => {
  
  const userId = localStorage.getItem("userId")

  const deleteComment = async () => {
    try {
      await api.deleteComment( post._id, comment._id);
      getPosts();
    } catch (error) {
      console.log(error);
    }
  };

  const reactionLike = async () => {
    try {
      if( comment.likes.indexOf(userId) !== -1) {
        await api.putReactionsComment(comment._id, {like: false})  
      } else {
         await api.putReactionsComment(comment._id, {like: true})
      }
    } catch (error) {
      console.log(error)
    } finally {
      getPosts()
    }
  }

  const reactionDislike = async () => {
    try {
      if( comment.dislikes.indexOf(userId) !== -1) {
        await api.putReactionsComment(comment._id, {dislike: false})  
      } else {
        await api.putReactionsComment(comment._id, {dislike: true})
      }
    } catch (error) {
      console.log(error)
    } finally {
      getPosts()
    }
  }

  return (
    <Comment>
      <Card style={{ width: "70%" }}>
      <ImgProfile>
              {post.user.profilePicture ? (
                <img src={post.user.profilePicture} alt={post.user.username} />
              ) : (
                <Profile />
              )}
            </ImgProfile>
      <span className= "p-3">{post.user.username}</span>
        <Card.Body>
          <Card.Text>{comment.text}</Card.Text>
          <LikeDislike>
          <p className= "m-2">liked: {comment.likes.length}</p> 
          <p className= "m-2">did not like: {comment.dislikes.length}</p>
          </LikeDislike>
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
