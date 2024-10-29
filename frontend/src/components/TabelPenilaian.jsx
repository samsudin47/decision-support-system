export default function TabelPenilaian() {
  return (
    <>
      <div className="container text-center my-5">
        <h5 className="">Penilaian Kriteria</h5>
        <div className="row align-items-center">
          <div className="col-md ms-5">
            <table className="table table-borderless text-start">
              <thead>
                <tr>
                  <th>Kriteria</th>
                  <th>Nilai</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="form-check ">
                      <input
                        className="form-check-input bg-primary"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Harga
                      </label>
                    </div>
                  </td>
                  <td>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>-- Pilih --</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="1">4</option>
                      <option value="2">5</option>
                      <option value="3">6</option>
                      <option value="1">7</option>
                      <option value="2">8</option>
                      <option value="3">9</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check ">
                      <input
                        className="form-check-input bg-primary"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Channel
                      </label>
                    </div>
                  </td>
                  <td>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>-- Pilih --</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="1">4</option>
                      <option value="2">5</option>
                      <option value="3">6</option>
                      <option value="1">7</option>
                      <option value="2">8</option>
                      <option value="3">9</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check ">
                      <input
                        className="form-check-input bg-primary"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Features
                      </label>
                    </div>
                  </td>
                  <td>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>-- Pilih --</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="1">4</option>
                      <option value="2">5</option>
                      <option value="3">6</option>
                      <option value="1">7</option>
                      <option value="2">8</option>
                      <option value="3">9</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check ">
                      <input
                        className="form-check-input bg-primary"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Microphone
                      </label>
                    </div>
                  </td>
                  <td>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>-- Pilih --</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="1">4</option>
                      <option value="2">5</option>
                      <option value="3">6</option>
                      <option value="1">7</option>
                      <option value="2">8</option>
                      <option value="3">9</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check ">
                      <input
                        className="form-check-input bg-primary"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Daya Tahan
                      </label>
                    </div>
                  </td>
                  <td>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>-- Pilih --</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="1">4</option>
                      <option value="2">5</option>
                      <option value="3">6</option>
                      <option value="1">7</option>
                      <option value="2">8</option>
                      <option value="3">9</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-5 ms-5">
            <div className="text-start">
              <h6 className="text-start">Keterangan Nilai</h6>
              <p>
                *Untuk kriteria Harga, Channel, Features, Microphon, & Daya
                Tahan :
              </p>
              <div className="list">
                <ul>
                  <li>1 = Sangat Rendah</li>
                  <li>2 = Rendah</li>
                  <li>3 = Cukup</li>
                  <li>4 = Tinggi</li>
                  <li>5 = Sangat Tinggi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
