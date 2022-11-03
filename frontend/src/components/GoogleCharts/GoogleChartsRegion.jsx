import { Chart } from "react-google-charts";


export const data = [
  ["Contributions", "Region"],
  ["East", 19],
  ["West", 1],
  ["South", 1],
  ["Alaska", 2],
  ["Hawaii", 1],
  ["Midwest", 1],
];
export const options = {
  title: "Pie Chart for Contributions Based on Region",
};

const piechartsRegion = () => {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  )
}
export default piechartsRegion