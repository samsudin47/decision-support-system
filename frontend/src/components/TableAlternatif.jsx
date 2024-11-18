import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import ModalTitle from "react-bootstrap/esm/ModalTitle";
import axios from "axios";
import Pagination from "./Pagination";

export default function TableAlternatif() {
  // modal state
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [kode, setKode] = useState("");
  const [name, setName] = useState("");
  const [alternatives, setAlternatives] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(alternatives.length / itemsPerPage);

  // show data based on page
  const currentData = alternatives.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Fetch all alternatives from API
  const fetchAlternatives = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9000/api/cms/alternatives"
      );
      setAlternatives(response.data);
    } catch (error) {
      console.error("Error fetching alternatives:", error);
    }
  };

  // Fetch alternatives on component mount
  useEffect(() => {
    fetchAlternatives();
  }, []);

  // Modal handlers
  const handleClose = () => setShow(false);
  const handleShow = (alternative = {}) => {
    setId(alternative.id || "");
    setKode(alternative.kode || ""); // Set Kode for update or empty for new
    setName(alternative.name || ""); // Set Name for update or empty for new
    setShow(true);
  };

  // Create or update alternative handler
  const handleSave = async () => {
    try {
      const url = "http://localhost:9000/api/cms/alternatives";
      const payload = { kode, name }; // Data to be sent to the server

      if (id) {
        // If ID exists, it's an update
        const response = await axios.put(`${url}/${id}`, payload);

        // Update the alternatives list with the updated alternative
        setAlternatives(
          alternatives.map((alt) =>
            alt.id === response.data.id ? response.data : alt
          )
        );

        alert("Alternatif berhasil diperbarui!"); // Alert success for update
      } else {
        const response = await axios.post(url, payload);
        setAlternatives([...alternatives, response.data]);
        alert("Alternatif berhasil ditambahkan!");
      }

      setShow(false);
    } catch (error) {
      console.error("Error saving alternative:", error);
      if (error.response) {
        if (
          error.response.status === 400 &&
          error.response.data.message ===
            "Kode sudah digunakan oleh alternatif lain"
        ) {
          alert(
            "Kode sudah digunakan oleh alternatif lain, silakan pilih kode yang berbeda."
          );
        } else {
          alert(
            "Kode sudah digunakan oleh alternatif lain, silakan pilih kode yang berbeda."
          );
        }
      } else {
        alert("Tidak ada respons dari server, silakan coba lagi.");
      }
    }
  };

  // Delete alternative
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/api/cms/alternatives/${id}`);
      setAlternatives(alternatives.filter((alt) => alt.id !== id));
    } catch (error) {
      console.error("Error deleting alternative:", error);
      alert("Terjadi kesalahan saat menghapus data.");
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="text-start">
          <Button className="btn btn-primary mb-4" onClick={() => handleShow()}>
            <ion-icon name="add-outline" size="small"></ion-icon>
            Add Alternatif
          </Button>

          <Modal show={show} onHide={handleClose}>
            <ModalHeader>
              <ModalTitle>{id ? "Edit" : "Add"} Alternatif</ModalTitle>
            </ModalHeader>
            <Modal.Body>
              <form>
                <div className="mb-3">
                  <label htmlFor="kode" className="form-label">
                    Kode
                  </label>
                  <input
                    type="text"
                    className="form-control w-100"
                    id="kode"
                    value={kode}
                    onChange={(e) => setKode(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="alternatif" className="form-label">
                    Nama Alternatif
                  </label>
                  <input
                    type="text"
                    className="form-control w-100"
                    id="alternatif"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSave}>
                {id ? "Update" : "Save Changes"}
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        {/* Table Display */}
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
              {currentData.map((alternative, index) => (
                <tr key={alternative.id}>
                  <td scope="row">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  <td>{alternative.kode}</td>
                  <td>{alternative.name}</td>
                  <td>
                    <span>
                      <ion-icon
                        name="create-outline"
                        size="small"
                        onClick={() => handleShow(alternative)}
                      ></ion-icon>
                    </span>
                    <span>
                      <ion-icon
                        name="trash-outline"
                        size="small"
                        onClick={() => handleDelete(alternative.id)}
                      ></ion-icon>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}
