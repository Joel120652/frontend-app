import { useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createRegistrationAction } from "../redux/RegistrationReducer";

export function Registration() {
  const dispatch = useDispatch();
  const history = useHistory();
  const formEL = useRef();
  const state = useSelector((state) => state);

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
    //next three lines are for checking and they can be removed
    /*console.log(firstname, lastname, password, email, mobile, role);
    console.log(formEL);
    console.log(formEL.current.checkValidity());*/

    //FirstName Validation
    const re = /^[A-Za-z]+$/;
    if (!re.test(firstname)) {
      alert("Please Enter a valid First Name!!!");
      return;
    }

    //Email vaildation
    const em = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!em.test(email)) {
      alert("Please enter a valid email Id!!!");
      return;
    }

    //required - logic for input elements validation
    if (formEL.current.checkValidity() === false) {
      //handle the false case
      e.preventDefault();
      e.stopPropagation();
      formEL.current.classList.add("was-validated");
    } else {
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
    }
  };

  return (
    <div className="row">
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h1 className="alert alert-secondary text-center mt-3">Registration</h1>

        {/***Print a Success Message */}
        {successOperation && (
          <div className="alert alert-success">Registration Successful!!!</div>
        )}

        {/***form block */}
        <div>
          <form ref={formEL} className="needs-validation" noValidate>
            <div className="row">
              <div className="col mb-4">
                <label className="form-lable">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  minLength="3"
                  maxLength="10"
                  value={firstname}
                  onChange={(e) => updateFirstName(e)}
                  required
                />
              </div>
              <div className="col mb-4">
                <label className="form-lable">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  minLength="3"
                  maxLength="10"
                  value={lastname}
                  onChange={(e) => updateLastName(e)}
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="form-lable">Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email address"
                value={email}
                onChange={(e) => updateEmail(e)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="form-lable">Mobile</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Mobile number +91"
                pattern="^\+\d{1,3} \d{10}$"
                value={mobile}
                onChange={(e) => updateMobile(e)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="form-lable">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
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
                className="alert alert-primary "
                onClick={(e) => register(e)}
              >
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-3 col-md-3 d-none d-md-block"></div>
    </div>
    //
  );
}

/**<div>
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
              className="alert alert-primary"
              onClick={(e) => register(e)}
            >
              Register
            </Button>
          </div>
        </div>
       ***/
