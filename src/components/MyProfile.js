export function MyProfile() {
  return (
    <div>
      <div>
        <h1>My Details</h1>
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
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
