import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export function Dashboard() {
  const state = useSelector((state) => state);
  console.log(state);
  const history = useHistory();

  return (
    <div className="row">
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6 ">
        <div className="alert alert-primary">
          <h3 className="text-center">Message will shown here.</h3>
        </div>
      </div>
      <div className="col-3 col-md-3 d-none d-md-block"></div>
    </div>
  );
}
