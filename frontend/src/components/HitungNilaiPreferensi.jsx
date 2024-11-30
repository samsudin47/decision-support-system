/* eslint-disable react/prop-types */
export default function HitungNilaiPreferensi({
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

  // Hitung nilai normalisasi
  const normalizedValues = alternatives.map((alternative) => {
    const normalized = {};
    normalized.alternative = alternative.name;
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
    normalized.preferensi = normalized.values.reduce(
      (acc, val) => acc + val.weightedValue,
      0
    ); // Jumlahkan nilai preferensi
    return normalized;
  });

  return (
    <div className="my-5">
      <h4 className="text-start mb-4">
        4. Menghitung Nilai Preferensi & Hasil Preferensi
      </h4>
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
              <th scope="col">Nilai Preferensi</th>
            </tr>
          </thead>
          <tbody>
            {normalizedValues.map((item, index) => (
              <tr key={index}>
                <td scope="row">{index + 1}</td>
                <td>{item.alternative}</td>
                {item.values.map((val, idx) => (
                  <td key={idx}>{val.normalizedValue.toFixed(2)}</td>
                ))}
                <td>{item.preferensi.toFixed(2)}</td>
              </tr>
            ))}
            <tr>
              <th scope="row" colSpan={2}>
                Bobot Kriteria
              </th>
              {criteria.map((crit) => (
                <td key={crit.id}>{crit.bobot}</td>
              ))}
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
