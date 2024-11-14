import logo from "../assets/logoHome.svg";
import smartphone from "../assets/smatphone.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdPermPhoneMsg } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";

export default function Login() {
  // State variables for username, email, passwords and error message
  // const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Initialize useNavigate hook for navigation
  const navigate = useNavigate();

  // function to handle form submisson
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Send login request to backend
      const response = await axios.post(
        "http://localhost:9000/api/cms/auth/login",
        {
          // email,
          name,
          password,
        }
      );

      // if login is successful, save the token and redirect
      if (response.status === 200) {
        const { token, username } = response.data;
        localStorage.setItem("token", token);
        setLoading(false);
        if (localStorage.setItem("username", username)) {
          navigate("/login");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      setErrorMessage("Your email or password is incorrect");
      setLoading(false);
      console.error("Error", error);
    }
  };

  return (
    <>
      <div className="layout-login">
        <div className="container ">
          <div className="pt-5 ">
            <h2 className="text-center judul text-light ">
              Decision Support System
            </h2>
            <h3 className="text-center judul text-warning">
              Simple Additive Weighting
            </h3>
            <div className="mt-4">
              <div className="row justify-content-center mb-5">
                <div className="col-md d-flex justify-content-center">
                  <img src={logo} className="w-75" alt="" />
                </div>
                <div className="col-md">
                  <div className="d-flex justify-content-center">
                    <form
                      onSubmit={handleSubmit}
                      className="w-75 p-3 m-3 shadow rounded-3 bg-light"
                    >
                      <h3 className="text-center judul text-dark">Sign In</h3>
                      <div className="mb-3">
                        <label htmlFor="inputUserName" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          id="inputName"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="form-control"
                          placeholder="Username"
                        />
                        <label htmlFor="inputPassword" className="form-label">
                          Password
                        </label>
                        <input
                          type={showPassword ? "password" : "text"}
                          id="password"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control"
                          placeholder="Password"
                          autoComplete="current-password"
                        />
                        <span
                          type="button"
                          className="text-black dark:text-white py-2"
                          onClick={() => {
                            setShowPassword((prev) => !prev);
                          }}
                        >
                          {showPassword ? (
                            <>
                              <span>Show Password </span>
                              <FaEye />
                            </>
                          ) : (
                            <>
                              <span>Hide Password </span>
                              <FaEyeSlash />
                            </>
                          )}
                        </span>
                        <br />
                        {loading ? (
                          <div className="text-center my-3">
                            <ClipLoader
                              size={50}
                              color="#36d7b7"
                              loading={loading}
                            />
                          </div>
                        ) : (
                          <button type="submit" className="btn btn-primary">
                            Sign In
                          </button>
                        )}

                        <span className="d-flex justify-content-center p-2">
                          <Link to={"/register"} className="text-dark">
                            Belum punya akun?{" "}
                            <span className="text-danger">
                              Daftar terlebih dulu
                            </span>
                          </Link>
                        </span>
                        {errorMessage && (
                          <div
                            className="alert alert-danger text-center"
                            role="alert"
                          >
                            {errorMessage}
                          </div>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="about">
              <h4 className="subjudul text-white">Decision Support System</h4>
              <p className="text-white lead paragraph">
                Adalah sebuah sistem informasi berbasis komputer yang membantu
                proses pengambilan keputusan dalam sebuah organisasi atau
                bisnis. DSS dirancang untuk mendukung pengambilan keputusan yang
                lebih baik, terutama dalam situasi yang kompleks dan tidak
                terstruktur, di mana pengambilan keputusan memerlukan analisis
                data yang mendalam.{" "}
                <span className="h5 fst-italic">Ciri-ciri Utama DSS :</span>{" "}
                Interaktif: DSS memungkinkan pengguna untuk berinteraksi dengan
                data dan model analitis untuk menghasilkan berbagai alternatif
                keputusan. Data-driven: DSS menggunakan data dari berbagai
                sumber seperti database internal, data historis, dan informasi
                eksternal untuk mendukung pengambilan keputusan. Model-driven:
                DSS sering kali memiliki kemampuan untuk menjalankan model-model
                matematis atau simulasi yang membantu memprediksi hasil dari
                berbagai keputusan. Fleksibilitas: DSS dirancang untuk dapat
                diadaptasi dan digunakan dalam berbagai situasi dan kebutuhan,
                mulai dari analisis bisnis, perencanaan strategis, hingga
                pengambilan keputusan taktis.
              </p>
            </div>
            <div className="section-apps row justify-content-center rounded-3">
              <div className="col-md-6 py-5 ">
                <h2 className="text-warning">
                  Try our app <br />
                  for free 14 days
                </h2>
                <p>Available today for both Android and IOS.</p>
                <div className="container row justify-content-start gap-3 mt-5 ">
                  <div className="col-md-4 bg-black p-2 text-center rounded-2">
                    <FaGooglePlay className="h2" /> <span>Google Play</span>
                  </div>
                  <div className="col-md-3 text-center bg-black p-2 rounded-2">
                    <FaAppStoreIos className="h2" /> <span>App Store</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex justify-content-center m-3">
                <img src={smartphone} className="w-100 m-4 " alt="" />
              </div>
            </div>
            <footer className=" d-flex justify-content-center pb-5">
              <div className="w-75">
                <div className="row align-items-center">
                  <div className="col-md">
                    <h4 className="footer-judul text-warning">Products</h4>
                    <ul className="p-0 lead">
                      <li>
                        <Link to="#">React</Link>
                      </li>
                      <li>
                        <Link to="#">Bootstrap</Link>
                      </li>
                      <li>
                        <Link to="#">Node JS</Link>
                      </li>
                      <li>
                        <Link to="#">Vite</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md">
                    <h4 className="footer-judul text-warning">Useful Link</h4>
                    <ul className="p-0 lead">
                      <li>
                        <Link href="#">Pricing</Link>
                      </li>
                      <li>
                        <Link href="#">Settings</Link>
                      </li>
                      <li>
                        <Link href="#">Orders</Link>
                      </li>
                      <li>
                        <Link href="#">Help</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md">
                    <h4 className="footer-judul text-warning">Contact</h4>
                    <ul className="list-inline mb-5">
                      <li className="list-inline-item h1 ">
                        <Link href="#">
                          <MdOutlineEmail />
                        </Link>
                      </li>
                      <li className="list-inline-item h1">
                        <Link href="#">
                          <MdPermPhoneMsg />
                        </Link>
                      </li>
                      <li className="list-inline-item h1">
                        <Link href="#">
                          <FaLinkedin />
                        </Link>
                      </li>
                      <li className="list-inline-item h1">
                        <Link href="#">
                          <FaInstagramSquare />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
