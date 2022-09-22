import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useLogin } from "../context/LogingProvider";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { Signout } from "../API/user";

const Settings = (data) => {
  const { profile, setIsLoggedIn } = useLogin();
  let avatar;
  if (profile === undefined) {
    avatar = data.data.avatar;
  }
  if (data.data === undefined) {
    avatar = profile.Profile.avatar;
  }
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#82ceeb", height: "100%" }}>
      <View
        style={{ backgroundColor: "#f2f2f2", height: "85%" }}
        className="my-6 mx-3 rounded-2xl p-4"
      >

        <View className="flex flex-row justify-between gap-20 items-center mb-1">
          <Text
            className="font-bold text-3xl tracking-wider "
            style={{ color: "#0f0e4c" }}
          >
            Settings
          </Text>
          {avatar ? (
            <Image
              source={{ uri: avatar }}
              className="h-16 w-16 mb-2 rounded-full "
            />
          ) : (
            <Image
              source={require("../assets/images/logo.png")}
              className="h-20 w-20 rounded-full mr-4"
            />
          )}
          <Image
            source={require("../assets/camera.jpeg")}
            className="h-12 w-12 absolute right-2 opacity-40 rounded-lg"
          />
        </View>
        <View className="gap-11 mb-2 content-">
          <TouchableOpacity>
            <View
              className="flex flex-row justify-between items-center mx-3 px-2 h-12  rounded-lg border-1"
              style={{ borderWidth: 0.5, borderColor: "#0f0e4c" }}
            >
              <Text
                className="font-semibold text-2xl tracking-wider"
                style={{ color: "#0f0e4c" }}
              >
                Account
              </Text>
              <Icon name="user" size={34} color="#0f0e4c" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              className="flex flex-row justify-between items-center mx-3 px-2 h-12 w-100 rounded-lg border-1"
              style={{ borderWidth: 0.5, borderColor: "#0f0e4c" }}
            >
              <Text
                className="font-semibold text-2xl tracking-wider"
                style={{ color: "#0f0e4c" }}
              >
                Notifications
              </Text>
              <Icon name="bells" size={34} color="#0f0e4c" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              className="flex flex-row justify-between items-center mx-3 px-2 h-12 w-100 rounded-lg border-1"
              style={{ borderWidth: 0.5, borderColor: "#0f0e4c" }}
            >
              <Text
                className="font-semibold text-2xl tracking-wider"
                style={{ color: "#0f0e4c" }}
              >
                Privacy
              </Text>
              <Icon name="lock" size={34} color="#0f0e4c" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              className="flex flex-row justify-between items-center mx-3 px-2 h-12 w-100 rounded-lg border-1"
              style={{ borderWidth: 0.5, borderColor: "#0f0e4c" }}
            >
              <Text
                className="font-semibold text-2xl tracking-wider"
                style={{ color: "#0f0e4c" }}
              >
                Health
              </Text>
              <Icon name="hearto" size={34} color="#0f0e4c" />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={async()=>{
          const res = await Signout()
          if(res){
            setIsLoggedIn(false)
          }
          }}>

        <View
          className="items-center justify-center self-center mx-3 px-2 h-12 mt-6 rounded-lg border-1"
          style={{
            borderWidth: 0.5,
            borderColor: "#0f0e4c",
            backgroundColor: "#0f0e4c",
            width: "100%",
          }}
        >
          <Text
            className="font-semibold text-2xl tracking-wider"
            style={{ color: "#f2f2f2" }}
          >
            Logout
          </Text>
        </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
