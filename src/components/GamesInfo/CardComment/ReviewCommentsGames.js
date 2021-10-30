import React, { useState } from "react";
import api from '../../../api/api'

import {  Button } from "react-bootstrap";
import {  InputPost, PostContainer, ButtonsPost } from '../../Feed/Post/styles';

const CommentsGames = (props) => {

    const {idGame , game , updateGame} = props;

    const [comment, setComment] = useState('');

    const createCommentGame = async () => {
        try {

            await api.createCommentGame( idGame, {text: comment});

            setComment("");
        } catch (error) {
            console.log(error);
        } finally {
            updateGame();
        }
    };

    const commentText = ({ target }) => {
        setComment(target.value);
    };

    return (
        <PostContainer>

                <InputPost
                    as="textarea"
                    rows={3}
                    value={comment}
                    placeholder='Comment something here!!'
                    onChange={commentText}
                />

            <ButtonsPost>
                <Button variant="outline-danger" onClick={createCommentGame}>
                    Send
                </Button>
            </ButtonsPost>
        </PostContainer>
    );
};

export default CommentsGames;
