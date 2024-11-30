export default function HitungTotalNilaiPreferensi() {
  return (
    <>
      <div className="my-5">
        <h4 className="text-start mb-4">
          5. Menghitung Total Nilai Preferensi
        </h4>
        <div className="me-5">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Alternatif</th>
                <th scope="col">Harga</th>
                <th scope="col">Channel (Filter Suara)</th>
                <th scope="col">Microphone</th>
                <th scope="col">Populer</th>
                <th scope="col">Daya Tahan</th>
                <th scope="col">Total Nilai Preferensi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">1</td>
                <td>Produk 1</td>
                <td>0.2</td>
                <td>0.3</td>
                <td>0.2</td>
                <td>0.2</td>
                <td>0.2</td>
                <td>0.91</td>
              </tr>
              <tr>
                <td scope="row">2</td>
                <td>Produk 2</td>
                <td>0.2</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>0.91</td>
              </tr>
              <tr>
                <td scope="row">3</td>
                <td>Produk 3</td>
                <td>1</td>
                <td>0.2</td>
                <td>0</td>
                <td>1</td>
                <td>1</td>
                <td>0.91</td>
              </tr>
              <tr>
                <td scope="row">4</td>
                <td>Produk 4</td>
                <td>1</td>
                <td>0</td>
                <td>0.2</td>
                <td>0</td>
                <td>1</td>
                <td>0.91</td>
              </tr>
              <tr>
                <td scope="row">5</td>
                <td>Produk 5</td>
                <td>0</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>0.91</td>
              </tr>
              <tr>
                <td scope="row">6</td>
                <td>Produk 6</td>
                <td>0.3</td>
                <td>0.5</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>0.91</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
