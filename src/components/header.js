/* eslint-disable comma-dangle */
import React from "react";
import { Text, View } from "react-native";

// Define the styles
const styles = {
  headerViewStyle: {
    backgroundColor: "#ccc",
    textAlign: "center",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    height: 75,
    // adding shadow for ios
    shadowColor: "#000",
    shadowOffset: { height: 3, width: 0 },
    shadowRadius: 3,
    shadowOpacity: 0.4
  },
  HeaderTextStyle: {
    fontSize: 20
  }
};

const Header = () => {
  const { headerTextStyle, headerViewStyle } = styles;
  return (
    <View style={headerViewStyle}>
      <Text style={headerTextStyle}>Cards</Text>
    </View>
  );
};

export default Header;
