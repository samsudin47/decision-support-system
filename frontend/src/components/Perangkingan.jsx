/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
export default function Perangkingan({
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

  // Hitung nilai normalisasi dan preferensi
  const normalizedValues = alternatives.map((alternative) => {
    const normalized = {};
    normalized.alternative = alternative.name;

    // Menghitung nilai normalisasi dan weightedValue untuk setiap kriteria
    normalized.values = criteria.map((crit) => {
      const nilai = penilaianAlternatif.find(
        (item) =>
          item.alternativeId === alternative.id && item.kriteriaId === crit.id
      )?.nilai;

      const maxNilai = getMaxValueForCriterion(crit.id);
      const nilaiNormalisasi = nilai ? nilai / maxNilai : 0;

      return {
        kriteriaId: crit.id,
        normalizedValue: nilaiNormalisasi,
        weightedValue: nilaiNormalisasi * crit.bobot, // Mengalikan dengan bobot
      };
    });

    // Menghitung nilai preferensi dengan menjumlahkan weightedValue
    normalized.preferensi = normalized.values.reduce(
      (acc, val) => acc + val.weightedValue,
      0
    );

    return normalized;
  });

  // Melakukan perangkingan berdasarkan nilai preferensi secara menurun
  const sortedValues = normalizedValues.sort(
    (a, b) => b.preferensi - a.preferensi
  );

  return (
    <div className="my-5">
      <h4 className="text-start mb-4">5. Perangkingan</h4>
      <div className="me-5">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Alternatif</th>
              <th scope="col">Nilai Preferensi</th>
              <th scope="col">Rangking</th>
            </tr>
          </thead>
          <tbody>
            {sortedValues.map((item, index) => (
              <tr key={index}>
                <td scope="row">{index + 1}</td>
                <td>{item.alternative}</td>
                <td>{item.preferensi.toFixed(2)}</td>
                <td>{index + 1}</td>{" "}
                {/* Menampilkan rangking berdasarkan urutan */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
