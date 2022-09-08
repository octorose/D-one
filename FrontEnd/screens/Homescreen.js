import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  ScrollView,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import Header from "../components/Header";
import Stats from "../components/Stats";
const Tab = createMaterialTopTabNavigator();
const { width } = Dimensions.get("window");
export default class Homescreen extends React.Component {
  render() {
    return (
      <SafeAreaView className="pt-1 mx-4" style={width}>
        <Header />
        <Stats />
      </SafeAreaView>
    );
  }
}
