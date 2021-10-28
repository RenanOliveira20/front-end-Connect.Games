import React, { useState } from "react";
import api from "../../../api/api";
import { Form, Button } from "react-bootstrap";
import { ImageAdd, DivFormPost } from "./styles";

const FormPost = (props) => {

  const {getPosts} = props

  const [post, setPost] = useState({
    text: "",
    image: "",
  });

  const createPost = async (e) => {
    try {
      await api.createPost({ ...post });
      setPost({
        text: "",
        image: "",
      });
      getPosts()
    } catch (error) {
      console.log(error);
    }
  };

  const postText = ({ target }) => {
    setPost({ ...post, text: target.value });
  };
  
  const postImage = ({target}) => {
    setPost({...post, image: target.files[0]})
  }
  
  
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
        <label htmlFor= "1" className= "btn btn-danger">
        {/* <Button variant="danger"> */}
          <ImageAdd/>  
        {/* </Button> */}
        </label>
        <input type='file' id="1" onChange={postImage} style={{display: "none"}} />
      </Form>
    </DivFormPost>
  );
};

export default FormPost;
