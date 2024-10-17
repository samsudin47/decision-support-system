import { Link } from "react-router-dom";

export default function Introduction() {
  return (
    <>
      <div className="container text-start">
        <p className="mt-5 lead">
          <span>Hallo users,</span> Selamat datang di system
          <span className="samma"> sammaHearing</span> silahkan baca panduan
          untuk dapat memilih Hearing Aid sesuai dengan kebutuhan anda
          <br />
          <button className="btn btn-primary mt-3">
            <Link to={"#"}>Lihat Panduan</Link>
          </button>
        </p>
      </div>
    </>
  );
}
