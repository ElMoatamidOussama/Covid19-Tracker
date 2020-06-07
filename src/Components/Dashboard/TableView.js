import React from "react";
import { Tab } from "semantic-ui-react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import DataTable from "./DataTable";
import RenderContinentsButtons from "./ContinentButtons";
import MainCategoriesData from "../Dashboard/MainCategoriesData";
import "../../StyleSheet/tableView.css";
import populationByCountry from "../../Data/populationByCountry";
import countriesByContinent from "../../Data/countriesByContinent";
class TableView extends React.Component {
  constructor(props) {
    super(props);
    this.populationByCountryData = populationByCountry;
    this.countriesByContinent = countriesByContinent;
    this.state = {
      isLoaded: false,
      globalData: {
        total: "",
        newConfirmed: "",
        confirmed: "",
        deaths: "",
        newDeaths: "",
        recovered: "",
        newRecovered: "",
      },
      data: [],
      lastUpdateDate: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log(
      "Your Element",
      document.querySelector("div[class*=MUIDataTableToolbar-filterPaper-]")
    );
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.Global) {
            const total =
              result.Global.TotalRecovered +
              result.Global.TotalDeaths +
              result.Global.TotalConfirmed;

            const globalData = {
              total: total,
              confirmed: result.Global.TotalConfirmed,
              newConfirmed: result.Global.NewConfirmed,
              deaths: result.Global.TotalDeaths,
              newDeaths: result.Global.NewDeaths,
              recovered: result.Global.TotalRecovered,
              newRecovered: result.Global.NewRecovered,
            };
            if (result.Countries) {
              this.setState({
                isLoaded: true,
                lastUpdateDate: new Date(result.Date).toUTCString("en-US"),
                globalData: { ...globalData },
                data: result.Countries.map((item) => {
                  item.TotalCases =
                    item.TotalConfirmed +
                    item.TotalDeaths +
                    item.TotalRecovered;

                  let populationElement = this.populationByCountryData.find(
                    (element) => element.country === item.Country
                  );

                  item.Population = populationElement
                    ? populationElement.population
                    : 0;

                  let continentElement = this.countriesByContinent.find(
                    (element) => element.country === item.Country
                  );
                  item.Continent = continentElement
                    ? continentElement.continent
                    : "";

                  return item;
                }),
              });
            }
          }
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  handleClick = (event) => {
    const activeElement = document.querySelector(
      "#continentsPane .activeContinent"
    );
    const currentElement = event.currentTarget;
    if (activeElement && activeElement !== currentElement) {
      activeElement.classList.remove("activeContinent");
      currentElement.classList.add("activeContinent");
    }
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
        render: () => <div></div>,
      },
      {
        menuItem: "Pie Chart",
        render: () => <div></div>,
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
          {/* <RenderContinentsButtons handleClick={this.handleClick} /> */}
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
