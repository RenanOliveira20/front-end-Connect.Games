import React, { useState } from "react";

import api from "../../../api/api";

import {  Button } from "react-bootstrap";
import FormComment from "../Comment/ReviewFormComment";
import CardComment from "../Comment/CardComment";

import { Trash, Like, Dislike,  Comments, ImgProfile, PostContainer, PostUserContainer, UserPost, PostDiv, TextDiv, PostSection } from "./styles";

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
    <PostContainer>
      <PostSection>
        <PostDiv>
          <PostUserContainer>
            
            <ImgProfile>

              <a href=''>
                <img src={post && post.user && post.user.profilePicture} alt={post && post.user && post.user.username} />
              </a>
        
              <a className= "p-3" href=''>{post && post.user && post.user.username}</a>
            </ImgProfile>

              <TextDiv>
                {post.text ? <UserPost>{post.text}</UserPost>: null }
                {post.imageUrl ? <UserPost><img variant="top" src={post.imageUrl} /></UserPost> : null}
              </TextDiv>

          </PostUserContainer>

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
        </PostDiv>


        <PostDiv>
            <Button variant="danger m-1" onClick={deletePost}>
              <Trash />
            </Button>
            <Button variant="danger m-1" onClick={reactionLike}>
              <Like />{post && post.likes && post.likes.length}
            </Button>

            <Button
              variant="danger m-1"
              onClick={reactionDislike}
            >
              <Dislike />{post && post.dislikes && post.dislikes.length}
            </Button>
        </PostDiv>
      </PostSection>
          
        <Comments>
          {post && post.comments && post.comments.map((e) => {
            return <CardComment key={e._id} data={e} getPosts={getPosts} post={post} />;
          })}
        </Comments>
    </PostContainer>
  );
};

export default CardPost;
