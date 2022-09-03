import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Svg, { G, Circle } from "react-native-svg";

const Glucose = () => {
  const radius = 70;
  const circleCircumference = 2 * Math.PI * radius;

  const leftToSpendAmount = 600;
  const targetAmount = 1000;

  const spentAmount = targetAmount - leftToSpendAmount;
  const percentage = (spentAmount / targetAmount) * 100;
  const strokeDashoffset =
    circleCircumference - (circleCircumference * percentage) / 100;

  return (
    <View style={styles.container}>
      <View style={styles.graphWrapper}>
        <Svg height="160" width="160" viewBox="0 0 180 180">
          <G rotation={-90} originX="90" originY="90">
            <Circle
              cx="50%"
              cy="50%"
              r={radius}
              stroke="#F0C1C1"
              fill="transparent"
              strokeWidth="20"
            />
            <Circle
              cx="50%"
              cy="50%"
              r={radius}
              stroke="#D85F5F"
              fill="transparent"
              strokeWidth="20"
              strokeDasharray={circleCircumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </G>
        </Svg>
        <Text style={styles.text}>{spentAmount}mg/l</Text>
      </View>
    </View>
  );
};

export default Glucose;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  graphWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    position: "absolute",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    color: "#394867",
  },
});