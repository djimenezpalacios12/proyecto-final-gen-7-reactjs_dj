import { ResponsiveBar } from "@nivo/bar";
import propType from "prop-types";

const MyResponsiveBar = ({ data }) => (
  <ResponsiveBar
    data={data}
    keys={["popularity"]}
    indexBy="original_title"
    margin={{ top: 50, right: 50, bottom: 150, left: 60 }}
    padding={0}
    groupMode="grouped"
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    colors={{ scheme: "nivo" }}
    colorBy="indexValue"
    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: -45,
      legendPosition: "middle",
      legendOffset: 32,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    role="application"
  />
);

// PropsType
MyResponsiveBar.propType = {
  data: propType.object,
};

export default MyResponsiveBar;
