import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createRegistrationAction } from "../redux/RegistrationReducer";

export function Registration() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [role, setRole] = useState("");

  const [successOperation, setSuccessOperation] = useState(false);

  const updateFirstName = (e) => setFirstName(e.target.value);
  const updateLastName = (e) => setLastName(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  const updateEmail = (e) => setEmail(e.target.value);
  const updateMobile = (e) => setMobile(e.target.value);
  const updateRole = (e) => setRole(e.target.value);

  const register = (e) => {
    e.preventDefault();
    console.log(firstname, lastname, password, email, mobile, role);

    //Redux Action
    dispatch(
      createRegistrationAction({
        email,
        firstname,
        lastname,
        mobile,
        password,
        role,
      })
    );

    //shows a success message for 3 sec
    setSuccessOperation(true);
    setTimeout(() => setSuccessOperation(false), 3000);

    //Navigate to other page
    //history.push("/list-registration");

    //Reset the Form
    setFirstName("");
    setLastName("");
    setEmail("");
    setMobile("");
    setPassword("");
    setRole("");
  };

  return (
    <div className="row">
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h1 className="alert alert-secondary text-center">Registration</h1>

        {/***Print a Success Message */}
        {successOperation && (
          <div className="alert alert-success">Registration Successful!!!</div>
        )}

        <div>
          <Row className="mb-3">
            <Col>
              <Form.Label>First Name</Form.Label>
              <input
                type="text"
                placeholder="First Name"
                className="form-control"
                value={firstname}
                onChange={(e) => updateFirstName(e)}
              />
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <input
                type="text"
                placeholder="Last name"
                className="form-control"
                value={lastname}
                onChange={(e) => updateLastName(e)}
              />
            </Col>
          </Row>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => updateEmail(e)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formGroupMobile">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="text"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => updateMobile(e)}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => updatePassword(e)}
            />
          </Form.Group>
          <Form.Group controlId="formGroupRole">
            <Form.Label>Role</Form.Label>
            <Form.Control
              type="text"
              placeholder="Customer/Seller"
              value={role}
              onChange={(e) => updateRole(e)}
            />
          </Form.Group>
          <div>
            <Button
              className="alert alert-outline-primary"
              onClick={(e) => register(e)}
            >
              Register
            </Button>
          </div>
        </div>
      </div>

      <div className="col-3 col-md-3 d-none d-md-block"></div>
    </div>
  );
}
