import React from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { Buttons, Layout } from './styles';

const LoginForm = ({ login, handleValues, formValue, logo }) => {

    return (
        <div className='bg-black vh-100 vw-100'>
            <Row className='bg-black'>
                <Col>
                    <img src={logo} alt="logo" className="mb-3 mt-5 pt-2" ></img>
                </Col>
                <Layout>
                    <Col>
                        <Form
                            onSubmit={login}
                            className="bg-black pt-5"

                        >
                            <Form.Group className="mb-3  mt-5 pt-3" controlId="formBasicEmail">
                                <Form.Label style={{ color: 'red' }}>Email address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleValues} value={formValue.email}
                                />

                            </Form.Group>

                            <Form.Group className="mb-3 mt-5 " controlId="formBasicPassword">
                                <Form.Label style={{ color: 'red' }}>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password" onChange={handleValues} value={formValue.password}
                                />
                            </Form.Group>
                        </Form>
                        <Buttons >
                            <Button variant="danger" type="submit" onClick={login} className='p-3'>
                                Login
                            </Button>
                            <Link to='/signup'>
                                <Button variant="outline-danger" type="button" className='p-3'>
                                    Sign Up
                                </Button>
                            </Link>
                        </Buttons>
                    </Col>
                </Layout>
            </Row>
        </div>
    );
}

export default LoginForm;
