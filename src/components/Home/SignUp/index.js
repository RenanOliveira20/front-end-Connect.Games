import React, { useState } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import api from "../../../api/api";

import logo from '../../../images/connectLogo.jpeg';
import Footer from "../../Footer";

import { Buttons, PageContainer, Section } from "../Login/styles";

const defaultForm = {
  name: "",
  username: "",
  password: "",
  email: "",
  biography: "",
};
const SignUp = () => {
  const history = useHistory();
  const [formValue, setFormValue] = useState({ ...defaultForm });
  const handleValues = ({ target: { name, value } }) => {
    setFormValue({ ...formValue, [name]: value });
  };
  const createUser = async (e) => {
    e.preventDefault();
    try {
      await api.signUp({ ...formValue });
      const { name, username, email, password } = formValue;
      if (name && username && email && password) {
        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <PageContainer>

      <Section>
        <img src={logo} alt="logo" className="mb-3 mt-5 pt-2" />
        <h1 className="pt-4" style={{ color: "white", fontSize: '4vh', fontWeight: 'bold', textShadow: '-1px 0 red, 0 1px red, 1px 0 red, 0 -1px red' }}>
          Sign Up
        </h1>
      </Section>

      <Section style={{marginTop: '5vh'}}>
        <Form.Group controlId="formBasicText" style={{ margin: '1vh' }}>
          <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="name"
              onChange={handleValues}
              value={formValue.name}
              style={{
              textAlign: "left",
              }}
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group controlId="formBasicText" style={{ margin: '1vh' }}>
          <FloatingLabel
            controlId="floatingInput"
            label="Username"
            className="mb-3 "
          >
            <Form.Control
              type="text"
              name="username"
              onChange={handleValues}
              value={formValue.username}
              style={{
                textAlign: "left",
              }}
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group controlId="formBasicEmail" style={{ margin: '1vh' }}>
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-3"
          >
            <Form.Control
              type="email"
              name="email"
              onChange={handleValues}
              value={formValue.email}
              style={{
                textAlign: "left"
              }}
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group controlId="formBasicPassword" style={{ margin: '1vh' }}>
          <FloatingLabel
            controlId="floatingInput"
            label="Password"
            className="mb-3"
          >
            <Form.Control
              type="password"
              name="password"
              onChange={handleValues}
              value={formValue.password}
              style={{
                textAlign: "left",
              }}
            />
          </FloatingLabel>
        </Form.Group>


        <Buttons>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
            }}
            >
            <Button variant="danger " type="button" className="p-3">
              Back to Login
            </Button>
          </Link>

          <Button
            variant="outline-danger "
            type="submit"
            onClick={createUser}
            className="p-3"         
            >
            Create
          </Button>
        </Buttons>

      </Section>


    </PageContainer>
    <Footer/>
    </>
  );
};

export default SignUp;
