// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function DashboardCard() {
  const [userName, setUsername] = useState("");

  useEffect(() => {
    const userName = localStorage.getItem("username");
    if (userName) {
      setUsername(userName);
    }
  }, []);
  return (
    <>
      <div className="container text-start pe-5 grid gap-3">
        {userName ? (
          <span>
            {" "}
            <p className="lead text-start">
              Hallo <span className="fw-bold">{userName}</span> !, Selamat
              datang di layanan kami
              <span className="samma"> sammaHearing</span> silahkan baca panduan
              untuk dapat memilih Hearing Aid sesuai dengan kebutuhan anda.
            </p>
          </span>
        ) : (
          <span> </span>
        )}
        <div className="row align-items-center">
          <div className="col-md p-2 g-col-6">
            <div className="card bg-light text-dark shadow">
              <div className="card-body">
                <h5 className="card-title">Data Alternatif</h5>
                <ion-icon name="bookmarks-outline" size="large"></ion-icon>
                <div>
                  <Link to={"/alternatif"}>
                    <button className="btn btn-primary">Lihat Data</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md p-2 g-col-6">
            <div className="card bg-light text-dark shadow">
              <div className="card-body">
                <h5 className="card-title">Data Kriteria</h5>
                <ion-icon name="server-sharp" size="large"></ion-icon>
                <div>
                  <Link to={"/kriteria"}>
                    <button className="btn btn-primary">Lihat Data</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md p-2 g-col-6">
            <div className="card bg-light text-dark shadow">
              <div className="card-body">
                <h5 className="card-title">Hasil Keputusan</h5>
                <ion-icon name="print-sharp" size="large"></ion-icon>
                <div>
                  <Link to={"/hasilkeputusan"}>
                    <button className="btn btn-primary">Lihat Data</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md p-2 g-col-6">
            <div className="card bg-light text-dark shadow">
              <div className="card-body">
                <h5 className="card-title">Data Users</h5>
                <ion-icon name="people-sharp" size="large"></ion-icon>
                <div>
                  <Link to={"/datausers"}>
                    <button className="btn btn-primary">Lihat Data</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
