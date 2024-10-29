import SideBar from "../components/SideBar";
import HalamanProsesHitung from "../components/HalamanProsesHitung";

export default function ProsesHitung() {
  return (
    <>
      <div className="bg-white text-center">
        <div className="row">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9">
            <HalamanProsesHitung />
          </div>
        </div>
      </div>
    </>
  );
}
