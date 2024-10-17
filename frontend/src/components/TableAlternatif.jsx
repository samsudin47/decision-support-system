import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import ModalTitle from "react-bootstrap/esm/ModalTitle";

export default function TableAlternatif() {
  // modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container mt-5">
        <div className="text-start">
          {/*  */}
          <Button className="btn btn-primary mb-4" onClick={handleShow}>
            <ion-icon name="add-outline" size="small"></ion-icon>
            Add Alternatif
          </Button>

          <Modal show={show} onHide={handleClose}>
            <ModalHeader>
              <ModalTitle>Add New Alternatif</ModalTitle>
            </ModalHeader>
            <Modal.Body>
              <form>
                <div className="mb-3">
                  <label htmlFor="kode" className="form-label">
                    Kode
                  </label>
                  <input
                    type="kode"
                    className="form-control w-100"
                    id="kode"
                    aria-describedby="kodeHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="alternatif" className="form-label">
                    Nama Alternatif
                  </label>
                  <input
                    type="alternatif"
                    className="form-control w-100"
                    id="alternatif"
                    aria-describedby="alternatifHelp"
                  />
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          {/*  */}
        </div>
        <div className="me-5">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Kode</th>
                <th scope="col">Alternatif</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <span>
                    <ion-icon
                      id="action"
                      name="create-outline"
                      size="small"
                    ></ion-icon>
                  </span>
                  <span>
                    {"  "}
                    <ion-icon
                      id="action"
                      name="trash-outline"
                      size="small"
                    ></ion-icon>
                  </span>
                </td>
              </tr>
              <tr>
                <td scope="row">2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>
                  <span>
                    <ion-icon
                      id="action"
                      name="create-outline"
                      size="small"
                    ></ion-icon>
                  </span>
                  <span>
                    {"  "}
                    <ion-icon
                      id="action"
                      name="trash-outline"
                      size="small"
                    ></ion-icon>
                  </span>
                </td>
              </tr>
              <tr>
                <td scope="row">3</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>
                  <span>
                    <ion-icon
                      id="action"
                      name="create-outline"
                      size="small"
                    ></ion-icon>
                  </span>
                  <span>
                    {"  "}
                    <ion-icon
                      id="action"
                      name="trash-outline"
                      size="small"
                    ></ion-icon>
                  </span>
                </td>
              </tr>
              <tr>
                <td scope="row">4</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <span>
                    <ion-icon
                      id="action"
                      name="create-outline"
                      size="small"
                    ></ion-icon>
                  </span>
                  <span>
                    {"  "}
                    <ion-icon
                      id="action"
                      name="trash-outline"
                      size="small"
                    ></ion-icon>
                  </span>
                </td>
              </tr>
              <tr>
                <td scope="row">5</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>
                  <span>
                    <ion-icon
                      id="action"
                      name="create-outline"
                      size="small"
                    ></ion-icon>
                  </span>
                  <span>
                    {"  "}
                    <ion-icon
                      id="action"
                      name="trash-outline"
                      size="small"
                    ></ion-icon>
                  </span>
                </td>
              </tr>
              <tr>
                <td scope="row">6</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>
                  <span>
                    <ion-icon
                      id="action"
                      name="create-outline"
                      size="small"
                    ></ion-icon>
                  </span>
                  <span>
                    <ion-icon
                      id="action"
                      name="trash-outline"
                      size="small"
                    ></ion-icon>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="next">
          <div className="me-5 d-flex justify-content-end">
            <nav aria-label="...">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">
                    Previous
                  </a>
                </li>
                <li className="page-item active" aria-current="page">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
