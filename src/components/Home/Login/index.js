import React from 'react';
import { Link } from 'react-router-dom'
import {  Row, Col, Form, Button, ButtonGroup } from 'react-bootstrap'

const LoginForm = ({login,handleValues, formValue, logo}) => {
    return (
        <div
            
            className='bg-black vh-100 vw-100'
        >
            <Row>
                <Col>
                    <img src={logo} className="mb-3 mt-5 pt-2"></img>
                </Col>
                <Col>
                    <Form
                    onSubmit= {login}
                        className="bg-black pt-5"
                    >
                        <Form.Group className="mb-3  mt-5 pt-3" controlId="formBasicEmail">
                            <Form.Label style={{ color: 'red' }}>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleValues} value = {formValue.email}
                            />

                        </Form.Group>

                        <Form.Group className="mb-3 mt-5 " controlId="formBasicPassword">
                            <Form.Label style={{ color: 'red' }}>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" onChange={handleValues} value = {formValue.password}
                            />
                        </Form.Group>
                        <ButtonGroup className='bg-black mb-3 '>
                            <Button variant="dark" type="submit" style={{
                                marginTop: 40,
                                marginRight: 50,
                                width: 100
                            }}>
                                Login
                            </Button>
                            <Button variant="danger" type="button" style={{
                                marginTop: 40,
                                marginLeft: 50,
                                width: 100
                            }}>
                                <Link to='/signup'
                                    style={{
                                        textDecoration: 'none',
                                        color: 'white'
                                    }}
                                >
                                    Sign Up
                                </Link>
                            </Button>
                        </ButtonGroup>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default LoginForm;
