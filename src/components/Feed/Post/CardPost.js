import React, { useState } from "react";
import api from "../../../api/api";
import { Trash, Like, Dislike, Post, Comments, LikeDislike, Profile, ImgProfile } from "./styles";
import { Card, Button } from "react-bootstrap";
import FormComment from "../Comment/ReviewFormComment";
import CardComment from "../Comment/CardComment";

const CardPost = (props) => {
  const { data: post, getPosts } = props;
  const [showFormComment, setShowFormComment] = useState(false);
  
  const userId = localStorage.getItem("userId")

  const deletePost = async () => {
    try {
      await api.deletePost(post._id);
      getPosts();
    } catch (error) {
      console.log(error);
    }
  };

  const reactionLike = async () => {
    try {
      if( post.likes.indexOf(userId) !==  -1 ) {
        await api.putReactionsPost(post._id, {like: false})  
      } else {
        await api.putReactionsPost(post._id, {like: true})
      }
    } catch (error) {
      console.log(error)
    } finally {
      getPosts()
    }
    
  }

  const reactionDislike = async () => {
    try { 
      if( post.dislikes.indexOf(userId) !== -1) {
        await api.putReactionsPost(post._id, {dislike: false})  
      } else {
        await api.putReactionsPost(post._id, {dislike: true})
      }
    } catch (error) {
      console.log(error)
    } finally {
      getPosts()
    }
  }

  return (
    <Post>
      <Card style={{ width: "50%", height: "50%" }}>
      <ImgProfile>
              {post.user.profilePicture ? (
                <img src={post.user.profilePicture} alt={post.user.username} />
              ) : (
                <Profile />
              )}
            </ImgProfile>
      <span className= "p-3">{post.user.username}</span>
          <Card.Text>{post.text}</Card.Text>
        {post.imageUrl ? <Card.Img variant="top" src={post.imageUrl} /> : null}
        <Card.Body>
          <LikeDislike>
          <p className= "m-2">liked: {post.likes.length}</p> 
          <p className= "m-2">did not like: {post.dislikes.length}</p>
          </LikeDislike>
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
            idPost={post._id} getPosts={getPosts}
            onCancel={() => setShowFormComment(false) }
          />
        ) : (
          <Button variant="danger m-1" onClick={() => setShowFormComment(true)}>
            Comment
          </Button>
        )}
        <Comments>
          {post.comments.map((e) => {
            return <CardComment key={e._id} data={e} getPosts={getPosts} post={post} />;
          })}
        </Comments>
      </Card>
    </Post>
  );
};

export default CardPost;
