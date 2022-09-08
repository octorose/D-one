import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import { SocialIcon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import client from "../API/client";


const isValidObjField = (obj) => {
  return Object.values(obj).every((value) => value.trim());
};
const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater("");
  }, 2500);
};
const isValidEmail = (value) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(value);
};
const Signup = () => {
  const [data, setData] = useState({
    Email: "",
    Username: "",
    Password: "",
    ConfimPassword: "",
  });
  const [security, setSecurity] = useState({
    check_textInputChange: false,
    secureTextEntry: true,
  });
  const [error, seterror] = useState("");
  const { Email, Username, Password, ConfimPassword } = data;
  const handlechangeText = (value, fieldname) => {
    setData({ ...data, [fieldname]: value });
  };

  const updateSecureTextEntry = () => {
    setSecurity({
      ...security,
      secureTextEntry: !security.secureTextEntry,
    });
  };
  const isValidForm = () => {
    if (!isValidObjField(data))
      return updateError("Required all fields!", seterror);
    if (!Username.trim() || Username.length < 3)
      return updateError("invalide Username!", seterror);
    if (!isValidEmail(Email))
      return updateError("this email is not valide", seterror);
    if (!Password.trim() || Password.length < 8)
      return updateError(
        "the password must contain at least 8 characters",
        seterror
      );
    if (Password !== ConfimPassword)
      return () => updateError("Passwords does not matches", seterror);
    return true;
  };
  const submitform = async () => {
    if (isValidForm()) {
      // submit form
      // console.log({...data});
      const response = await client.post("/creat-user", {
        Username,
        Email,
        Password,
        ConfimPassword,
      });
      console.log(response.data);
    }
  };
  const navigationi = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/images/logo.png')}
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 200,
            height: 200,
            top: 50,
          }}
        />
        {error ? <Text>{error}</Text> : null}
        <Text style={styles.text_header}>Create your Account</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>

        <View style={styles.action}>
          <Icon name="at" type="font-awesome" color="grey" size={18}  />
          <TextInput
            value={Email}
            placeholder="Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(value) => handlechangeText(value, "Email")}
            keyboardType={"email-address"}
          />
        </View>

        <Text style={[styles.text_footer, { marginTop: 25 }]}>Username </Text>
        <View style={styles.action}>
          <Icon name="user" type="font-awesome" color="grey" size={18} />
          <TextInput
            value={Username}
            placeholder="Username"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(value) => handlechangeText(value, "Username")}
            keyboardType={"email-address"}
          />
        </View>

        <Text style={[styles.text_footer, { marginTop: 25 }]}>Password </Text>
        <View style={styles.action}>
          <Icon name="lock" type="font-awesome" color="grey" size={20} />
          <TextInput
            value={Password}
            placeholder="Password"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(value) => handlechangeText(value, "Password")}
            secureTextEntry={security.secureTextEntry ? true : false}
          />

          <TouchableOpacity onPress={updateSecureTextEntry}>
            {security.secureTextEntry ? (
              <Icon name="eye" type="font-awesome" color="grey" size={20} />
            ) : (
              <Icon
                name="eye-slash"
                type="font-awesome"
                color="grey"
                size={20}
              />
            )}
          </TouchableOpacity>
        </View>

        <Text style={[styles.text_footer, { marginTop: 25 }]}>
          Confirm Password{" "}
        </Text>
        <View style={styles.action}>
          <Icon name="lock" type="font-awesome" color="grey" size={20} />
          <TextInput
            value={ConfimPassword}
            placeholder="Confirm Password"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(value) => handlechangeText(value, "ConfimPassword")}
            secureTextEntry={security.secureTextEntry ? true : false}
          />

          <TouchableOpacity onPress={updateSecureTextEntry}>
            {security.secureTextEntry ? (
              <Icon name="eye" type="font-awesome" color="grey" size={20} />
            ) : (
              <Icon
                name="eye-slash"
                type="font-awesome"
                color="grey"
                size={20}
              />
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={
            submitform
            // () => navigationi.navigate("Down")
          }
          style={[
            styles.sign_button,
            styles.shadowBtn,
            { shadowColor: "#8EE1FF" },
          ]}
        >
          <Text>Sign up</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 20,
            paddingBottom: 5,
          }}
        >
          <Text> ──── Or sign in with ────</Text>
        </View>

        <View style={styles.social_icon}>
          <TouchableOpacity>
            <SocialIcon type="google" />
          </TouchableOpacity>
          <TouchableOpacity>
            <SocialIcon type="facebook" />
          </TouchableOpacity>
          <TouchableOpacity>
            <SocialIcon type="twitter" />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text
            className="text-xs"
            style={{ marginTop: 20, paddingVertical: 15 }}
          >
            By signing in,you accept our
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                marginTop: 20,
                fontWeight: "bold",
                color: "#8EE1FF",
                paddingVertical: 15,
                fontSize: 14,
              }}
            >
              Terms and Conditions
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8EE1FF",
  },

  header: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 50,
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
  },

  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 27,
    justifyContent: "flex-end",
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
