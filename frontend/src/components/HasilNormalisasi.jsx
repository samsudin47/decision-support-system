/* eslint-disable react/prop-types */
export default function HasilNormalisasi({
  penilaianAlternatif,
  alternatives,
  criteria,
}) {
  // Fungsi untuk menghitung nilai maksimal untuk setiap kriteria
  const getMaxValueForCriterion = (kriteriaId) => {
    const values = penilaianAlternatif
      .filter((item) => item.kriteriaId === kriteriaId)
      .map((item) => item.nilai);
    return Math.max(...values);
  };

  return (
    <div className="my-5">
      <h4 className="text-start mb-4">3. Hasil Normalisasi</h4>
      <div className="me-5">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Alternatif</th>
              {criteria.map((crit) => (
                <th key={crit.id} scope="col">
                  {crit.kriteriaId}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {alternatives.map((alternative, index) => {
              // Ambil data penilaianAlternatif untuk setiap produk dan kriteria
              const penilaian = penilaianAlternatif.filter(
                (item) => item.alternativeId === alternative.id
              );

              return (
                <tr key={alternative.id}>
                  <td scope="row">{index + 1}</td>
                  <td>{alternative.name}</td>
                  {criteria.map((crit) => {
                    // Temukan nilai untuk kriteria tertentu
                    const nilai = penilaian.find(
                      (item) => item.kriteriaId === crit.id
                    )?.nilai;

                    // Hitung nilai normalisasi
                    const maxNilai = getMaxValueForCriterion(crit.id);
                    let nilaiNormalisasi = nilai
                      ? (nilai / maxNilai).toFixed(2)
                      : "-";

                    if (
                      nilaiNormalisasi !== "-" &&
                      parseFloat(nilaiNormalisasi) % 1 === 0
                    ) {
                      nilaiNormalisasi = parseInt(nilaiNormalisasi).toString();
                    } else if (
                      nilaiNormalisasi !== "-" &&
                      nilaiNormalisasi.endsWith("0")
                    ) {
                      nilaiNormalisasi =
                        parseFloat(nilaiNormalisasi).toString();
                    }

                    return <td key={crit.id}>{nilaiNormalisasi}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
