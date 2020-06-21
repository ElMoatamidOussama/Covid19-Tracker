const formatTooltipContent = (data) => {
  return data && Object.keys(data).length > 0
    ? {
        Population: data.Population,
        Confirmed: data.TotalConfirmed,
        Active: data.TotalActive,
        Recovered: data.TotalRecovered,
        Deaths: data.TotalDeaths,
      }
    : {};
};
export default formatTooltipContent;
