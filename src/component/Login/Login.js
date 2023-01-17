import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../File/firebase';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [inputFields, setInputFields] = useState(
    { email: "", password: "" },
  )
  const handleFormChange = (event) => {
    setInputFields({ ...inputFields, [event.target.name]: event.target.value });
  }
  const submit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, inputFields.email, inputFields.password).then((user) => {
      navigate('/', { replace: true });
    }).catch((error) => {
      alert(error.message)
    })
  }
  return (
    <Row className="mb-4">
      <div className="white-box">
        <div className="div-center">
          <div className="div-content">
            <h3>Login</h3>
            <Form onSubmit={submit}>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' value={inputFields.name} onChange={event => handleFormChange(event)} />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' value={inputFields.password} onChange={event => handleFormChange(event)} />
              </Form.Group>
              <div className='d-grid gap-2 mb-4'>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
            <div>
              <span className='text-left'>Forgot Password?</span>
              <p className='text-right'>Don't have an account?
                <Link to="/singup">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Row>
  )
}

export default Login

