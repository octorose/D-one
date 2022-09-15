import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import Settings from "../screens/Settings";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import Homescreen from "../screens/Homescreen";
import AddData from "../screens/AddData";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
const Tab = createBottomTabNavigator();
const Costumtabbutton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        top: -30,
        justifyContent: "center",
        alignItems: "center",
        ...styles.shadow,
      }}
    >
      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 55,
          backgroundColor: "#7fdaf9",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};
const Down = ({ route }) => {
  // console.log("Down", route);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          borderRadius: 12,
          elevation: 0,
          height: 90,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={() => <Homescreen route={route} />}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", top: 15 }}>
                <Image
                  source={require("../assets/images/home.png")}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#2983f5" : "#2983f5",
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", top: 15 }}>
                <Image
                  source={require("../assets/images/Settings.png")}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#2983f5" : "#2983f5",
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="AddData"
        component={() => <AddData route={route} />}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/images/add.png")}
              resizeMode="contain"
              style={{ width: 30, height: 30, tintColor: "#fff" }}
            />
          ),
          tabBarButton: (props) => <Costumtabbutton {...props} />,
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", top: 15 }}>
                <Image
                  source={require("../assets/images/Notification.png")}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#2983f5" : "#2983f5",
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", top: 15 }}>
                <Image
                  source={require("../assets/images/user.png")}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#2983f5" : "#2983f5",
                  }}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Down;
const styles = StyleSheet.create({
    shadow: {
      shadowColor: "#0d093b",
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.25,
      elevation: 5,
    },
  });