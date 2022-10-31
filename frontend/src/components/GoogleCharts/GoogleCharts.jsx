import { Chart } from "react-google-charts";


export const data = [
  ["Contributions", "Value"],
  ["Money", 3],
  ["Services", 2],
  ["Products", 9],
  ["Food", 9],
];
export const options = {
  title: "Pie Chart for Contributions Based on Type",
};

const piecharts = () => {
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
export default piecharts