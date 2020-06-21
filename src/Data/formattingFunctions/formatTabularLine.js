import PopulationByCountry from "../const/PopulationByCountry";
import countriesByContinent from "../const/CountriesByContinent";

const formatTabularLine = (result) =>
  result["Countries"].map((item) => {
    item.TotalActive =
      item.TotalConfirmed - item.TotalRecovered - item.TotalDeaths;
    let populationElement = PopulationByCountry.find(
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
