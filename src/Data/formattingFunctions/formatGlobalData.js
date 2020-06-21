const formatGlobalData = (result, data) => {
  let globalData =
    Object.keys(data).length > 0
      ? data
      : {
          total: "",
          TotalActive: "",
          TotalConfirmed: "",
          TotalDeaths: "",
          TotalRecovered: "",
        };
  Object.keys(globalData).forEach((item) => {
    globalData[item] = result.Global[item];
    globalData[item.replace("Total", "New")] =
      result.Global[item.replace("Total", "New")];
  });
  globalData.TotalActive =
    result.Global.TotalConfirmed -
    result.Global.TotalRecovered -
    result.Global.TotalDeaths;

  globalData.NewActive = result.Global.NewConfirmed;
  return globalData;
};
export default formatGlobalData;
