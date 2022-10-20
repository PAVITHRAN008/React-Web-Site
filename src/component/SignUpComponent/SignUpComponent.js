import React, { useState } from 'react';
import "./SignUpComponent.css"
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form'
// import { useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../File/firebase';

function SignUpComponent() {
  // const navigate = useNavigate();
  const [inputFields, setInputFields] = useState({
    emailid: "",
    mobileNumber: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: ""
  }
  );
  const handleFormChange = (event) => {
    setInputFields({ ...inputFields, [event.target.name]: event.target.value });

  }
  const SignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, inputFields.emailid, inputFields.password).then((userCrendential) => {
      console.log(userCrendential.user)
      alert("User created sucessfully");
      setInputFields({
        emailid: "",
        mobileNumber: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: ""
      }
      )
    }).catch((error) => {
      alert(error.message)
    })
    // db.ref("data").child("task")
    // navigate('/', { replace: true });
  }
  return (
    <div>
      <Row className="mb-4">
        <div className="signUp-box">
          <div className="div-center">
            <div className="div-content">
              <h3>Sign Up</h3>
              <Form onSubmit={SignUp}>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name='emailid' value={inputFields.emailid} onChange={event => handleFormChange(event)} />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicmobileNumber">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control type="text" placeholder="Mobile Number" name='mobileNumber' value={inputFields.mobileNumber} onChange={event => handleFormChange(event)} />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicfirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First Name" name='firstName' value={inputFields.firstName} onChange={event => handleFormChange(event)} />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasiclastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last Name" name='lastName' value={inputFields.lastName} onChange={event => handleFormChange(event)} />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name='password' value={inputFields.password} onChange={event => handleFormChange(event)} />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicconfirmPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Confirm Password" name='confirmPassword' value={inputFields.confirmPassword} onChange={event => handleFormChange(event)} />
                </Form.Group>
                <div className='d-grid gap-2 mb-4'>
                  <Button variant="primary" type="submit">
                    Sign Up
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Row>
    </div>
  )
}

export default SignUpComponent
