import populationByCountry from "../../Data/populationByCountry";
import countriesByContinent from "../../Data/countriesByContinent";

const formatTabularLine = (result) =>
  result["Countries"].map((item) => {
    item.TotalActive =
      item.TotalConfirmed - item.TotalRecovered - item.TotalDeaths;

    let populationElement = populationByCountry.find(
      (element) => element.country === item.Country
    );

    item.Population = populationElement ? populationElement.population : 0;

    let continentElement = countriesByContinent.find(
      (element) => element.country === item.Country
    );
    item.Continent = continentElement ? continentElement.continent : "";

    return item;
  });
export default formatTabularLine;
