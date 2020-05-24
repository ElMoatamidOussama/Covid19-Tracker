import MUIDataTable from "mui-datatables";
import React from "react";

const MyTable = () => {
  const columns = [
    {
      name: "city",
      label: "Country",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "name",
      label: "Total Cases",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "name",
      label: "Active Cases",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "name",
      label: "Deaths",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "name",
      label: "Recovered",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "name",
      label: "Tests",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "company",
      label: "Serious Cases",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "city",
      label: "Population",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "continent",
      label: "continent",
      options: {
        filter: true,
        sort: false,
        display: false,
      },
    },
  ];

  const data = [
    {
      name: "Joe James",
      company: "Test Corp",
      city: "Yonkers",
      state: "NY",
      continent: "EU",
    },
    {
      name: "John Walsh",
      company: "Test Corp",
      city: "Hartford",
      state: "CT",
      continent: "EU",
    },
    {
      name: "Bob Herm",
      company: "Test Corp",
      city: "Tampa",
      state: "FL",
      continent: "EU",
    },
    {
      name: "Bob Herm",
      company: "Test Corp",
      city: "Tampa",
      state: "FL",
      continent: "NA",
    },
    {
      name: "Bob Herm",
      company: "Test Corp",
      city: "Tampa",
      state: "FL",
      continent: "NA",
    },
    {
      name: "Bob Herm",
      company: "Test Corp",
      city: "Tampa",
      state: "FL",
      continent: "NA",
    },
    {
      name: "Bob Herm",
      company: "Test Corp",
      city: "Tampa",
      state: "FL",
      continent: "ANZ",
    },
    {
      name: "Bob Herm",
      company: "Test Corp",
      city: "Tampa",
      state: "FL",
      continent: "ANZ",
    },
    {
      name: "Bob Herm",
      company: "Test Corp",
      city: "Tampa",
      state: "FL",
      continent: "AF",
    },
    {
      name: "Bob Herm",
      company: "Test Corp",
      city: "Tampa",
      state: "FL",
      continent: "AF",
    },
    { name: "Oussama Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    {
      name: "James Houston",
      company: "Test Corp",
      city: "Dallas",
      state: "TX",
      continent: "AF",
    },
  ];
  const options = {
    filterType: "checkbox",
  };

  return (
    <MUIDataTable
      id="dataTable"
      title={"Countries Affected by Coronavirus (Today)"}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default MyTable;
