import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "react-bootstrap/Button";
import TabelPenilaian from "./TabelPenilaian";

export default function TabelPenilaianAlternatif() {
  // modal with material ui
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
                        >
                          <option selected>- Pilih -</option>
                          <option value="1">One</option>
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
                        >
                          <option selected>- Pilih -</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </form>
                    <TabelPenilaian />
                  </Typography>
                  <div className="button text-end me-5">
                    <Button variant="danger me-3" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary me-2" onClick={handleClose}>
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
              <tr>
                <td scope="row">1</td>
                <td>2022</td>
                <td>Produk 1</td>
                <td>Daya Tahan</td>
                <td>5</td>
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
                <td>2022</td>
                <td>Produk 2</td>
                <td>Daya Tahan</td>
                <td>5</td>
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
                <td>2022</td>
                <td>Produk 3</td>
                <td>Daya Tahan</td>
                <td>5</td>
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
                <td>2022</td>
                <td>Produk 4</td>
                <td>Daya Tahan</td>
                <td>5</td>
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
                <td>2022</td>
                <td>Produk 5</td>
                <td>Daya Tahan</td>
                <td>5</td>
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
                <td>2022</td>
                <td>Produk 6</td>
                <td>Daya Tahan</td>
                <td>5</td>
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
