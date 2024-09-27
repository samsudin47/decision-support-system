import SideBar from "../components/SideBar";

export default function PageLayout() {
  return (
    <>
      <div className="bg-white text-center">
        <div className="row">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9">
            <h1>Ini Bagian Data</h1>
          </div>
        </div>
      </div>
    </>
  );
}
