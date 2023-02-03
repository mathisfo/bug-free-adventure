import "chartkick/chart.js";
import { AreaChart } from "react-chartkick";

const HistoryGraph = () => {
  return (
    <AreaChart
      data={{
        "2021-01-01": 3,
        "2021-01-02": 6,
        "2021-01-03": 1,
        "2021-01-04": 2,
        "2021-01-05": 5,
        "2021-01-06": 9,
      }}
      width="800px"
      height="400px"
      color="#000000"
    />
  );
};

export default HistoryGraph;
