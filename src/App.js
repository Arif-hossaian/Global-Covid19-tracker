import React, { Component } from "react";
import { Cards, CountryPicker, Chart } from "./components";
import {Typography, Box} from "@material-ui/core"
import styles from "./styles/App.module.css";
import { fetchData } from "./Api/index";

export default class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }
  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Box className={styles.header}>COVID-19 TRACKER</Box>
        <Typography className={styles.lastUpdated}>Last Updated: {data.lastUpdate && new Date(data.lastUpdate).toDateString()}</Typography>
        <img style={{width:"350px"}} src="https://i.ibb.co/F5cGV71/COVID19.jpg" alt="covid"/>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}
