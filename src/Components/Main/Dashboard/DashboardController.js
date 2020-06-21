import React from "react";
import ReactTooltip from "react-tooltip";
import { Tab } from "semantic-ui-react";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";
import TabularView from "./TabularView";
import LinearChartView from "./LinearChartView";
import MapView from "./MapView";
import MainCategoriesData from "./MainCategoriesData";
import { CircularProgress, Backdrop } from "@material-ui/core/";
import formatGlobalData from "../../../Data/formattingFunctions/formatGlobalData";
import formatTooltipContent from "../../../Data/formattingFunctions/formatTooltipContent";
import formatTabularLine from "../../../Data/formattingFunctions/formatTabularLine";
import getInfosByCountry from "../../../Data/formattingFunctions/getDataByCountry";
import "../../../StyleSheet/Dashboard.css";

class DashboardController extends React.Component {
  constructor(props) {
    super(props);
    this.categories = ["Confirmed", "Recovered", "Deaths"];
    this.state = {
      selectedCountry: "",
      content: { Population: "", Confirmed: "", Recovered: "", Deaths: "" },
      isLoaded: false,
      open: false,
      selectedValue: "AU",
      globalData: {
        total: "",
        TotalActive: "",
        TotalConfirmed: "",
        TotalDeaths: "",
        TotalRecovered: "",
      },
      data: [],
      series: [],
      lastUpdateDate: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleOpenAndClose = this.handleOpenAndClose.bind(this);
    this.setSeries = this.setSeries.bind(this);
  }

  componentDidMount() {
    this.handleOpenAndClose();
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.Global) {
            if (result.Countries) {
              this.setState({
                isLoaded: true,
                lastUpdateDate: new Date(result.Date).toUTCString("en-US"),
                globalData: formatGlobalData(result, this.state.globalData),
                data: formatTabularLine(result),
              });
            }
          }
          getInfosByCountry(
            this.setSeries,
            this.state.selectedValue,
            this.categories
          );
          this.handleOpenAndClose();
        },
        (error) => {
          this.setState({
            isLoaded: true,
            open: false,
            error,
          });
        }
      );
  }
  handleClick = (event) => {
    this.setState({ selectedCountry: event.target.value });
    getInfosByCountry(this.setSeries, event.target.value, this.categories);
  };
  handleOpenAndClose = () => {
    document.querySelector("#dashboard").classList.toggle("stretch");
    this.setState((prevState) => ({ open: !prevState.open }));
  };
  setSeries = (values) => {
    this.setState({ series: values });
  };
  setContent = (countryName, data) => {
    this.setState({
      selectedCountry: countryName ? countryName : "",
      content: formatTooltipContent(data),
    });
  };

  render() {
    const panes = [
      {
        menuItem: "Tabular",
        render: () => (
          <TabularView
            id="dataTable"
            data={this.state.data}
            lastUpdateDate={this.state.lastUpdateDate}
          />
        ),
      },
      {
        menuItem: "Linear Chart",
        render: () => (
          <LinearChartView
            id={"linearChart"}
            options={{
              stroke: {
                curve: "smooth",
              },
              colors: ["#007bff", "#19b842", "#f31c2b"],
              chart: {
                id: "mixedChart",
              },
            }}
            selectedValue={this.state.selectedValue}
            series={this.state.series}
            handleClick={this.handleClick}
            handleClose={this.handleClose}
            open={this.state.open}
          />
        ),
      },
      {
        menuItem: "Map",
        render: () => (
          <div id={"reactMapChart"}>
            <MapView
              setTooltipContent={this.setContent}
              data={this.state.data}
            />
            {this.state.selectedCountry && (
              <ReactTooltip className={"mapTooltip"}>
                <h6>{this.state.selectedCountry}</h6>
                {Object.keys(this.state.content).length > 0
                  ? Object.keys(this.state.content).map((item) => (
                      <div key={item}>
                        {item}: {this.state.content[item].toLocaleString()}
                      </div>
                    ))
                  : "Not Found"}
              </ReactTooltip>
            )}
          </div>
        ),
      },
    ];
    return (
      <div id={"dashboard"}>
        <Backdrop open={this.state.open}>
          <CircularProgress />
        </Backdrop>
        <Navbar />
        <section id={"categoriesDataPane"}>
          <MainCategoriesData {...this.state.globalData} />
        </section>
        <section id={"tabsComponent"}>
          <Tab
            id={"tabs"}
            menu={{ secondary: true, pointing: true }}
            panes={panes}
          />
        </section>
        <Footer />
      </div>
    );
  }
}

export default DashboardController;
