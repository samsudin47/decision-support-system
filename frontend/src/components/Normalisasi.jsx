/* eslint-disable react/prop-types */
export default function Normalisasi({
  penilaianAlternatif,
  alternatives,
  criteria,
}) {
  // Fungsi untuk menghitung nilai maksimal untuk setiap kriteria
  const getMaxValueForCriterion = (kriteriaId) => {
    const values = penilaianAlternatif
      .filter((item) => item.kriteriaId === kriteriaId)
      .map((item) => item.nilai);
    console.log(`Nilai minimal untuk kriteria ${kriteriaId}:`, values);
    return Math.max(...values);
  };

  // fungsi menghitung nilai minimal untuk setiap kriteria
  const getMinValueForCriterion = (kriteriaId) => {
    const values = penilaianAlternatif
      .filter((item) => item.kriteriaId === kriteriaId)
      .map((item) => item.nilai);
    return Math.min(...values);
  };

  return (
    <div className="my-5">
      <h4 className="text-start mb-4">2. Menghitung Nilai Normalisasi</h4>
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
                    let nilaiNormalisasi = "-";
                    if (nilai) {
                      if (crit.kriteriaId === "Harga") {
                        // perhitungan khusus untuk kriteria harga min/nilai
                        const minNilai = getMinValueForCriterion(crit.id);
                        nilaiNormalisasi = (minNilai / nilai).toFixed(2);
                      } else {
                        // perhitungan normal
                        const maxNilai = getMaxValueForCriterion(crit.id);
                        nilaiNormalisasi = (nilai / maxNilai).toFixed(2);
                      }
                    }
                    // Menghapus trailing .00 jika hasilnya bilangan bulat
                    if (
                      nilaiNormalisasi !== "-" &&
                      parseFloat(nilaiNormalisasi) % 1 === 0
                    ) {
                      nilaiNormalisasi = parseInt(nilaiNormalisasi).toString();
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
