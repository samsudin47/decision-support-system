/* eslint-disable react/jsx-no-undef */
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import ModalTitle from "react-bootstrap/esm/ModalTitle";
import axios from "axios";
import Pagination from "./Pagination";

export default function TableKriteria() {
  // state
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [kode, setKode] = useState("");
  const [kriteriaId, setKriteria] = useState("");
  const [bobot, setBobot] = useState("");
  const [type, setType] = useState("");
  const [criterias, setCriterias] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 5;
  const totalPages = Math.ceil(criterias.length / itemPerPage);

  // Fetch all kriteria from API
  const fetchCriteria = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9000/api/cms/criteria"
      );
      setCriterias(response.data);
    } catch (error) {
      console.error("Error fetching criteria :", error);
    }
  };

  useEffect(() => {
    fetchCriteria();
  }, []);

  // pagination
  const currentData = criterias.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleClose = () => setShow(false);
  const handleShow = (criteria = {}) => {
    setId(criteria.id || "");
    setKode(criteria.kode || "");
    setKriteria(criteria.kriteriaId || "");
    setBobot(criteria.bobot || "");
    setType(criteria.type || "");
    setShow(true);
  };

  // create and update criteria
  const handleSave = async () => {
    console.log("Payload:", { kode, kriteriaId, bobot, type });
    try {
      const url = "http://localhost:9000/api/cms/criteria";
      const payload = { kode, kriteriaId, bobot, type };

      if (id) {
        const response = await axios.put(`${url}/${id}`, payload);

        setCriterias(
          criterias.map((criteria) =>
            criteria.id === response.data.id ? response.data : criteria
          )
        );
        alert("Alternatif berhasil diperbarui");
      } else {
        const response = await axios.post(url, payload);
        setCriterias([...criterias, response.data]);
        alert("Kriteria berhasil ditambahkan");
      }

      setShow(false);
    } catch (error) {
      console.error("Error saving criteria:", error);
      if (error.response) {
        if (
          error.response.status === 400 &&
          error.response.data.message ===
            "Kode sudah digunakan oleh kriteria lain"
        ) {
          alert(
            "Kode sudah digunakan oleh kriteria lain, silakan pilih kode yang berbeda."
          );
        } else {
          alert(
            "Kode sudah digunakan oleh kriteria lain, silakan pilih kode yang berbeda."
          );
        }
      } else {
        alert("Tidak ada respons dari server, silakan coba lagi.");
      }
    }
  };

  // Delete criteria
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/api/cms/criteria/${id}`);
      setCriterias(criterias.filter((criteria) => criteria.id !== id));
    } catch (error) {
      console.error("Error deleting kriteria", error);
      alert("Terjadi kesalahan pada saat menghapus kriteria");
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="text-start">
          {/*  */}
          <Button className="btn btn-primary mb-4" onClick={handleShow}>
            <ion-icon name="add-outline" size="small"></ion-icon>
            Add New Kriteria
          </Button>

          <Modal show={show} onHide={handleClose}>
            <ModalHeader>
              <ModalTitle>Add New Kriteria</ModalTitle>
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
                    aria-describedby="kodeHelp"
                    value={kode}
                    onChange={(e) => setKode(e.target.value.trim())}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="kriteria" className="form-label">
                    Kriteria
                  </label>
                  <input
                    type="text"
                    className="form-control w-100"
                    id="kriteria"
                    aria-describedby="kriteriaHelp"
                    value={kriteriaId}
                    onChange={(e) => setKriteria(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="kriteria" className="form-label">
                    Bobot Kriteria
                  </label>
                  <input
                    type="number"
                    className="form-control w-100"
                    id="kriteria"
                    aria-describedby="kriteriaHelp"
                    min={0}
                    step={1}
                    value={bobot}
                    onChange={(e) => setBobot(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="typeKriteria" className="form-label">
                    Atribut
                  </label>
                  <select
                    className="form-select w-100"
                    id="typeKriteria"
                    aria-describedby="typeKriteriaHelp"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="">Pilih Atribut</option>
                    <option value="cost">Cost</option>
                    <option value="benefit">Benefit</option>
                  </select>
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
        {/* Table Display Kriteria */}
        <div className="me-5">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Kode</th>
                <th scope="col">Kriteria</th>
                <th scope="col">Bobot</th>
                <th scope="col">Atribut</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((criteria, index) => (
                <tr key={criteria.id}>
                  <td scope="row">
                    {(currentPage - 1) * itemPerPage + index + 1}
                  </td>
                  <td>{criteria.kode}</td>
                  <td>{criteria.kriteriaId}</td>
                  <td>{criteria.bobot}</td>
                  <td>{criteria.type}</td>
                  <td>
                    <span>
                      <ion-icon
                        id="action"
                        name="create-outline"
                        size="small"
                        onClick={() => handleShow(criteria)}
                      ></ion-icon>
                    </span>
                    <span>
                      {"  "}
                      <ion-icon
                        id="action"
                        name="trash-outline"
                        size="small"
                        onClick={() => handleDelete(criteria.id)}
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
