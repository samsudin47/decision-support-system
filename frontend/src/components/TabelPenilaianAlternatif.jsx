import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "react-bootstrap/Button";
import TabelPenilaian from "./TabelPenilaian";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import axios from "axios";
import {
  fetchPenilaianAlternatif,
  addPenilaianAlternatif,
  updatePenilaianAlternatif,
  deletePenilaianAlternatif,
} from "../services/penilaianAlternatif";

export default function TabelPenilaianAlternatif() {
  // modal with material ui
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // state menyimpan data penilaian dan alternatif
  const [data, setData] = useState([]);
  const [alternatives, setAlternatives] = useState([]);
  const [formValues, setFormValues] = useState({
    periode: "",
    alternativeId: "",
    kriteria: "",
    nilai: "",
  });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // fetch data saat komponen dimuat
  useEffect(() => {
    const loadData = async () => {
      const fetchData = await fetchPenilaianAlternatif();
      setData(fetchData);
    };
    loadData();
  }, []);

  // ambil data untuk dropdown
  // useEffect(() => {
  //   const loadALternatives = async () => {
  //     const alternativesData = await fetchPenilaianAlternatif();
  //     setAlternatives(alternativesData);
  //   };
  //   loadALternatives();
  // }, []);

  // Ambil data alternatif dari endpoint API yang benar
  useEffect(() => {
    const loadAlternatives = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/api/cms/alternatives"
        ); // Pastikan ini mengarah ke API yang tepat
        setAlternatives(response.data); // Asumsi data yang diterima adalah daftar alternatif
      } catch (error) {
        console.error("Error fetching alternatives:", error);
      }
    };

    loadAlternatives();
  }, []);

  // Fungsi menangani perubahan form
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues({
        ...formValues,
        [name]: value,
      }),
    });
  };

  // Fungsi add data
  const handleAdd = async () => {
    const newData = await addPenilaianAlternatif(formValues);
    setData([...data, newData]);
    handleClose();
  };

  // Fungsi memperbarui data
  const handleUpdate = async (id, updatedValues) => {
    const updatedData = await updatePenilaianAlternatif(id, updatedValues);
    setData(data.map((item) => (item.id === id ? updatedData : item)));
  };

  // Fungsi menghapus data
  const handleDelete = async (id) => {
    const success = await deletePenilaianAlternatif(id);
    if (success) {
      setData(data.filter((item) => item.id !== id));
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
              <Button className="btn btn-danger ms-3 mb-4">
                Kosongkan Tabel
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
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    className="text-center pt-3"
                  >
                    Add Nilai Alternatif
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{ mt: 2 }}
                    className="container"
                  >
                    <form className="m-3 mx-5">
                      <div className="mb-3">
                        <label htmlFor="periode" className="form-label">
                          Periode
                        </label>
                        <select
                          className="form-select w-100"
                          aria-label="Default select example"
                          name="periode"
                          value={formValues.periode}
                          onChange={handleInputChange}
                        >
                          <option selected>- Pilih -</option>
                          <option value="1"></option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
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
                          <option selected>- Pilih -</option>
                          {alternatives.map((alt) => (
                            <option key={alt.id} value={alt.id}>
                              {alt.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </form>
                    <TabelPenilaian />
                  </Typography>
                  <div className="button text-end me-5">
                    <Button variant="danger me-3" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary me-2" onClick={handleAdd}>
                      Save Changes
                    </Button>
                  </div>
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
                <tr key={item.id}>
                  <td scope="row">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  <td>{item.periode}</td>
                  <td>{item.alternativeId}</td>
                  <td>{item.kriteria}</td>
                  <td>{item.nilai}</td>
                  <td>
                    <span>
                      <ion-icon
                        id="action"
                        name="create-outline"
                        size="small"
                        onClick={() => handleUpdate(item.id, formValues)}
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
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={paginate}
          />
        </div>
      </div>
    </>
  );
}
