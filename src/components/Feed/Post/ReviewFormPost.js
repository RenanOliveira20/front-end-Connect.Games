import React, { useState } from "react";
import { useHistory } from "react-router";
import api from "../../../api/api";
import { Form, Button } from "react-bootstrap";
import { ImageAdd } from "./styles";
const FormPost = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Post</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="danger m-2">Send</Button>
      <Button variant="danger "><ImageAdd/></Button>
    </Form>
  );
};

export default FormPost;
