import SideBar from "../components/SideBar";
import HalamanTabelHasilKeputusan from "../components/HalamanTableHasilKeputusan";

export default function DataHasilKeputusan() {
  return (
    <>
      <div className="bg-white text-center">
        <div className="row">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9">
            <HalamanTabelHasilKeputusan />
          </div>
        </div>
      </div>
    </>
  );
}
