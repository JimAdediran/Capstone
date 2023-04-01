import Chart from "../../components/GoogleCharts/GoogleCharts"
import Chartregion from "../../components/GoogleCharts/GoogleChartsRegion"
import "./ChartsPage.css"

const ChartsPage = () =>{

return (
    <div className="charts">
        <a>Contribution data charts:</a>
        <Chart />
        <Chartregion />
    </div>
)
}

export default ChartsPage