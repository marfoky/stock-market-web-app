import { ApexOptions } from "apexcharts";
import { useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const IndicatorsSection = ({rsiData, timeCategoryData, maDaily,  bollingerLow, bollingerHigh}: any) => {

  useEffect(()=> {
    console.log('rsi data ', rsiData)
  }, [])
  const seriesData= [
   
    {
      name: "Bollinger Bands High",
      data: bollingerHigh,
    },
    {
      name: "MA Daily", 
      data: maDaily
    },
    {
      name: "Bollinger Bands Low",
      data: bollingerLow,
    }
  ];

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [5, 7, 5],
      curve: "straight",
      dashArray: [0, 8, 5],
    },
    title: {
      text: "Bollinger Bands",
      align: "left",
    },
    legend: {
      tooltipHoverFormatter: function (val: any, opts: any) {
        return (
          val +
          " - " +
          opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
          ""
        );
      },
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6,
      },
    },
    xaxis: {
      categories: timeCategoryData
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val: any) {
              return val
            },
          },
        },
        {
          title: {
            formatter: function (val: any) {
              return val
            },
          },
        },
        {
          title: {
            formatter: function (val: any) {
              return val;
            },
          },
        },
      ],
    },
    grid: {
      borderColor: "#f1f1f1",
    },
  };
  return (
    <div className="bg-white p-5 rounded-[15px] indicators">
      <div className="text-[20px] text-center font-bold">Indicators</div>
      <ReactApexChart
        options={options}
        series={seriesData}
        type="line"
        height={400}
      />
    </div>
  );
};

export default IndicatorsSection;
