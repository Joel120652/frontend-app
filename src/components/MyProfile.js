export function MyProfile() {
  return (
    <div className="row">
      <div className="col-3 col-md-2 d-none d-md-block"></div>
      <div className="col-12 col-md-8">
        <h1 className="alert alert-primary text-center">My Details</h1>

        {/**form table */}
        <div>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">FIRST NAME</th>
                <th scope="col">LAST NAME</th>
                <th scope="col">EMAIL</th>
                <th scope="col">MOBILE</th>
                <th scope="col">PASSWORD</th>
                <th scope="col">ROLE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>first name</td>
                <td>last name</td>
                <td>{"****@gmail.com"}</td>
                <td>1234567890</td>
                <td>{"********"}</td>
                <td>employee</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-3 col-md-2 d-none d-md-block"></div>
    </div>
  );
}

/* 
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { userLogoutAction } from "../redux/UserReducer";

export function RegistrationList() {
  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = (item) => {
    dispatch(userLogoutAction(item));
  };
  return (
    <div className="row">
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6 ">
        <div className="alert alert-primary">
          <h3 className="text-center">Message will shown here.</h3>
        </div>

        <div>
          <form onSubmit={(item) => logout(item)}>
            <Button
              className="alert alert-primary"
              onClick={(item) => logout(item)}
            >
              Logout
            </Button>
          </form>
        </div>
      </div>
      <div className="col-3 col-md-3 d-none d-md-block"></div>
    </div>
  );
}
*/
