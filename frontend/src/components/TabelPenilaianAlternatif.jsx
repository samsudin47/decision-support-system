// eslint-disable-next-line no-unused-vars
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  fetchPenilaianAlternatif,
  addPenilaianAlternatif,
  updatePenilaianAlternatif,
  deletePenilaianAlternatif,
} from "../services/penilaianAlternatif";

export default function TabelPenilaianAlternatif() {
  // modal with material ui
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [alternatives, setAlternatives] = useState([]);
  const [criteria, setCriteria] = useState([]);
  const [formValues, setFormValues] = useState({
    periode: "",
    alternativeId: "",
    kriteriaId: "",
    nilai: "",
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFormValues({
      periode: "",
      alternativeId: "",
      kriteriaId: "",
      nilai: "",
    });
  };

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // fetch data saat komponen dimuata
  useEffect(() => {
    const loadData = async () => {
      const fetchData = await fetchPenilaianAlternatif();
      console.log("Fetched Data:", fetchData);
      setData(fetchData);
    };
    loadData();
  }, []);

  // Ambil data alternatif dari endpoint API yang benar
  useEffect(() => {
    const loadAlternatives = async () => {
      try {
        console.log("Fetching Alternatives");
        const response = await axios.get(
          "http://localhost:9000/api/cms/alternatives"
        ); // Pastikan ini mengarah ke API yang tepat
        console.log("Response Data:", response.data);
        setAlternatives(response.data); // Asumsi data yang diterima adalah daftar alternatif
      } catch (error) {
        console.error("Error fetching alternatives:", error);
        console.log("Error Details:", error);
      }
    };
    loadAlternatives();
  }, []);

  useEffect(() => {
    const loadCriteria = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/api/cms/criteria"
        );
        setCriteria(response.data);
      } catch (error) {
        console.error("error fetching data criteria and alternatif", error);
      }
    };
    loadCriteria();
  }, []);

  // Fungsi menangani perubahan form
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Fungsi add data
  const handleAdd = async () => {
    try {
      if (
        !formValues.periode ||
        !formValues.alternativeId ||
        !formValues.kriteriaId ||
        !formValues.nilai
      ) {
        alert("Pastikan semua field terisi.");
        return;
      }
      const newData = await addPenilaianAlternatif(formValues); // Pastikan fungsi ini benar
      setData([...data, newData]);

      const updatedAlternative = alternatives.find(
        (alt) => alt.id === formValues.alternativeId
      );
      if (!updatedAlternative) {
        const alternativeResponse = await axios.get(
          `http://localhost:9000/api/cms/alternatives/${formValues.alternativeId}`
        );
        setAlternatives([...alternatives, alternativeResponse.data]);
      }
      const updatedCriteria = criteria.find(
        (crit) => crit.id === formValues.kriteriaId
      );
      if (!updatedCriteria) {
        const criteriaResponse = await axios.get(
          `http://localhost:9000/api/cms/criteria/${formValues.kriteriaId}`
        );
        setCriteria([...criteria, criteriaResponse.data]);
      }

      handleClose();
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  // Fungsi memperbarui data

  const handleUpdate = async (id) => {
    try {
      if (
        !formValues.periode ||
        !formValues.alternativeId ||
        !formValues.kriteriaId ||
        !formValues.nilai
      ) {
        alert("Pastikan semua field terisi.");
        return;
      }

      // Memanggil API update
      const updatedData = await updatePenilaianAlternatif(id, formValues);

      if (updatedData) {
        // Update state data langsung tanpa menunggu fetch ulang
        setData((prevData) =>
          prevData.map((item) =>
            item.id === id
              ? {
                  ...item,
                  ...updatedData, // Menggabungkan data yang diperbarui dari API
                  alternative: updatedData.alternative || item.alternative, // Memastikan alternatif diperbarui
                  criteria: updatedData.criteria || item.criteria, // Memastikan kriteria diperbarui
                }
              : item
          )
        );

        alert("Data berhasil diperbarui!");
        handleClose(); // Tutup modal
      } else {
        alert("Gagal memperbarui data.");
      }
    } catch (error) {
      console.error("Error updating data: ", error);
      alert("Terjadi kesalahan saat memperbarui data.");
    }
  };

  // Fungsi menghapus data
  const handleDelete = async (id) => {
    if (window.confirm("Yakin ingin menghapus data ini?")) {
      const success = await deletePenilaianAlternatif(id);
      if (success) {
        setData(data.filter((item) => item.id !== id));
      }
    }
  };

  // Hitung data yang akan ditampilkan berdasarkan halaman aktif
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Menghitung total halaman
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Fungsi untuk mengubah halaman
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="container mt-5">
        <div className="text-start">
          <div>
            <div>
              <Button className="btn btn-primary mb-4" onClick={handleOpen}>
                Add Nilai Alternatif
              </Button>
            </div>
            <div className="d-flex justify-content-center">
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className="material-style rounded-3">
                  <Box
                    id="modal-modal-title"
                    variant="h6"
                    className="text-center pt-3"
                  >
                    Add Nilai Alternatif
                  </Box>
                  <Typography
                    id="modal-modal-description"
                    sx={{ mt: 2 }}
                    component="div"
                    className="container"
                  >
                    <form className="m-3 mx-5">
                      <div className="mb-3">
                        <label htmlFor="periode" className="form-label">
                          Periode
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          data-date-end-date="0d"
                          name="periode"
                          value={formValues.periode}
                          onChange={handleInputChange}
                        ></input>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="alternatif" className="form-label">
                          Alternatif
                        </label>
                        <select
                          className="form-select w-100"
                          aria-label="Default select example"
                          id="alternatif"
                          name="alternativeId"
                          value={formValues.alternativeId}
                          onChange={handleInputChange}
                        >
                          <option value>- Pilih -</option>
                          {alternatives.map((alt) => (
                            <option key={alt.id} value={alt.id}>
                              {alt.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="alternatif" className="form-label">
                          Kriteria
                        </label>
                        <select
                          className="form-select w-100"
                          aria-label="Default select example"
                          id="kriteria"
                          name="kriteriaId"
                          value={formValues.kriteriaId}
                          onChange={handleInputChange}
                        >
                          <option value>- Pilih -</option>
                          {criteria.map((crit) => (
                            <option key={crit.id} value={crit.id}>
                              {crit.kriteriaId}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="alternatif" className="form-label">
                          Nilai
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          id="nilai"
                          name="nilai"
                          value={formValues.nilai}
                          onChange={handleInputChange}
                        >
                          <option value>-- Pilih --</option>
                          {Array.from({ length: 6 }, (_, i) => (
                            <option key={i + 0} value={i + 0}>
                              {i + 0}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="button text-end mt-5">
                        <Button variant="danger me-4" onClick={handleClose}>
                          Close
                        </Button>
                        <Button
                          variant="primary"
                          onClick={() => {
                            formValues.id
                              ? handleUpdate(formValues.id)
                              : handleAdd();
                          }}
                        >
                          {formValues.id ? "Update" : "Save Changes"}
                        </Button>
                      </div>
                    </form>
                  </Typography>
                </Box>
              </Modal>
            </div>
          </div>
        </div>
        <div className="me-5">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Periode</th>
                <th scope="col">Alternatif</th>
                <th scope="col">Kriteria</th>
                <th scope="col">Nilai</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index}>
                  <td scope="row">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  <td>{item.periode}</td>
                  <td>
                    {item.alternative
                      ? item.alternative.name
                      : "Tidak Tersedia"}
                  </td>
                  <td>
                    {item.criteria
                      ? item.criteria.kriteriaId
                      : "Tidak Tersedia"}
                  </td>
                  <td>{item.nilai}</td>
                  <td>
                    <span>
                      <ion-icon
                        id="action"
                        name="create-outline"
                        size="small"
                        onClick={() => {
                          setFormValues({
                            id: item.id,
                            periode: item.periode,
                            alternativeId: item.alternativeId || "",
                            kriteriaId: item.kriteriaId || "",
                            nilai: item.nilai,
                          });
                          handleOpen();
                        }}
                      ></ion-icon>
                    </span>
                    <span>
                      <ion-icon
                        id="action"
                        name="trash-outline"
                        size="small"
                        onClick={() => handleDelete(item.id)}
                      ></ion-icon>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-center">
            <div className="row align-items-center">
              <div className="col-md">
                <Pagination
                  totalPages={totalPages}
                  currentPage={currentPage}
                  onPageChange={paginate}
                />
              </div>
              <div className="col-md text-end">
                <Link to={"/proseshitung"}>
                  <button className="btn btn-primary">Perhitungan SAW</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
