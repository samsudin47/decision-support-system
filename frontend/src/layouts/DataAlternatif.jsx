import SideBar from "../components/SideBar";
import Alternatif from "../components/Alternatif";

export default function DataAlternatif() {
  return (
    <>
      <div className="bg-white text-center">
        <div className="row">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9">
            <Alternatif />
          </div>
        </div>
      </div>
    </>
  );
}
