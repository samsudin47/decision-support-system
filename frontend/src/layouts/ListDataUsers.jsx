import SideBar from "../components/SideBar";
import DataUser from "../components/DataUser";

export default function ListDataUsers() {
  return (
    <>
      <div className="bg-white text-center">
        <div className="row">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9">
            <DataUser />
          </div>
        </div>
      </div>
    </>
  );
}
