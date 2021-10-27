import React, { useState, useEffect } from "react";
import api from "../../../api/api";
import { Form, Button } from "react-bootstrap";
import { ImageAdd, DivFormPost } from "./styles";

const FormPost = (props) => {

  const {getPosts} = props

  const [post, setPost] = useState({
    text: "",
    imageUrl: "",
  });

  const createPost = async () => {
    try {
      await api.createPost({ ...post });
      setPost({
        text: "",
        imageUrl: "",
      });
      getPosts()
    } catch (error) {
      console.log(error);
    }
  };

  const postText = ({ target }) => {
    setPost({ ...post, text: target.value });
    // const postImage = new FormData();
    // postImage.append('imageUrl', arquivo-de-imagem);
  };
  
  return (
    <DivFormPost>
      <Form style={{ width: "50%" }}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Post</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={post.text}
            onChange={postText}
          />
        </Form.Group>
        <Button variant="danger m-2" onClick={createPost}>
          Send
        </Button>
        <Button variant="danger ">
          <ImageAdd />
        </Button>
      </Form>
    </DivFormPost>
  );
};

export default FormPost;
