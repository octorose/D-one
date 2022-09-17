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
import { useLogin } from "../context/LogingProvider";
const Tab = createMaterialTopTabNavigator();
const { width } = Dimensions.get("window");
const Homescreen = ({ route }) => {
  const data = route.params;
  // console.log('param here',route.params);
  return (
    <SafeAreaView className="pt-1 mx-4" style={width}>
      <Header data={data} />
      <Stats />
    </SafeAreaView>
  );
};
export default Homescreen;
