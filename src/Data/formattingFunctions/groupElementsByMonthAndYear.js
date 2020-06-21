import Months from "../const/Months";
import getElementByLastDay from "./getElementByLastDay";
let Enumerable = require("linq");

const groupElementsByMonthAndYear = (elementsList) => {
  return Enumerable.from(elementsList)
    .groupBy(
      (item) =>
        Months[new Date(item.Date).getMonth()] +
        "\t" +
        new Date(item.Date).getFullYear()
    )
    .select((x) => {
      let lastDayOfMonth = x.max((y) => new Date(y.Date).getDate());
      let monthElement = getElementByLastDay(x, lastDayOfMonth);
      return {
        xaxis: x.key(),
        Deaths: monthElement.Deaths,
        Recovered: monthElement.Recovered,
        Confirmed: monthElement.Confirmed,
      };
    })
    .toArray();
};

export default groupElementsByMonthAndYear;
