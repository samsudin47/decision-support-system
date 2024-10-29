export default function Perangkingan() {
  return (
    <>
      <div className="my-5">
        <h4 className="text-start mb-4">7. Perangkingan</h4>
        <div className="me-5">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Nama Alternatif</th>
                <th scope="col">Nilai Preferensi</th>
                <th scope="col">Rangking</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Produk 1</td>
                <td>0.3</td>
                <td>0.2</td>
              </tr>
              <tr>
                <td>Produk 2</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Produk 3</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Produk 4</td>
                <td>0</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Produk 5</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Produk 6</td>
                <td>1</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
