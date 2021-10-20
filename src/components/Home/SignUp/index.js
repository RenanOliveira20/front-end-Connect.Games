import React, { useState } from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import api from '../../../api/api';
import { Background, MyButtons, MyForm } from './styles';


const defaultForm = {
    name: '',
    username: '',
    password: '',
    email: '',
    biography: '',
}
const SignUp = () => {
    const history = useHistory()
    const [formValue, setFormValue] = useState({ ...defaultForm })
    const handleValues = ({ target: { name, value } }) => {
        setFormValue({ ...formValue, [name]: value })
    }
    const createUser = async (e) => {
        e.preventDefault();
        try {

            api.signUp({ ...formValue })
            const { name, username, email, password } = formValue
            if (name && username && email && password) {
                history.push('/')
            }
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className='bg-black vh-100 vw-100' >
            <h1 className="pt-4" style={{ color: 'red' }} >Sign Up</h1>
            <MyForm  >
                <Form.Group className="mb-3 mt-5 " controlId="formBasicText">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Name"
                        className="mb-3">
                        <Form.Control type="text" name="name" onChange={handleValues} value={formValue.name}
                            style={{
                                textAlign: 'left'
                            }}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3 mt-5 " controlId="formBasicText">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Username"
                        className="mb-3 ">
                        <Form.Control type="text" name="username" onChange={handleValues} value={formValue.username}
                            style={{
                                textAlign: 'left'
                            }}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3 mt-5 " controlId="formBasicEmail">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email"
                        className="mb-3">
                        <Form.Control type="email" name="email" onChange={handleValues} value={formValue.email}
                            style={{
                                textAlign: 'left'
                            }}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3 mt-5 " controlId="formBasicPassword">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Password"
                        className="mb-3">
                        <Form.Control type="password" name="password" onChange={handleValues} value={formValue.password}
                            style={{
                                textAlign: 'left'
                            }}
                        />
                    </FloatingLabel>
                </Form.Group>
            </MyForm>
            <Background>
                <MyButtons>
                    <Link to='/'
                        style={{
                            color: 'white',
                            textDecoration: 'none'
                        }}
                    >
                        <Button variant="danger " type="button"
                            className='mt-5 p-2 '>
                            Back to Login
                        </Button>
                    </Link>
                    <Button variant="outline-danger " type="submit"
                        className='mt-5 p-2'
                        onClick={createUser}
                        style={{
                            textDecoration: 'none',
                            marginLeft: 50
                        }}
                    >
                        Create
                    </Button>
                </MyButtons>
            </Background>
        </div>
    );
}

export default SignUp;
