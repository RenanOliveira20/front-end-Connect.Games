import React, { useState, useEffect } from "react";
import api from "../../../api/api";

import { Card, Button } from "react-bootstrap";

import { Trash, Like, Dislike, Comments, ImgProfile, PostUserContainer, UserPost, PostDiv, TextDiv } from '../../Feed/Post/styles';
import { PostContainer, PostSection } from '../../Feed/Comment/styles'
 

const CardComment = ({ data: comments, updateGame, game }) => {

    const deleteCommentGame = async () => {
        try {
            await api.deleteCommentGame(game._id, comments._id);
            console.log('estou aqui')
            updateGame();

        } catch (error) {
            console.log(error);
        }
    };


    return (
        <PostContainer>
            <PostSection>
                <PostUserContainer>

                    <ImgProfile>

                        <a href=''>
                            <img src={comments.user.profilePicture} alt={comments.user.username} />
                        </a>

                        <a className="p-3" href=''>{comments.user.username}</a>
                    </ImgProfile>

                    <TextDiv>
                        <UserPost>{comments.text}</UserPost>
                    </TextDiv>
                </PostUserContainer>

                <PostDiv>
                    <Button variant="danger m-1" onClick={deleteCommentGame}>
                        <Trash />
                    </Button>
                </PostDiv>
            </PostSection>
        </PostContainer>
    );
};

export default CardComment;
