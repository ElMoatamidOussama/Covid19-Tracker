let Enumerable = require("linq");

const getElementByLastDay = (x, maxDay) => {
  let lastDayElement = Enumerable.from(x.getSource())
    .select((element) => ({
      Deaths: element.Deaths,
      Confirmed: element.Confirmed,
      Recovered: element.Recovered,
      Date: element.Date,
    }))
    .where((element) => new Date(element.Date).getDate() === maxDay)
    .toArray();
  return lastDayElement[0];
};

export default getElementByLastDay;
