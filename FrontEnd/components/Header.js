import { View, Text, Image } from "react-native";
import React from "react";
import moment from "moment";

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
//   const options = {
// 	method: 'POST',
// 	headers: {
// 		'X-RapidAPI-Key': '9454321336mshad93533763256a9p10d077jsnee9ef7d4adf7',
// 		'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com'
// 	}
// };
// let quotes;
// fetch('https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=movies&count=10', options)
// 	.then(response => response.json())
// 	.then(response => quotes=response)
// 	.catch(err => console.error(err));

const Header = (data) => {
  const avatar = data.data.user.avatar;
  console.log(avatar);
  return (
    <View className="flex-row items-center justify-between mt-4">
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

          className="h-20 w-20 rounded-full mr-4"
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
