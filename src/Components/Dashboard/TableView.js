import React from "react";
import Navbar from "../Shared/Navbar";
import "../../StyleSheet/tableView.css";
import { Paper } from "@material-ui/core/";
import { TabPane } from "semantic-ui-react";
import { Image, Tab } from "semantic-ui-react";
import MyTable from "../../Data/MyTable";
import Footer from "../Shared/Footer";
import Section from "react-virtualized/dist/commonjs/Collection/Section";

const TableView = () => {
  const panes = [
    {
      menuItem: "Tabular",
      render: () => <MyTable />,
    },
    {
      menuItem: "Chart",
      render: () => <TabPane attached={true}>Tab 1 Content</TabPane>,
    },
    {
      menuItem: "Map",
      render: () => <TabPane attached={true}>Tab 1 Content</TabPane>,
    },
  ];
  const handleClick = (event) => {
    const activeElement = document.querySelector(
      "#continentsPane .activeContinent"
    );
    if (activeElement) activeElement.classList.remove("activeContinent");
    event.currentTarget.classList.add("activeContinent");
  };
  const continentsList = [
    { fullName: "All", shortName: "All" },
    { fullName: "Africa", shortName: "AF" },
    { fullName: "NorthAmerica", shortName: "NA" },
    { fullName: "SouthAmerica", shortName: "SA" },
    { fullName: "Asia", shortName: "AS" },
    { fullName: "Oceania", shortName: "OC" },
    { fullName: "Europe", shortName: "EU" },
  ];
  const RenderContinentsButtons = () => (
    <div id="continentsPane">
      {continentsList.map((item, index) => (
        <button
          key={index}
          className={index === 0 ? "activeContinent" : ""}
          onClick={handleClick}
        >
          <Image
            src={"../images/Continents/" + item.fullName + ".svg"}
            size="mini"
          />
          {item.shortName}
        </button>
      ))}
    </div>
  );

  return (
    <div id={"dataTable"}>
      <Navbar />
      <section>
        <Paper elevation={3} className={"root"}>
          <div>
            <p className={"numbers"}>30,890,200</p>
            <p className={"labels"}>Cases</p>
          </div>
          <div>
            <p className={"numbers"} id={"infectedNumbers"}>
              4,884,750
            </p>
            <p className={"labels"}>Infected</p>
          </div>
          <div>
            <p className={"numbers"} id={"deathsNumbers"}>
              319,765
            </p>
            <p className={"labels"}>Deaths</p>
          </div>
          <div>
            <p className={"numbers"} id={"recoveredNumbers"}>
              1,901,975
            </p>
            <p className={"labels"}>Recovered</p>
          </div>
        </Paper>
      </section>
      <section id={"myFlexComponent"}>
        <RenderContinentsButtons />
        <Tab
          id={"myTabs"}
          menu={{ secondary: true, pointing: true }}
          panes={panes}
        />
      </section>
      <Footer />
    </div>
  );
};

export default TableView;
