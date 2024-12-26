import { Link } from "react-router-dom";

export default function Introduction() {
  return (
    <>
      <div className="container text-start">
        <p className="lead">
          <br />
          <button className="btn btn-primary">
            <Link to={"#"}>Lihat Panduan</Link>
          </button>
        </p>
      </div>
    </>
  );
}
