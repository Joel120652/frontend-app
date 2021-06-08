import { useSelector } from "react-redux";

export function RegistrationList() {
  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div className="row">
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <div className="alert alert-primary">
          <h3 className="text-center">My Details</h3>
        </div>
      </div>
      <div className="col-3 col-md-3 d-none d-md-block"></div>
    </div>
  );
}
