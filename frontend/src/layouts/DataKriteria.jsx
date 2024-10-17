import SideBar from "../components/SideBar";
import Kriteria from "../components/Kriteria";

export default function DataKriteria() {
  return (
    <>
      <div className="bg-white text-center">
        <div className="row">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9">
            <Kriteria />
          </div>
        </div>
      </div>
    </>
  );
}
