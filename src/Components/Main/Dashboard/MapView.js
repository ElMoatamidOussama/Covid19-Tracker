import React, { memo } from "react";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
} from "react-simple-maps";
import Enumerable from "linq";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapView = ({ setTooltipContent, data }) => {
  const myList = data.map((item) => {
    return item && item.TotalConfirmed && item.Population? (item.TotalConfirmed / item.Population).toFixed(6) : 0;
  });
  const EumerableList = Enumerable.from(myList);
  const MinElement = EumerableList.min();
  const MaxElement = EumerableList.max();
  const colorScale = scaleLinear()
    .domain([MinElement , MaxElement])
    .range(["#6f93d4", "#265cae"]);
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
        <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              let myData = data.find(
                (element) => element.Slug === geo.properties.NAME.toLowerCase()
              );
              if (!myData) {
                if (geo.properties.NAME.includes("Congo")) {
                  myData = data.find(
                    (element) => element.Country === "Congo (Brazzaville)"
                  );
                } else if (geo.properties.NAME.includes("Somaliland")) {
                  myData = data.find(
                    (element) => element.Country === "Somalia"
                  );
                } else if (geo.properties.NAME.includes("Czechia")) {
                  myData = data.find(
                    (element) => element.Country === "Czech Republic"
                  );
                } else if (geo.properties.NAME.includes("Central African")) {
                  myData = data.find(
                    (element) => element.Country === "Central African Republic"
                  );
                } else if (geo.properties.NAME.includes("Sudan")) {
                  myData = data.find(
                    (element) => element.Country === "South Sudan"
                  );
                } else if (geo.properties.NAME.includes("Guinea")) {
                  myData = data.find(
                    (element) => element.Country === "Equatorial Guinea"
                  );
                } else if (geo.properties.NAME.includes("Sahara")) {
                  myData = data.find(
                    (element) => element.Country === "Western Sahara"
                  );
                } else if (geo.properties.NAME.includes("Laos")) {
                  myData = data.find(
                    (element) => element.Country === "Lao PDR"
                  );
                } else {
                  myData = data.find(
                    (element) => element.Country === geo.properties.NAME
                  );
                }
              }
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;
                    setTooltipContent(NAME, myData ? myData : {});
                  }}
                  fill={
                    myData
                      ? colorScale(
                          (myData.TotalConfirmed / myData.Population) * 10
                        )
                      : "#bab6ba"
                  }
                  onMouseLeave={() => {
                    setTooltipContent("", "");
                  }}
                  style={{
                    default: {
                      outline: "none",
                    },
                    hover: {
                      outline: "none",
                    },
                    pressed: {
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default memo(MapView);
