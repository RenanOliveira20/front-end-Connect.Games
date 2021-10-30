import React from "react";
import api from "../../../api/api";

import { Button } from "react-bootstrap";

import { Trash, Like, Dislike, ImgProfile, PostUserContainer, UserPost, PostDiv, TextDiv } from '../Post/styles'
import { PostContainer, PostSection } from './styles'

const CardComment = ({ data: comment, post, getPosts }) => {

  const userId = localStorage.getItem("userId")

  const deleteComment = async () => {
    try {
      await api.deleteComment(post._id, comment._id);
      getPosts();
    } catch (error) {
      console.log(error);
    }
  };

  const reactionLike = async () => {
    try {
      if (comment.likes.indexOf(userId) !== -1) {
        await api.putReactionsComment(comment._id, { like: false })
      } else {
        await api.putReactionsComment(comment._id, { like: true })
      }
    } catch (error) {
      console.log(error)
    } finally {
      getPosts()
    }
  }

  const reactionDislike = async () => {
    try {
      if (comment.dislikes.indexOf(userId) !== -1) {
        await api.putReactionsComment(comment._id, { dislike: false })
      } else {
        await api.putReactionsComment(comment._id, { dislike: true })
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
        <PostUserContainer>

          <ImgProfile>

            <a href=''>
              <img src={post.user.profilePicture} alt={post.user.username} />
            </a>

            <a className="p-3" href=''>{post && post.user && post.user.username}</a>
          </ImgProfile>

            <TextDiv>
              <UserPost>{comment.text}</UserPost>
            </TextDiv>
        </PostUserContainer>

        <PostDiv>
              <Button variant="danger m-1" onClick={deleteComment}>
                <Trash />
              </Button>
              <Button variant="danger m-1" onClick={reactionLike}>
                <Like />{comment.likes.length}
              </Button>
              <Button variant="danger m-1" onClick={reactionDislike}>
                <Dislike/>{comment.dislikes.length}
              </Button>
        </PostDiv>
      </PostSection>
    </PostContainer>
  );
};

export default CardComment;