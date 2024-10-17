import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBars, FaTimes } from "react-icons/fa"; // Added FaBars and FaTimes for the menu icon
import { AiFillDatabase } from "react-icons/ai";
import { SiProcesswire } from "react-icons/si";
import { AiFillPrinter } from "react-icons/ai";
import { LuUsers } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Added icon button to toggle sidebar visibility */}
      <div className="menu-icon">
        <button className="btn btn-dark" onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="text-white" />
          ) : (
            <FaBars className="text-white" />
          )}
        </button>
      </div>

      <nav className={`navbar sideBar ${isOpen ? "open" : ""}`}>
        <div className="text-start">
          <div className="col-md">
            <h4 className="text-warning text-center mb-4">Menu</h4>
            <ul>
              <li className="mb-4">
                <Link className="sidebar" to="/">
                  <FaHome className="me-3 text-white" />
                  Home
                </Link>
              </li>
              <li className="mb-4">
                <Link className="sidebar" to={"/alternatif"}>
                  <AiFillDatabase className="me-3 text-white" />
                  Data Alternatif
                </Link>
              </li>
              <li className="mb-4">
                <Link className="sidebar" to={"/kriteria"}>
                  <AiFillDatabase className="me-3 text-white" />
                  Data Kriteria
                </Link>
              </li>
              <li className="mb-4">
                <Link className="sidebar" to={"/penilaianAlternatif"}>
                  <AiFillDatabase className="me-3 text-white" />
                  Penilaian Alternatif
                </Link>
              </li>
              <li className="mb-4">
                <Link className="sidebar" to="#">
                  <SiProcesswire className="me-3 text-white" />
                  Proses Hitung
                </Link>
              </li>
              <li className="mb-4">
                <Link className="sidebar" to="#">
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
                  Data User
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
