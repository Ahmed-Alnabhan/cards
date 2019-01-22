import React from "react";
import { View } from "react-native";

const styles = {
  cardStyle: {
    // border
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 3,
    borderBottomWidth: 3,
    // shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  }
};
const Card = props => {
  const { cardStyle } = styles;
  return <View style={cardStyle}>{props.children}</View>;
};

export default Card;
