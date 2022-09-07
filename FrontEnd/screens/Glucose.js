import React, { useState } from "react";
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, TextInput } from "react-native";
import Svg, { G, Circle } from "react-native-svg";
import Header from "../components/Header";

const Glucose = () => {
  const [inputval,Setinputval] = useState('')
  const radius = 70;
  const circleCircumference = 2 * Math.PI * radius;

  const leftToSpendAmount = 600;
  const targetAmount = 1000;
  const spentAmount = targetAmount - leftToSpendAmount;
  const percentage = (spentAmount / targetAmount) * 100;
  const strokeDashoffset =
    circleCircumference - (circleCircumference * percentage) / 100;

  return (
    <SafeAreaView className='mx-5'>
      <Header/> 
      <View  className=' mt-7 flex-1 flex-wrap flex-row justify-between ' >
                    <TouchableOpacity >
                        <Text style = {{
                    color:'#11103d'
                }}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style = {{
                    color:'#11103d'
                }}>Next</Text>
                    </TouchableOpacity>
                </View>
      <View style={styles.graphWrapper}>
        <Svg height="80%" width="80%" viewBox="0 0 180 180">
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
        <View style={styles.text}>
        <TextInput   placeholder='- - -' maxLength={3} keyboardType="decimal-pad" />
        <Text className='mt-2'>Mg/L</Text>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default Glucose;

const styles = StyleSheet.create({

  graphWrapper: {
    alignItems: "center",
    justifyContent: "center",
    height:'55%'
  },
  text: {
    position: "absolute",
    textAlign: "center",
    fontWeight: "600",
    // fontSize: 18,
    color: "#394867",
    width:90,
    height:30,
    borderRadius:10,
    flexDirection:'row',
    justifyContent:'center'
  },
});