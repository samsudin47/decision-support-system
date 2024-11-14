import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import ModalTitle from "react-bootstrap/esm/ModalTitle";
import axios from "axios";

export default function TableAlternatif() {
  // modal
  const [show, setShow] = useState(false);
  const [kode, setKode] = useState("");
  const [name, setName] = useState("");
  const [selectedAlternatives, setSelectedAlternatives] = useState(null);
  const [alternatives, setAlternatives] = useState([]); // To store the fetched alternatives

  // fetch all alternatives from backend
  const fetchAlternatives = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9000/api/cms/alternatives"
      );
      console.log(response.data); // nanti dihapus
      setAlternatives(response.data);
    } catch (error) {
      console.error("Error fetching alternatives:", error);
    }
  };

  // Fetch alternatives on component mount
  useEffect(() => {
    fetchAlternatives();
  }, []); // Empty array means this runs once when the component mounts

  // Modal handlers
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setKode("");
    setName("");
    setShow(true);
    setSelectedAlternatives(null);
    setShow(true);
  };

  // Create or update alternative handler
  const handleSave = async () => {
    const url = selectedAlternatives
      ? `http://localhost:9000/api/cms/alternatives/${selectedAlternatives.id}`
      : `http://localhost:9000/api/cms/alternatives`;
    const method = selectedAlternatives ? "PUT" : "POST";
    try {
      const response = await axios({
        method,
        url,
        data: { kode, name },
        headers: { "Content-Type": "application/json" },
      });

      if (method === "POST") {
        setAlternatives([...alternatives, response.data]);
      } else {
        const updatedAlternatives = alternatives.map((alt) =>
          alt.id === response.data.id ? response.data : alt
        );
        setAlternatives(updatedAlternatives);
      }

      setShow(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Delete alternative
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/api/cms/alternatives/${id}`);
      setAlternatives(alternatives.filter((alt) => alt.id !== id));
    } catch (error) {
      console.error("Error hapus alternative");
    }
  };

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
              <ModalTitle>
                {selectedAlternatives ? "Edit" : "Add"}Add New Alternatif
              </ModalTitle>
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
                    value={kode}
                    onChange={(e) => setKode(e.target.value)}
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-describedby="alternatifHelp"
                  />
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSave}>
                {selectedAlternatives ? "Update" : "Save Changes"}
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        {/* table display */}
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
              {alternatives.map((alternative, index) => (
                <tr key={alternative.id}>
                  <td scope="row">{index + 1}</td>
                  <td>{alternative.kode}</td>
                  <td>{alternative.name}</td>
                  <td>
                    <span>
                      <ion-icon
                        id="action"
                        name="create-outline"
                        size="small"
                        onClick={() => {
                          setSelectedAlternatives(alternative);
                          setKode(alternative.kode);
                          setName(alternative.name);
                          handleShow();
                        }}
                      ></ion-icon>
                    </span>
                    <span>
                      <ion-icon
                        id="action"
                        name="trash-outline"
                        size="small"
                        onClick={() => {
                          handleDelete(alternative.id);
                        }}
                      ></ion-icon>
                    </span>
                  </td>
                </tr>
              ))}
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
