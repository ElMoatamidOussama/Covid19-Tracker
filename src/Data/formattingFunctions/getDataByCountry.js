import groupElementsByMonthAndYear from "./groupElementsByMonthAndYear";

const getInfosByCountry = (setSeries, countryName, categories) => {
  fetch("https://api.covid19api.com/dayone/country/" + countryName)
    .then((res) => res.json())
    .then((result) => {
      let groupedElements = groupElementsByMonthAndYear(result);
      let series = categories.map((item) => ({
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
      setSeries(series);
    });
};
export default getInfosByCountry;
