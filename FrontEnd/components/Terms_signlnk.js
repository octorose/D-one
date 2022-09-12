import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Terms_signlnk = ({ navigation }) => {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ marginTop: 20, paddingVertical: 35 }}>
          New to D-one ?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text
            style={{
              marginTop: 20,
              fontWeight: "bold",
              color: "#8EE1FF",
              textDecorationLine: "underline",
              paddingVertical: 35,
            }}
          >
            Sign Up Now
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Text className="text-xs" style={{ marginTop: 5 }}>
          By signing in,you accept our
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              marginTop: 4,
              fontWeight: "bold",
              color: "#8EE1FF",
              paddingVertical: 0,
              fontSize: 14,
            }}
          >
            Terms and Conditions
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Terms_signlnk;
