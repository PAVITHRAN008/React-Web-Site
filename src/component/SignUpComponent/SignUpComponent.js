import React, { useState } from 'react';
import "./SignUpComponent.css"
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form'
import { useNavigate } from "react-router-dom";

function SignUpComponent() {
  const navigate = useNavigate();
  const [inputFields, setInputFields] = useState([{
    emailid: "",
    mobileNumber: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: ""
  }
  ]);
  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  }
  const submit = (e) => {
    e.preventDefault();
    console.log(inputFields);
    navigate('/', { replace: true });
  }
  return (
    <div className="signUp-box">
      <div className="div-center">
        <div className="div-content">
          <h3>Sing Up</h3>
          <Form onSubmit={submit}>{
            inputFields.map((input, index) => {
              return (
                <div key={index}>
                  <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='emailid' value={input.emailid} onChange={event => handleFormChange(index, event)} />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formBasicmobileNumber">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="number" placeholder="Mobile Number" name='mobileNumber' value={input.mobileNumber} onChange={event => handleFormChange(index, event)} />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formBasicfirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" name='firstName' value={input.firstName} onChange={event => handleFormChange(index, event)} />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formBasiclastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" name='lastName' value={input.lastName} onChange={event => handleFormChange(index, event)} />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' value={input.password} onChange={event => handleFormChange(index, event)} />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formBasicconfirmPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" name='confirmPassword' value={input.confirmPassword} onChange={event => handleFormChange(index, event)} />
                  </Form.Group>
                  <div className='d-grid gap-2 mb-4'>
                    <Button variant="primary" type="submit">
                      Sign Up
                    </Button>
                  </div>
                </div>
              )
            })
          }
          </Form>
        </div>
      </div>
    </div>
  )
}

export default SignUpComponent
