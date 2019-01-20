// Import libraries
import React from "react";
import { AppRegistry } from "react-native";
import Header from "./src/components/header";
// Create the Cards Component
const Cards = () => <Header />;

AppRegistry.registerComponent("cards", () => Cards);
