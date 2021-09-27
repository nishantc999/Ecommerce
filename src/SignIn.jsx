import React, { useState,useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";

import { tokenState } from "./StateProvider";
const token=localStorage.getItem("tokens");
const SignIn=()=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const {tokens,settokens}=useContext(tokenState);
    
  const validateForm=()=> {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit=(event)=> {
    event.preventDefault();
    localStorage.setItem("tokens","login");
    settokens(true)
    history.push("/")
  }

  if(token){
    history.push("/")
}
  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" variant="warning" type="submit" disabled={!validateForm()}>
          Sign In
        </Button>
      </Form>
    </div>
  );
}
export default SignIn