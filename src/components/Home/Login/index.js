import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import Footer from '../../Footer/index'

import { Buttons, PageContainer, Section } from "./styles";

const LoginForm = ({ login, handleValues, formValue, logo }) => {
  return (
    <>
    <PageContainer>

      <Section>
        <img src={logo} alt="logo"/>
      </Section>

      <Section>
        <Form onSubmit={login}>

          <Form.Group className="mb-3  mt-5 pt-3" controlId="formBasicEmail">
            <Form.Label style={{ color: "white", fontSize: '4vh', fontWeight: 'bold', textShadow: '-1px 0 red, 0 1px red, 1px 0 red, 0 -1px red' }}>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleValues}
              value={formValue.email}
            />
          </Form.Group>

          <Form.Group className="mb-3 mt-5 " controlId="formBasicPassword">
            <Form.Label style={{ color: "white", fontSize: '4vh', fontWeight: 'bold', textShadow: '-1px 0 red, 0 1px red, 1px 0 red, 0 -1px red'  }}>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleValues}
                  value={formValue.password}                
                />
          </Form.Group>

        </Form>

        <Buttons>

          <Button
            variant="danger"
            type="submit"
            onClick={login}
            className="p-3"
          >
            Login
          </Button>

          <Link to="/signup">
            <Button variant="outline-danger" type="button" className="p-3">
                Sign Up
            </Button>
          </Link>

        </Buttons>


      </Section>
    </PageContainer>

    <Footer/>
    
    </>
  );
};

export default LoginForm;
