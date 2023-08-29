import CandleStickChart from "../components/ModelsScreen/CandleStickChart";
import Consolidations from "../components/ModelsScreen/Consolidations";
import IndicatorsSection from "../components/ModelsScreen/IndicatorsSection";
import ModelsSection from "../components/ModelsScreen/ModelsSection";
import Nav from "../components/shared/Nav/Nav";
import { useState, useLayoutEffect, useEffect } from 'react'
import { getCandleStickData,  getPredictions } from "../services/api";
import { formatDate } from "../services/helpers";

const ModelsPage = () => {
  const [chartData, setChartData] = useState([]);
  const [rsiData, setRsiData] = useState([])
  const [timeCategoryData, setTimeCategoryData] = useState([])
  const [bollingerHigh, setBollingerHigh] = useState([])
  const [bollingerLow, setBollingerLow] = useState([])
  const [maDaily, setMaDaily] = useState([])
  const [predictions, setPredictions] = useState<any>([])
  const [highsNLows, setHighsNLows] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)





  const getData = async () => {
    try {
      setIsLoading(true)
    const apiUrl = 'http://localhost:5000'
    await getCandleStickData(apiUrl).then((res) => {
      const data = res.slice(res.length - 200)
      const formattedData = data.map((item: any) => {
        const date = new Date(item.time);
        date.setDate(date.getDate() + 9);
        
        return {
          x: date,
          y: [item.open, item.high, item.low, item.close]
        };
      });
    setChartData(formattedData);
    const rsiData = data.map((item: any) => item.RSI)
    setRsiData(rsiData);
    const timeCategoryData = data.map((item: any) => formatDate(item.time))
    setTimeCategoryData(timeCategoryData)
    const maDailyData = data.map((item: any) => item.MA_daily)
    setMaDaily(maDailyData)
    
    const bollingerLow = data.map((item: any) => item.BB_Low)
    setBollingerLow(bollingerLow)
    const bollingerHigh = data.map((item: any) => item.BB_High)
    setBollingerHigh(bollingerHigh)
    })

    await getPredictions(apiUrl + '/predict').then((res) => {

      const highs = res.highsNlows.map((item: any) => item[0])
      const lows = res.highsNlows.map((item: any) => item[1])
      const predictions = JSON.parse(res.predictions)
      const slicedPredictions = predictions.slice(predictions.length - 100)
      let predictionsArr = []
      for(let i = 0; i < slicedPredictions.length ; i++){
        predictionsArr.push(slicedPredictions[i].Predictions)
      }
      setPredictions(predictionsArr)
      
      setHighsNLows([
        {
          name: 'Highs',
          data: highs
        },
        {
          name: 'Lows',
          data: lows
        }
      ])
    })
  }
  catch(error){
    alert(error)
  }
  finally {
    setIsLoading(false)
  }
    
  }

  useEffect(()=> {
    console.log('is loading changed to ', isLoading)
  }, [isLoading])

  useLayoutEffect(()=>{
    getData()
    const interval = setInterval(() => {
      getData()
    }, 600000)

    return () => clearInterval(interval)
  } , [])

  return (
    <div>
      <Nav />
      {isLoading ? <div className="flex h-[90vh] items-center justify-center">Loading...</div> : <div className="grid-container bg-[#f8f8fa]">
        <CandleStickChart chartData={chartData} setChartData={setChartData}/>
        <ModelsSection highsNLows={highsNLows} predictions={predictions}/>
        <IndicatorsSection 
        rsiData={rsiData} 
        timeCategoryData={timeCategoryData} 
        maDaily={maDaily}
        bollingerLow={bollingerLow}
        bollingerHigh={bollingerHigh}
        />
        <Consolidations />
      </div>}
      </div>
  );
};

export default ModelsPage;
