import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { adminLoginAction, userLoginAction } from "../redux/UserReducer";

export function User() {
  const dispatch = useDispatch();
  const history = useHistory();

  //Action Members
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const [successOperation, setSuccessOperation] = useState(false);

  //Actions Functions
  const updateUserId = (e) => setUserId(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  const updateRole = (e) => setRole(e.target.value);

  const userLogin = (e) => {
    e.preventDefault();
    console.log(userId, password, role);

    //This is Redux Action
    dispatch(
      userLoginAction({
        userId,
        password,
        role,
      }),
      adminLoginAction({
        userId,
        password,
        role,
      })
    );

    //shows successful login message for 3 sec
    setSuccessOperation(true);
    setTimeout(() => setSuccessOperation(false), 3000);

    //Navigate to Dashboard page on clicking Login
    //history.push("/list-registration");

    //Reset the Login Form
    setUserId("");
    setPassword("");
    setRole("");
  };

  return (
    <div className="row">
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h3 className="alert alert-primary text-center">Login</h3>

        {successOperation && (
          <div className="alert alert-success">Login Successful!!</div>
        )}

        <div className="m-4 p-4">
          <form onSubmit={(e) => userLogin(e)}>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>UserId</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email address"
                value={userId}
                onChange={(e) => updateUserId(e)}
              />
              <Form.Text className="text-muted">
                Enter the email address used in registration.
              </Form.Text>
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
                placeholder="Customer/seller"
                value={role}
                onChange={(e) => updateRole(e)}
              />
            </Form.Group>
            <div>
              <Button
                className="alert alert-primary"
                onClick={(e) => userLogin(e)}
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-3 col-md-3 d-none d-md-block"></div>
    </div>
  );
}
