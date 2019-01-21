// Import libraries
import React from "react";
import { AppRegistry, View } from "react-native";
import Header from "./src/components/header";
import CardsList from "./src/components/cardslist";
// Create the Cards Component
const Cards = () => (
  <View>
    <Header title="Songs" />
    <CardsList />
  </View>
);

AppRegistry.registerComponent("cards", () => Cards);
