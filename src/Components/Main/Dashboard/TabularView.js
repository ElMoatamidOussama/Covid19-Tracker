import MUIDataTable from "mui-datatables";
import React from "react";

const TabularView = (props) => {
  const columns = [
    {
      name: "Country",
      label: "Country",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "TotalConfirmed",
      label: "Total Cases",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "NewConfirmed",
      label: "New Cases",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "TotalActive",
      label: "Active",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "TotalDeaths",
      label: "Deaths",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "NewDeaths",
      label: "New Deaths",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "TotalRecovered",
      label: "Recovered",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "NewRecovered",
      label: "New Recovered",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "Population",
      label: "Population",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "Continent",
      label: "Continent",
      options: {
        filter: true,
        sort: true,
      },
    },
  ];
  const options = {
    filterType: "checkbox",
  };
  return (
    <MUIDataTable
      title={
        "Countries Affected by Coronavirus\t [\t" + props.lastUpdateDate + "\t]"
      }
      data={props.data}
      columns={columns}
      options={options}
    />
  );
};

export default TabularView;
