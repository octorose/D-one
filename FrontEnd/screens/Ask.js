import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Animated,
  SafeAreaView,
} from "react-native";
import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";

const Ask = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
    }).start();
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            paddingVertical: 40,
            fontWeight: "bold",
          }}
        >
          Would you like to Take a Insuline Correction Dose?
        </Text>
      </View>

      <View style={styles.footer}>
        {/* <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim
          }
        ]}
      >
       <Image source={require('../assets/Bluehand.png')} style={styles.Img} />
      </Animated.View> */}

        <Image source={require("../assets/ask.png")} style={styles.Img} />
        {/* <Image source={require('../assets/Bluehand.png')} style={styles.Img} /> */}

        <TouchableOpacity
          onPress={() => navigation.navigate("Animation")}
          style={[styles.acceptbutton, styles.shadowBtn]}
        >
          <Text>Yes!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.denybutton, styles.shadowBtn]}>
          <Text>Nah, I'm good!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Ask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8EE1FF",
  },

  header: {
    flex: 1,
    paddingHorizontal: 20,
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: "center",
    width: "100%",
  },
  Img: {
    marginTop: "10%",
    width: 140,
    height: 140,
    marginBottom: "20%",
  },

  acceptbutton: {
    width: "100%",
    borderRadius: 14,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#8EE1FF",
  },
  denybutton: {
    width: "100%",
    borderRadius: 14,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#8EE1FF",
    opacity: 0.5,
  },

  shadowBtn: {
    shadowOffset: { width: 1, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 15,
    shadowColor: "#8EE1FF",
  },
});
