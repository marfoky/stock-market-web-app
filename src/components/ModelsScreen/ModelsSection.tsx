import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

const ModelsSection = ({highsNLows, predictions}: any) => {

  const seriesData = [{
    name: 'Predictions',
    data: predictions
  }]
 
  const newCategories1 = Array.from({ length: predictions?.data?.length }, (_, i) => i + 1);

  const chartOptions1: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false
      }
    },
    forecastDataPoints: {
      count: 25
    },
    xaxis: {
      categories: newCategories1,
      
    },
    title: {
      text: "Closing Price",
      style: { fontSize: "15" , fontWeight: '600', fontFamily: 'inherit'},
      align: "left",
    },
    
  };
  

  const newCategories = Array.from({ length: highsNLows[0]?.data?.length }, (_, i) => i + 1);

  const chartOptions2: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false
      }
    },
    forecastDataPoints: {
      count: 14
    },
    xaxis: {
      categories: newCategories,
      
    },
    title: {
      text: "Highs And Lows",
      style: { fontSize: "15" , fontWeight: '600', fontFamily: 'inherit'},
      align: "left",
    },
    
  };
  return (
    <div className="bg-white p-5 rounded-[15px] models">
      <div className="text-[20px] text-center font-bold">Models</div>
      <div id="chart">
        <ReactApexChart
          options={chartOptions1}
          series={seriesData}
          type="line"
          height={380}
        />
        <ReactApexChart
          options={chartOptions2}
          series={highsNLows}
          type="line"
          height={380}
        />
      </div>
    </div>
  );
};

export default ModelsSection;
