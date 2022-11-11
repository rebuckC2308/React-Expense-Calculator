import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  const valueArr = dataPoints.map((data) => data.value);
  const totalMax = Math.max(...valueArr);

  return (
    <div className="chart">
      {dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          maxValue={totalMax}
          label={datapoint.label}
          value={datapoint.value}
        />
      ))}
    </div>
  );
};

export default Chart;
