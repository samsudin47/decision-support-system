import Button from "react-bootstrap/esm/Button";

export default function TabelDataHasilKeputusan() {
  return (
    <>
      <div className="container mt-5">
        <h4 className="text-start">Data hasil perhitungan produk</h4>
        <div className="">
          <div className="text-start">
            <Button className="btn btn-danger mb-4">Kosongkan Tabel</Button>
          </div>
          <div className="me-5">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Kode</th>
                  <th scope="col">Periode</th>
                  <th scope="col">Daftar Alternatif</th>
                  <th scope="col">Skor</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan={6} scope="row">
                    1
                  </td>
                  <td rowSpan={6}>PO1</td>
                  <td rowSpan={6}>2022</td>
                  <td>Produk 1</td>
                  <td>0.75</td>
                  <td rowSpan={6}>
                    <span>
                      <Button className="btn btn-primary me-3">
                        {" "}
                        <ion-icon
                          id="action-cetak"
                          name="print-outline"
                          size="small"
                        ></ion-icon>{" "}
                        <a href="#">cetak</a>
                      </Button>
                    </span>
                    <span>
                      <Button className="btn btn-danger">
                        {" "}
                        <ion-icon
                          id="action-cetak"
                          name="trash-outline"
                          size="small"
                        ></ion-icon>
                        <a href="#">hapus</a>
                      </Button>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Produk 2</td>
                  <td>0.76</td>
                </tr>
                <tr>
                  <td>Produk 3</td>
                  <td>0.73</td>
                </tr>
                <tr>
                  <td>Produk 4</td>
                  <td>0.78</td>
                </tr>
                <tr>
                  <td>Produk 5</td>
                  <td>0.80</td>
                </tr>
                <tr>
                  <td>Produk 6</td>
                  <td>0.84</td>
                </tr>
                <tr>
                  <td rowSpan={6} scope="row">
                    2
                  </td>
                  <td rowSpan={6}>PO2</td>
                  <td rowSpan={6}>2022</td>
                  <td>Produk 1</td>
                  <td>0.75</td>
                  <td rowSpan={6}>
                    <span>
                      <Button className="btn btn-primary me-3">
                        {" "}
                        <ion-icon
                          id="action-cetak"
                          name="print-outline"
                          size="small"
                        ></ion-icon>{" "}
                        <a href="#">cetak</a>
                      </Button>
                    </span>
                    <span>
                      <Button className="btn btn-danger">
                        {" "}
                        <ion-icon
                          id="action-cetak"
                          name="trash-outline"
                          size="small"
                        ></ion-icon>
                        <a href="#">hapus</a>
                      </Button>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Produk 2</td>
                  <td>0.76</td>
                </tr>
                <tr>
                  <td>Produk 3</td>
                  <td>0.73</td>
                </tr>
                <tr>
                  <td>Produk 4</td>
                  <td>0.78</td>
                </tr>
                <tr>
                  <td>Produk 5</td>
                  <td>0.80</td>
                </tr>
                <tr>
                  <td>Produk 6</td>
                  <td>0.84</td>
                </tr>
                <tr>
                  <td rowSpan={6} scope="row">
                    3
                  </td>
                  <td rowSpan={6}>PO3</td>
                  <td rowSpan={6}>2022</td>
                  <td>Produk 1</td>
                  <td>0.75</td>
                  <td rowSpan={6}>
                    <span>
                      <Button className="btn btn-primary me-3">
                        {" "}
                        <ion-icon
                          id="action-cetak"
                          name="print-outline"
                          size="small"
                        ></ion-icon>{" "}
                        <a href="#">cetak</a>
                      </Button>
                    </span>
                    <span>
                      <Button className="btn btn-danger">
                        {" "}
                        <ion-icon
                          id="action-cetak"
                          name="trash-outline"
                          size="small"
                        ></ion-icon>
                        <a href="#">hapus</a>
                      </Button>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Produk 2</td>
                  <td>0.76</td>
                </tr>
                <tr>
                  <td>Produk 3</td>
                  <td>0.73</td>
                </tr>
                <tr>
                  <td>Produk 4</td>
                  <td>0.78</td>
                </tr>
                <tr>
                  <td>Produk 5</td>
                  <td>0.80</td>
                </tr>
                <tr>
                  <td>Produk 6</td>
                  <td>0.84</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
