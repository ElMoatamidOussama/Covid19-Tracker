import Paper from "@material-ui/core/Paper";
import React from "react";

const MainCategoriesData = (props) => {
  const mainCategoriesDataList = [
    {
      categoryName: "Confirmed",
      data: props.TotalConfirmed,
      newData: props.NewConfirmed,
    },
    {
      categoryName: "Active",
      data: props.TotalActive,
      newData: props.NewActive,
    },
    {
      categoryName: "Deaths",
      data: props.TotalDeaths,
      newData: props.NewDeaths,
    },
    {
      categoryName: "Recovered",
      data: props.TotalRecovered,
      newData: props.NewRecovered,
    },
  ];

  return (
    <Paper elevation={3} id={"mainPanel"}>
      {mainCategoriesDataList.map((item, index) => (
        <div key={item.categoryName}>
          <p className={"numbers"} id={item.categoryName}>
            {item.data ? item.data.toLocaleString() : item.data}
            <br />
            {index !== 0 && item.newData ? (
              <span>
                +(
                {item.newData.toLocaleString()})
              </span>
            ) : (
              <span>
                <br />
              </span>
            )}
          </p>
          <p className={"labels"}>
            {item.categoryName.charAt(0).toUpperCase() +
              item.categoryName.slice(1)}
          </p>
        </div>
      ))}
    </Paper>
  );
};
export default MainCategoriesData;
