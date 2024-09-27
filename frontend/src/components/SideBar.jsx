import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { AiFillDatabase } from "react-icons/ai";
import { SiProcesswire } from "react-icons/si";
import { AiFillPrinter } from "react-icons/ai";
import { LuUsers } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";

export default function SideBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg sideBar">
        <div className="text-start">
          <div className="col-md">
            <h4 className="text-warning text-center mb-4">Menu</h4>
            <ul>
              <li className="mb-4">
                <Link className="sidebar" href="#">
                  <FaHome className="me-3 text-white" />
                  Dashboard
                </Link>
              </li>
              <li className="mb-4">
                <Link className="sidebar" href="#">
                  <AiFillDatabase className="me-3 text-white" />
                  Data Alternatif
                </Link>
              </li>
              <li className="mb-4">
                <Link className="sidebar" href="#">
                  <AiFillDatabase className="me-3 text-white" />
                  Data Kriteria
                </Link>
              </li>
              <li className="mb-4">
                <Link className="sidebar" href="#">
                  <AiFillDatabase className="me-3 text-white" />
                  Penilaian Alternatif
                </Link>
              </li>
              <li className="mb-4">
                <Link className="sidebar" href="#">
                  <SiProcesswire className="me-3 text-white" />
                  Proses Hitung
                </Link>
              </li>
              <li className="mb-4">
                <Link className="sidebar" href="#">
                  <AiFillPrinter className="me-3 text-white" />
                  Data Hasil Keputusan
                </Link>
              </li>
            </ul>
            <h5 className="text-warning text-center my-4">User</h5>
            <ul>
              <li className="mb-4">
                <Link className="sidebar">
                  <LuUsers className="me-3 text-white" />
                  Data user
                </Link>
              </li>
              <li className="mb-4">
                <button className="btn btn-dark">
                  <Link to={"/login"}>
                    <CiLogout className="me-3 text-white" />
                    Log out
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
