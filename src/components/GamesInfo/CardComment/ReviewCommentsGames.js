import React, { useState } from "react";
import api from '../../../api/api'

import { Form, Button } from "react-bootstrap";
import { DivFormComments } from './styles';

const CommentsGames = (props) => {

    const {idGame , game} = props;

    const [comment, setComment] = useState('');

    const createCommentGame = async () => {
        try {

            await api.createCommentGame( idGame, {text: comment});

            setComment("");
        } catch (error) {
            console.log(error);
        }
    };

    const commentText = ({ target }) => {
        setComment(target.value);
    };

    return (
        <DivFormComments>
            <Form style={{ width: "50%" }}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={comment}
                        onChange={commentText}
                    />
                </Form.Group>
                <Button variant="outline-danger" onClick={createCommentGame}>
                    Send
                </Button>
            </Form>
        </DivFormComments>
    );
};

export default CommentsGames;
