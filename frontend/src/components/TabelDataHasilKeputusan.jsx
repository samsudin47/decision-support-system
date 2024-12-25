import Button from "react-bootstrap/esm/Button";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import SPKChart from "./SPKChart";

export default function TabelDataHasilKeputusan() {
  const [penilaianAlternatif, setPenilaianAlternatif] = useState([]);
  const [alternatives, setAlternatives] = useState([]);
  const [criteria, setCriteria] = useState([]);
  const [userName, setUsername] = useState("");

  useEffect(() => {
    const userName = localStorage.getItem("username");
    if (userName) {
      setUsername(userName);
    }
  }, []);

  // ambil data penilaianAlternatif dari backend
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/api/cms/alternatifScore"
        );
        setPenilaianAlternatif(response.data);
      } catch (error) {
        console.error("Error fetching penilaianAlternatif data:", error);
      }
    };

    loadData();
  }, []);

  // Ambil data alternatives dan criteria
  useEffect(() => {
    const loadAlternatives = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/api/cms/alternatives"
        );
        setAlternatives(response.data);
      } catch (error) {
        console.error("Error fetching alternatives:", error);
      }
    };

    const loadCriteria = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/api/cms/criteria"
        );
        setCriteria(response.data);
      } catch (error) {
        console.error("Error fetching criteria:", error);
      }
    };

    loadAlternatives();
    loadCriteria();
  }, []);

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
    let totalPreference = 0;
    const normalized = {};
    normalized.alternative = alternative.name;
    normalized.values = criteria.map((crit) => {
      const nilai = penilaianAlternatif.find(
        (item) =>
          item.alternativeId === alternative.id && item.kriteriaId === crit.id
      )?.nilai;

      let normalizedValue = 0;

      if (crit.kriteriaId === "Harga") {
        const minNilai = getMinValueForCriterion(crit.id);
        normalizedValue = nilai ? minNilai / nilai : 0;
      } else {
        const maxNilai = getMaxValueForCriterion(crit.id);
        normalizedValue = nilai ? nilai / maxNilai : 0;
      }

      const weightedValue = normalizedValue * (crit.bobot / 10);
      totalPreference += weightedValue;

      return {
        kriteriaId: crit.id,
        normalizedValue: normalizedValue,
        weightedValue: weightedValue,
      };
    });

    normalized.preferensi = totalPreference;
    return normalized;
  });

  const sortedValues = normalizedValues.sort(
    (a, b) => b.preferensi - a.preferensi
  );

  const tableRef = useRef();

  const generatePDF = async () => {
    const element = tableRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    // eslint-disable-next-line no-unused-vars
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pageWidth - 20;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);

    pdf.save("data-hasil-keputusan.pdf");
  };

  const pieChartData = sortedValues.map((item, index) => {
    const totalPreferensi = sortedValues.reduce(
      (sum, val) => sum + val.preferensi,
      0
    );
    const percentage = ((item.preferensi / totalPreferensi) * 100).toFixed(2); // Hitung persentase

    return {
      id: index,
      value: item.preferensi,
      label: `${item.alternative} (${percentage}%)`, // Tambahkan persentase ke label
    };
  });

  return (
    <>
      <div className="container mt-5">
        <h4 className="text-start fw-bold">Hasil Akhir</h4>
        <div className="me-5 mt-3">
          <div className="text-end mb-3">
            <Button className="btn btn-primary" onClick={generatePDF}>
              <ion-icon
                id="action-cetak"
                name="print-outline"
                size="small"
              ></ion-icon>{" "}
              Cetak PDF
            </Button>
          </div>
          <div>
            <div className="table table-striped" ref={tableRef}>
              <h1 className="text-start text-primary fw-bold">
                SOUND<span className="text-success">Life</span>
              </h1>
              <h5 className="mb-3 text-decoration-underline">
                Data hasil perhitungan produk
              </h5>
              <table className="table table-striped text-start w-50 ">
                <tbody>
                  <tr>
                    <td className="w-25 bg-primary text-white fw-semibold lead">
                      Nama :
                    </td>
                    <td className="bg-primary text-white text-start fw-semibold lead">
                      {userName}
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Kode</th>
                    <th scope="col">Daftar Alternatif</th>
                    <th scope="col">Skor</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedValues.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>PO{index + 1}</td>
                      <td>{item.alternative}</td>
                      <td>{item.preferensi.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h2 className="text-start mt-5">Kesimpulan :</h2>
              <p className="text-start lead">
                Berdasarkan tabel hasil perhitungan skor, dapat disimpulkan
                bahwa peringkat alat bantu dengar yang sesuai dengan kebutuhan
                Anda adalah sebagai berikut:
              </p>
              <ul className="lead text-start list-group " start={1}>
                {sortedValues.map((item, index) => (
                  <li
                    key={index}
                    className={`list-group-item bg-primary text-white fs-5 py-3 ${
                      index === 0 ? "text-dark" : ""
                    }`}
                  >
                    <span className="fw-bold rounded-2">
                      {item.alternative}
                    </span>{" "}
                    menempati peringkat {index + 1} dengan skor tertinggi yaitu
                    ={" "}
                    <span className="fw-bold rounded-2">
                      {item.preferensi.toFixed(2)}
                    </span>
                    .
                  </li>
                ))}
              </ul>
              <h5 className="text-start my-5">
                Dengan demikian,{" "}
                <span className="fw-bold text-decoration-underline">
                  {sortedValues[0]?.alternative}{" "}
                </span>
                menjadi pilihan paling direkomendasikan untuk alat bantu dengar
                di SoundLife.
              </h5>
              <h5>Diagram Chart :</h5>
              <SPKChart data={pieChartData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
