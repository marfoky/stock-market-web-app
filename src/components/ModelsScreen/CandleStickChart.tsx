import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import dayjs from "dayjs";
import "../../App.css";


function CandleStickChart({chartData}: any) {
 
  const series = [
    {
      name: "candle",
      data: chartData
    }
  ];



  const options: ApexOptions = {
    chart: {
      height: 550,
      width: 100,
      type: "candlestick",
      toolbar: {
        show: true,
      },
    },
    series: [{
      data: chartData
  }],
    grid: {
      strokeDashArray: 2000,
    },
    title: {
      text: "CandleStick Chart Of BTCUSD",
      style: { fontSize: "20", fontWeight: "600", fontFamily: "inherit" },
      align: "left",
    },
    tooltip: {
      enabled: true,
      cssClass: "apex-tooltip",
    },
    xaxis: {
      type: "category",
      labels: {
        formatter: function (val: any) {
          return dayjs(val).format("MMM DD HH:mm");
        },
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
    annotations: {
      
    }
  };
  return (
    <div id="chart" className="bg-white p-5 rounded-[15px] candlestick-chart">
      <div className="text-[20px] text-center font-bold">BTCUSD Chart</div>

      <ReactApexChart
        options={options}
        series={series}
        type="candlestick"
        height={550}
      />
    </div>
  );
}

export default CandleStickChart;
