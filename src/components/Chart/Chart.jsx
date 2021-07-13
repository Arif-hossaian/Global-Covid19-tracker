import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
//npm install --save chart.js
import { fetchDailyData } from "../../Api";
import styles from "./chart.module.css";

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    // console.log(dailyData);
    fetchAPI();
  }, []);
  const lineChart = dailyData.length ? (
    //if dailyData.length means there is some values and it is availabe then execute <Line /> otherwise null
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
