import Paper from "@material-ui/core/Paper";
import React from "react";

const MainCategoriesData = (props) => {
  const jsonKeys = Object.keys(props);
  const mainCategoriesDataList = [
    {
      categoryName: jsonKeys[0] + "\t Cases",
      data: props.total,
      newData: "",
    },
    {
      categoryName: jsonKeys[1],
      data: props.confirmed,
      newData: props.newConfirmed,
    },
    { categoryName: jsonKeys[3], data: props.deaths, newData: props.newDeaths },
    {
      categoryName: jsonKeys[5],
      data: props.recovered,
      newData: props.newRecovered,
    },
  ];

  return (
    <Paper elevation={3} className={"root"}>
      {mainCategoriesDataList.map((item, index) => (
        <div key={item.categoryName}>
          <p className={"numbers"} id={item.categoryName + "Numbers"}>
            {item.data ? new Intl.NumberFormat().format(item.data) : item.data}
            <br />
            {index !== 0 && item.newData ? (
              <span>
                +(
                {item.newData.toLocaleString("en-US")})
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
