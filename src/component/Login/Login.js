import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row"

function Login() {
  const [inputFields, setInputFields] = useState([
    { email: "", password: "" },
  ])
  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  }
  const submit = (e) => {
    e.preventDefault();
    console.log(inputFields)
  }
  return (
    <Row className="mb-4">
      <div className="white-box">
        <div className="div-center">
          <div className="div-content">
            <h3>Login</h3>
            <Form onSubmit={submit}>{
              inputFields.map((input, index) => {
                return (
                  <div key={index}>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" name='email' value={input.name} onChange={event => handleFormChange(index, event)} />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" name='password' value={input.password} onChange={event => handleFormChange(index, event)} />
                    </Form.Group>
                    <div className='d-grid gap-2 mb-4'>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </div>
                  </div>
                )
              })
            }
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

