import SideBar from "../components/SideBar";
import HalamanPenilaianAlternatif from "../components/HalamanPenilaianAlternatif";

export default function PenilaianAlternatif() {
  return (
    <>
      <div className="bg-white text-center">
        <div className="row">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9">
            <HalamanPenilaianAlternatif />
          </div>
        </div>
      </div>
    </>
  );
}
