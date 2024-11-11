import { Link } from "react-router-dom";

export default function Introduction() {
  return (
    <>
      <div className="container text-start">
        <p className="mt-3 lead">
          <br />
          <button className="btn btn-primary mt-3">
            <Link to={"#"}>Lihat Panduan</Link>
          </button>
        </p>
      </div>
    </>
  );
}
