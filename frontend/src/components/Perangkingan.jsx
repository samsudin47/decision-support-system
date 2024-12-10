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

  const getMinValueForCriterion = (kriteriaId) => {
    const values = penilaianAlternatif
      .filter((item) => item.kriteriaId === kriteriaId)
      .map((item) => item.nilai);
    return Math.min(...values);
  };

  // Hitung nilai normalisasi dan preferensi
  const normalizedValues = alternatives.map((alternative) => {
    let totalPreference = 0; // Akumulasi nilai preferensi
    const normalized = {};
    normalized.alternative = alternative.name;
    normalized.values = criteria.map((crit) => {
      const nilai = penilaianAlternatif.find(
        (item) =>
          item.alternativeId === alternative.id && item.kriteriaId === crit.id
      )?.nilai;

      let normalizedValue = 0;

      if (crit.kriteriaId === "Harga") {
        // Menggunakan nilai minimum untuk kriteria "Harga"
        const minNilai = getMinValueForCriterion(crit.id);
        normalizedValue = nilai ? minNilai / nilai : 0;
      } else {
        // Menggunakan nilai maksimum untuk kriteria lainnya
        const maxNilai = getMaxValueForCriterion(crit.id);
        normalizedValue = nilai ? nilai / maxNilai : 0;
      }

      // Hitung nilai berbobot
      const weightedValue = normalizedValue * (crit.bobot / 10);

      // Tambahkan ke total nilai preferensi
      totalPreference += weightedValue;

      return {
        kriteriaId: crit.id,
        normalizedValue: normalizedValue,
        weightedValue: weightedValue,
      };
    });

    normalized.preferensi = totalPreference; // Jumlahkan semua weightedValue
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
                <td>{index + 1}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
