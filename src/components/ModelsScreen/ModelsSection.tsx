import { ApexOptions } from "apexcharts";
import { useState } from "react";
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
      text: "Highs And Lows",
      style: { fontSize: "15" , fontWeight: '600', fontFamily: 'inherit'},
      align: "left",
    },
    
  };
  const chartOptions: ApexOptions = {
    chart: {
      type: "area",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    title: {
      text: "Stock Price Movement",
      style: { fontSize: "15" , fontWeight: '600', fontFamily: 'inherit'},
      align: "left",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0);
        },
      },
    },
  };

  const [seriesData2, setSeriesData2] = useState([
    {
      name: "Sales",
      data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
    },
  ]);

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
