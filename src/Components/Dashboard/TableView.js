import React from "react";
import { Tab } from "semantic-ui-react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import DataTable from "./DataTable";
import MainCategoriesData from "../Dashboard/MainCategoriesData";
import LinearChart from "./LinearChart";
import groupElementsByMonthAndYear from "../../Data/dataFormatitingFunctions/groupElementsByMonthAndYear";
import "../../StyleSheet/tableView.css";
import formatTabularLine from "../../Data/dataFormatitingFunctions/formatTabularLine";

class TableView extends React.Component {
  constructor(props) {
    super(props);
    this.categories = ["Confirmed", "Recovered", "Deaths"];
    this.state = {
      isLoaded: false,
      open: false,
      selectedValue: "MA",
      globalData: {
        total: "",
        TotalActive: "",
        NewActive: "",
        TotalConfirmed: "",
        NewConfirmed: "",
        TotalDeaths: "",
        NewDeaths: "",
        TotalRecovered: "",
        NewRecovered: "",
      },
      data: [],
      lastUpdateDate: "",
      options: {
        stroke: {
          curve: "smooth",
        },
        colors: ["#007bff", "#19b842", "#f31c2b"],
        chart: {
          id: "mixedChart",
        },
      },
      series: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.getInfosByCountry = this.getInfosByCountry.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.Global) {
            const globalData = {};
            Object.keys(this.state.globalData).forEach(
              (item) => (globalData[item] = result.Global[item])
            );
            globalData.TotalActive =
              result.Global.TotalConfirmed -
              result.Global.TotalRecovered -
              result.Global.TotalDeaths;

            globalData.NewActive =
              result.Global.NewConfirmed -
              result.Global.NewRecovered -
              result.Global.NewDeaths;

            if (result.Countries) {
              this.setState({
                isLoaded: true,
                lastUpdateDate: new Date(result.Date).toUTCString("en-US"),
                globalData: { ...globalData },
                data: formatTabularLine(result),
              });
            }
          }
          this.getInfosByCountry(this.state.selectedValue);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  getInfosByCountry(countryName) {
    fetch("https://api.covid19api.com/dayone/country/" + countryName)
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.length === 0) {
            this.setState({ open: true });
          }
          let groupedElements = groupElementsByMonthAndYear(result);
          let series = this.categories.map((item) => ({
            name: item,
            data: [],
          }));
          groupedElements.forEach((item) => {
            series.forEach((seriesElement) => {
              seriesElement.data.push({
                y: item[seriesElement.name],
                x: item.xaxis,
              });
            });
          });
          this.setState({
            series: series,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            open: true,
            error,
          });
        }
      );
  }

  handleClick = (event) => {
    this.getInfosByCountry(event.target.value);
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const panes = [
      {
        menuItem: "Tabular",
        render: () => (
          <DataTable
            data={this.state.data}
            lastUpdateDate={this.state.lastUpdateDate}
          />
        ),
      },
      {
        menuItem: "Linear Chart",
        render: () => (
          <LinearChart
            options={this.state.options}
            series={this.state.series}
            handleClick={this.handleClick}
            handleClose={this.handleClose}
            open={this.state.open}
          />
        ),
      },
      {
        menuItem: "Map",
        render: () => <div></div>,
      },
    ];
    return (
      <div id={"dataTable"}>
        <Navbar />
        <section id={"categoriesDataPane"}>
          <MainCategoriesData {...this.state.globalData} />
        </section>
        <section id={"myFlexComponent"}>
          <Tab
            id={"myTabs"}
            menu={{ secondary: true, pointing: true }}
            panes={panes}
          />
        </section>
        <Footer />
      </div>
    );
  }
}

export default TableView;
