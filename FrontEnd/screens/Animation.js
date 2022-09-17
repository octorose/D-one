import React, { useRef, useState } from "react";
import {
  Animated,
  Text,
  Image,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Animation = (navigation) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const navigationi = useNavigation();
  const cha7 = () => {
    fadeIn();
    setTimeout(() => {
      navigationi.replace("Glucose");
    }, 5000);
  };

  async function fadeIn() {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }

  return (
    <SafeAreaView style={styles.container} onStartShouldSetResponder={cha7}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim,
          },
        ]}
      >
        <Image source={require("../assets/Bluehand.png")} style={styles.Img} />
      </Animated.View>

      {/* <Image source={require('../assets/Bluehand.png')} style={styles.Img} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  Img: {
    justifyContent: "center",
    alignItems: "center",
    width: 400,
    height: 800,
    marginTop: 100,
  },
});

export default Animation;
