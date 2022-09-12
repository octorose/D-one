import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const Signupbutt = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Down")}
        style={[
          styles.sign_button,
          styles.shadowBtn,
          { shadowColor: "#8EE1FF" },
        ]}
      >
        <Text>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8EE1FF",
  },

  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
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
  },

  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },

  text_footer: {
    color: "#05375a",
  },

  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
    shadowColor: "#8EE1FF",
    shadowOffset: { width: 1, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 15,
  },

  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: "#05375a",
  },

  //   button:{
  //    width:'100%',
  //    height: 50,
  //    justifyContent: 'center',
  //    alignContent: 'center',
  //    borderRadius: 10,
  //   },

  //   SigninText: {

  //     fontSize: 18,
  //     fontWeight: 'bold',
  //   },

  sign_button: {
    // width: "80%",
    borderRadius: 14,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#8EE1FF",
  },

  shadowBtn: {
    shadowOffset: { width: 1, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 15,
  },

  social_icon: {
    flexDirection: "row",
    justifyContent: "center",
    shadowColor: "#8EE1FF",
    shadowOffset: { width: 1, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 15,
  },
});

export default Signupbutt;
