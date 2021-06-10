import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { adminLoginAction, userLoginAction } from "../redux/UserReducer";

export function User() {
  const dispatch = useDispatch();
  const history = useHistory();
  const formEL = useRef();
  const state = useSelector((state) => state);

  //Action Members
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const [successOperation, setSuccessOperation] = useState(false);
  const [errorOperation, setErrorOperation] = useState(false);

  //Actions Functions
  const updateUserId = (e) => setUserId(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  const updateRole = (e) => setRole(e.target.value);

  const userLogin = (e) => {
    e.preventDefault();
    // console.log(userId, password, role);

    //Email vaildation
    const em = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!em.test(userId)) {
      alert("Please enter a valid email Id!!!");
      return;
    }

    //Validation
    if (formEL.current.checkValidity() === false) {
      //handle the false case
      e.preventDefault();
      e.stopPropagation();
      formEL.current.classList.add("was-validated");
    } else {
      //This is Redux Action
      dispatch(
        userLoginAction({
          userId,
          password,
          role,
        })
      );

      //shows successful login message for 3 sec
      //setSuccessOperation(true);
      //setTimeout(() => setSuccessOperation(false), 3000);

      /*if (state.user.loginAction === true) {
        //Navigate to Dashboard page on clicking Login
        history.push("/dashboard");
      }*/
      //Navigate to Dashboard page on clicking Login
      history.push("/dashboard");

      //Reset the Login Form
      setUserId("");
      setPassword("");
      setRole("");
    }
  };

  return (
    <div className="row">
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h3 className="alert alert-primary text-center mt-3">Login</h3>

        {/***shows Login Successful Message */}
        {successOperation && (
          <div className="alert alert-success ">Login Successful!!</div>
        )}

        {/***form block */}
        <div>
          <form ref={formEL} className="needs-validation" noValidate>
            <div className="alert alert-primary">
              <div className="mb-4">
                <label className="form-lable">UserId</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email address"
                  value={userId}
                  onChange={(e) => updateUserId(e)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="form-lable">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$"
                  value={password}
                  onChange={(e) => updatePassword(e)}
                  required
                />
              </div>
              <div>
                <label className="form-lable">Role</label>
                <select
                  className="form-select ml-3 mb-4"
                  style={{ width: "50%" }}
                  value={role}
                  onChange={(e) => updateRole(e)}
                  required
                >
                  <option defaultValue="">Choose your role</option>
                  <option>user</option>
                  <option>employee</option>
                </select>
              </div>
              <div>
                <Button
                  className="alert alert-primary"
                  onClick={(e) => userLogin(e)}
                >
                  Login
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-3 col-md-3 d-none d-md-block"></div>
    </div>
  );
}

/***<div className="m-4 p-4">
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
        </div>**/
