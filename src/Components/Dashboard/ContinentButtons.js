import { Image } from "semantic-ui-react";
import React from "react";

const continentButtons = [
  { fullName: "All", shortName: "All" },
  { fullName: "Africa", shortName: "AF" },
  { fullName: "NorthAmerica", shortName: "NA" },
  { fullName: "SouthAmerica", shortName: "SA" },
  { fullName: "Asia", shortName: "AS" },
  { fullName: "Oceania", shortName: "OC" },
  { fullName: "Europe", shortName: "EU" },
];

const ContinentButtons = (props) => (
  <div id="continentsPane">
    {continentButtons.map((item, index) => (
      <button
        key={item.shortName}
        className={index === 0 ? "activeContinent" : ""}
        onClick={props.handleClick}
      >
        <Image
          src={"../images/Continents/" + item.fullName + ".svg"}
          size="mini"
        />
        {item.shortName}
      </button>
    ))}
  </div>
);

export default ContinentButtons;
