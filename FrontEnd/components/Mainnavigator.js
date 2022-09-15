import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import react, { useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TailwindProvider } from 'tailwindcss-react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Sign from '../screens/Sign';
import Signup from '../screens/Signup';
import Uploadprofile from '../screens/Uploadprofile';
import Down from './Down';
import Nutrition from '../screens/Nutrition';
import Glucosestats from '../screens/Glucosestats';
import Insuline from '../screens/Insuline';
import PhysicalActivities from '../screens/PhysicalActivities';
import Ask from '../screens/Ask';
import Animation from '../screens/Animation';
import Glucose from '../screens/Glucose';
import { useLogin } from '../context/LogingProvider';
import Prelogin from '../screens/Prelogin';

const Stacknavigator = () => {
    react.useEffect(() => {
        async function getIsAppFirstLaunched() {
          const appData = await AsyncStorage.getItem("isAppFirstlaunched");
        //   console.log(appData);
          if (appData == null) {
            setIsAppFirstLaunched(true);
            AsyncStorage.setItem("isAppFirstlaunched", "false");
          } else {
            setIsAppFirstLaunched(false);
          }
        }
        getIsAppFirstLaunched();
      }, []);
      const Stack = createNativeStackNavigator();
    const [isAppFirstlaunched, setIsAppFirstLaunched] = react.useState(null);
    return (
        <>
      {isAppFirstlaunched != null && (
        <>
          <StatusBar backgroundColor="#fff" barStyle="dark-content" />
          
            <Stack.Navigator screenOptions={{ headerShown: false }} >
              {isAppFirstlaunched && (
                <Stack.Screen name="Prelogin" component={Prelogin} />
              )}
              {/* Screens */}
              
              <Stack.Screen name="Sign" component={Sign} />
              <Stack.Screen name="SignUp" component={Signup} />
              <Stack.Screen name="Uploadprofile" component={Uploadprofile} />
              <Stack.Screen name="Down" component={Down} options={{ headerShown: false }}/>
              {/* <Stack.Screen name='Otpverification1' component={Otpverification1 }/> */}
              {/* <Stack.Screen name='Otpverification2' component={Otpverification2 }/>  */}
              <Stack.Screen name = 'Nutrition' component={Nutrition}/>
              <Stack.Screen name="Glucosestats" component={Glucosestats} />
                <Stack.Screen name = 'Insuline' component={Insuline}/> 
              <Stack.Screen name = 'PhysicalActivities' component={PhysicalActivities}/>
              <Stack.Screen name="Ask" component={Ask} />
              <Stack.Screen name="Animation" component={Animation} />
              <Stack.Screen name="Glucose" component={Glucose} />
            </Stack.Navigator>
          </>
      )}
      </>
    )
  }
const Stacknavigatorin = () => {
    react.useEffect(() => {
        async function getIsAppFirstLaunched() {
          const appData = await AsyncStorage.getItem("isAppFirstlaunched");
          console.log(appData);
          if (appData == null) {
            setIsAppFirstLaunched(true);
            AsyncStorage.setItem("isAppFirstlaunched", "false");
          } else {
            setIsAppFirstLaunched(false);
          }
        }
        getIsAppFirstLaunched();
      }, []);
      const Stack = createNativeStackNavigator();
    const [isAppFirstlaunched, setIsAppFirstLaunched] = react.useState(null);
    return (
        <>
      {isAppFirstlaunched != null && (
        <>
          <StatusBar backgroundColor="#fff" barStyle="dark-content" />
          
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Down'>
              {isAppFirstlaunched && (
                <Stack.Screen name="Prelogin" component={Prelogin} />
              )}
              {/* Screens */}
              
              <Stack.Screen name="Sign" component={Sign} />
              <Stack.Screen name="SignUp" component={Signup} />
              <Stack.Screen name="Uploadprofile" component={Uploadprofile} />
              <Stack.Screen name="Down" component={Down} options={{ headerShown: false }}/>
              {/* <Stack.Screen name='Otpverification1' component={Otpverification1 }/> */}
              {/* <Stack.Screen name='Otpverification2' component={Otpverification2 }/>  */}
              <Stack.Screen name = 'Nutrition' component={Nutrition}/>
              <Stack.Screen name="Glucosestats" component={Glucosestats} />
                <Stack.Screen name = 'Insuline' component={Insuline}/> 
              <Stack.Screen name = 'PhysicalActivities' component={PhysicalActivities}/>
              <Stack.Screen name="Ask" component={Ask} />
              <Stack.Screen name="Animation" component={Animation} />
              <Stack.Screen name="Glucose" component={Glucose} />
            </Stack.Navigator>
          </>
      )}
      </>
    )
}

const Mainnavigator = () => {
    const { isLoggedIn } = useLogin();
    const { profile } = useLogin();
    console.log(profile);
    // console.log(isLoggedIn);
  return           <TailwindProvider>

      {isLoggedIn ? <Stacknavigatorin />: <Stacknavigator /> }
  </TailwindProvider>
  
}

export default Mainnavigator