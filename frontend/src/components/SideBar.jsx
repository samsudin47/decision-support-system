import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBars, FaTimes } from "react-icons/fa"; // Added FaBars and FaTimes for the menu icon
import { AiFillDatabase } from "react-icons/ai";
import { SiProcesswire } from "react-icons/si";
import { AiFillPrinter } from "react-icons/ai";
import { LuUsers } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/login");
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
                  Dashboard
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
                <Link className="sidebar" to={"/proseshitung"}>
                  <SiProcesswire className="me-3 text-white" />
                  Proses Hitung
                </Link>
              </li>
              <li className="mb-4">
                <Link className="sidebar" to={"/hasilkeputusan"}>
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
                <button className="btn btn-dark" onClick={handleLogout}>
                  <CiLogout className="me-3 text-white" />
                  Log out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
