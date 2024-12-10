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

  const getMinValueForCriterion = (kriteriaId) => {
    const values = penilaianAlternatif
      .filter((item) => item.kriteriaId === kriteriaId)
      .map((item) => item.nilai);
    return Math.min(...values);
  };

  // Hitung nilai preferensi
  const calculatedPreferences = alternatives.map((alternative) => {
    let totalPreference = 0; // Akumulasi nilai preferensi
    const normalizedValues = criteria.map((crit) => {
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

    return {
      alternative: alternative.name,
      normalizedValues,
      preferensi: totalPreference,
    };
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
            {calculatedPreferences.map((item, index) => (
              <tr key={index}>
                <td scope="row">{index + 1}</td>
                <td>{item.alternative}</td>
                {item.normalizedValues.map((val, idx) => (
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
                <td key={crit.id}>{(crit.bobot / 10).toFixed(1)}</td>
              ))}
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
