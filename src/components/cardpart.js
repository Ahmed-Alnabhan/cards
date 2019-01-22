import React from "react";
import { View } from "react-native";

const styles = {
  cardPartStyle: {
    backgroundColor: "#fef",
    padding: 4,
    justifyContent: "flex-start",
    flexDirection: "row"
  }
};
const CardPart = props => {
  const { cardPartStyle } = styles;
  return <View style={cardPartStyle}>{props.children}</View>;
};

export default CardPart;
