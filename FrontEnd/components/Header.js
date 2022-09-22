import { View, Text, Image } from "react-native";
import React from "react";
import moment from "moment";
import { useLogin } from "../context/LogingProvider";

const greetings = {
  morning: "Good Morning",
  evening: "Good Evening",
  night: "Good Afternoon",
};
function getGreetingTime(m) {
  var g = null; //return g

  if (!m || !m.isValid()) {
    return;
  } //if we can't find a valid or filled moment, we return.

  var split_afternoon = 12; //24hr time to split the afternoon
  var split_evening = 17; //24hr time to split the evening
  var currentHour = parseFloat(m.format("HH"));

  if (currentHour >= split_afternoon && currentHour <= split_evening) {
    g = greetings.night;
  } else if (currentHour >= split_evening) {
    g = greetings.evening;
  } else {
    g = greetings.morning;
  }

  return g;
}

const Header = (data) => {
  const { profile } = useLogin();
  let avatar;
  if (profile === undefined) {
    avatar = data.data.avatar;
  }
  if (data.data === undefined) {
    const Profile_len = Object.keys(profile.Profile).length;
    avatar = profile.Profile.avatar;
  }
  // const Profile_len = Object.keys(profile.Profile).length;
  // console.log("from device",profile.keys(Profile).lenght === 0);
  // const avatar = data.data.user.Profile.avatar;
  // console.log(avatar);
  return (
    <View className="flex-row items-center justify-between my-5 ">
      <Text
        className="text-3xl font-bold tracking-wide"
        style={{
          color: "#0f0e4c",
        }}
      >
        {getGreetingTime(moment()) + "\n"}
        <Text
          className="text-sm font-normal"
          style={{
            color: "#0f0e4c",
          }}
        >
          Let's Make this day productive
        </Text>
      </Text>
      {avatar ? (
        <Image
          source={{ uri: avatar }}
          //   require("../assets/images/logo.png")

          className="h-16 w-16 rounded-full mr-4"
        />
      ) : (
        <Image
          source={require("../assets/images/logo.png")}
          className="h-20 w-20 rounded-full mr-4"
        />
      )}
    </View>
  );
};

export default Header;
