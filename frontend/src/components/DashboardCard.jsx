// eslint-disable-next-line no-unused-vars
import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { PieChart } from "@mui/x-charts/PieChart";

export default function DashboardCard() {
  return (
    <>
      <div className="container text-start pe-5 mt-5 grid gap-3">
        <div className="row align-items-center">
          <div className="col-md p-2 g-col-6">
            <div className="card bg-success text-light">
              <div className="card-body">
                <h5 className="card-title">Data Alternatif</h5>
                <ion-icon name="bookmarks-outline" size="large"></ion-icon>
                <div>
                  <a href="#" className="card-link ">
                    Card link
                  </a>
                  <a href="#" className="card-link ">
                    Another link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md p-2 g-col-6">
            <div className="card bg-danger text-light">
              <div className="card-body">
                <h5 className="card-title">Data Kriteria</h5>
                <ion-icon name="server-sharp" size="large"></ion-icon>
                <div>
                  <a href="#" className="card-link ">
                    Card link
                  </a>
                  <a href="#" className="card-link ">
                    Another link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md p-2 g-col-6">
            <div className="card bg-info text-light">
              <div className="card-body">
                <h5 className="card-title">Hasil Keputusan</h5>
                <ion-icon name="print-sharp" size="large"></ion-icon>
                <div>
                  <a href="#" className="card-link ">
                    Card link
                  </a>
                  <a href="#" className="card-link ">
                    Another link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md p-2 g-col-6">
            <div className="card bg-warning text-light">
              <div className="card-body">
                <h5 className="card-title">Data Users</h5>
                <ion-icon name="people-sharp" size="large"></ion-icon>
                <div>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md p-2 g-col-6">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider>
          </div>
          <div className="col-md p-2 g-col-6">
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: "series A" },
                    { id: 1, value: 15, label: "series B" },
                    { id: 2, value: 20, label: "series C" },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
        </div>
      </div>
    </>
  );
}
