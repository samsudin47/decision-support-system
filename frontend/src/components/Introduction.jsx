import { Link } from "react-router-dom";

export default function Introduction() {
  return (
    <>
      <div className="container text-start">
        <p className="lead">
          <br />
          <button className="btn btn-light shadow">
            <Link to={"#"}>
              <span className="samma">sammaHearingSolutions</span>
            </Link>
          </button>
        </p>
      </div>
    </>
  );
}
