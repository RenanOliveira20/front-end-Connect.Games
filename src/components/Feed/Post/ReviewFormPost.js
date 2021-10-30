import React, { useState } from "react";
import api from "../../../api/api";
import { Form, Button } from "react-bootstrap";
import { ImageAdd, DivFormPost, InputPost, PostContainer, ButtonsPost } from "./styles";

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
    <>
        <PostContainer>
          
          <InputPost
            value={post.text}
            placeholder='Post something here!!'
            onChange={postText}
            as="textarea"
            rows={3}
          />

          <ButtonsPost>
            <label htmlFor= "1" className= "btn btn-danger" style={{height:'4vh'}}>
              <ImageAdd/>
            </label>
            <input type='file' id="1" onChange={postImage} style={{ display: "none" , height: '4vh'}} />
            <Button variant="danger" onClick={createPost} style={{ height: '4vh' }}>
              Send
            </Button>
          </ButtonsPost>

        </PostContainer>
    </>
  );
};

export default FormPost;
