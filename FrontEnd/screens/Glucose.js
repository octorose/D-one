import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Svg, { G, Circle } from "react-native-svg";
import Header from "../components/Header";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { useNavigation } from "@react-navigation/native";

const Glucose = () => {
  const [inputval, Setinputval] = useState(20);
  const min = 20;
  const max = 300;
  function handlechangeText(value) {
    if (value=='') {
      value = '20';
    } else{
      value = parseInt(value,10);
    }
    if(value<min){
      Setinputval(min);1
    }else if(value>max){
      Setinputval(max);
    }else{
    Setinputval(value);
    }
  }
  function normalize(val, min, max) {
    return (val - min) / (max - min);
  }
  const chartval = normalize(inputval, min, max)
  const judging = (chartval) => {
    if (chartval <= 70) {
      return "dont stress find somthing sweet to eat";
    } else if (chartval > 70 && chartval <= 125) {
      return "you're good";
    } else if (chartval > 125 && chartval <= 150) {
      return "you better be carful";
    } else if (chartval > 150) {
      return "let me help you to find a correction dose";
    }
  };
  
  const data = {
    labels: ["gluco"], // optional
    data: [chartval],
  };
  const chartConfig = {
    backgroundGradientFrom: "#efefef",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#efefef",
    color: (opacity = 1) => (inputval<=70)?`rgba(71,200,155, ${opacity})`:(inputval<150)?`rgba(162,223,91, ${opacity})`:(inputval<200)?`rgba(255,103,97, ${opacity})`:`rgba(255, 0, 0, ${opacity})`,
    strokeWidth: 0, // optional, default 3
    barPercentage: 0,
    useShadowColorFromDataset: false, // optional
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView className="mx-5">
      <Header />
      <View className=" mt-9 flex-1 flex-wrap flex-row justify-between ">
        <TouchableOpacity className ="bg-slate-500 w-16 h-6 items-center justify-center rounded-md " onPress={()=>{navigation.goBack()}}>
          <Text
            style={{
              color: "#fff",
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className ="bg-slate-600 w-16 h-6 items-center justify-center rounded-md" onPress={()=>{navigation.navigate("Ask")}}>
          <Text
            style={{
              color: "#fff",
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
      <View className="items-center  justify-center" style={{ height: 400 }}>
        <ProgressChart
          data={data}
          width={220}
          height={220}
          strokeWidth={18}
          radius={80}
          chartConfig={chartConfig}
          hideLegend={true}
        />
        <View style={styles.text}>
          <TextInput
            placeholder="- - -"
            maxLength={3}
            keyboardType="decimal-pad"
            // defaultValue='0'
            allowFontScaling={true}
            onChangeText={(value) => handlechangeText(value)}
            style={{
              fontSize: 30,
              color: "#11103d",
              fontWeight: "bold",
              width: 60,
            }}
          />
          <Text className="mt-1  font-bold text-base"> Mg/L</Text>
        </View>
      </View>
      <Text>{judging}</Text>
    </SafeAreaView>
  );
};

export default Glucose;

const styles = StyleSheet.create({
  graphWrapper: {
    alignItems: "center",
    justifyContent: "center",
    height: "55%",
  },
  text: {
    color: "#394867",
    width: 90,
    height: 30,
    borderRadius: 10,
    flexDirection: "row",
  },
});
