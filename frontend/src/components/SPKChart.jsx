/* eslint-disable react/prop-types */
import { PieChart } from "@mui/x-charts/PieChart";

const SPKChart = ({ data }) => {
  return (
    <div className="chart-container">
      <PieChart
        series={[
          {
            data: data,
          },
        ]}
        width={800}
        height={200}
      />
    </div>
  );
};

export default SPKChart;
