import React, { useState } from "react";
import api from "../../../api/api";
import { Form, Button } from "react-bootstrap";
import { DivFormComments } from "./styles";

const FormPost = (props) => {
  const { onCancel, idPost, getPosts } = props;

  const [comment, setComment] = useState('');

  const createComment = async () => {
    try {
      await api.createComment(idPost, { text: comment });
      setComment("");
      getPosts()
      onCancel()
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
          <Form.Control
            as="textarea"
            rows={3}
            value={comment}
            placeholder='Comment something here...'
            onChange={commentText}
            style={{marginTop:'2vh'}}
          />
        </Form.Group>
        <Button variant="outline-danger m-2" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="outline-danger" onClick={createComment}>
          Send
        </Button>
      </Form>
    </DivFormComments>
  );
};

export default FormPost;
