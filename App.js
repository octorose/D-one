import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Prelogin from './screens/Prelogin';
import Homescreen from './screens/Homescreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import react from 'react';
import Signup from './screens/Signup';
import Otpverification1 from './screens/Otpverification1';
import Otpverification2 from './screens/Otpverification2';
import Sign from './screens/Sign';
const Stack = createNativeStackNavigator();

const App = () => {
const [isAppFirstlaunched, setIsAppFirstLaunched] = react.useState(null)
react.useEffect( () => {
  async function getIsAppFirstLaunched()  {
  const appData = await AsyncStorage.getItem('isAppFirstlaunched');
  console.log(appData);
  if(appData == null){
    setIsAppFirstLaunched(true);
    AsyncStorage.setItem('isAppFirstlaunched', 'false');
  }else{
    setIsAppFirstLaunched(false);
  };
  }
  getIsAppFirstLaunched();
}, []);

  return (
    isAppFirstlaunched != null &&(
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {
            isAppFirstlaunched && (
              <Stack.Screen name="Prelogin" component={Prelogin} />
              )}
            {/* Screens */}
            {/* fiiiw<Stack.Screen name = 'Homescreen' component={Homescreen}/> */}
            {/* fiiiw<Stack.Screen name='Otpverification2' component={Otpverification2}/> */}
            <Stack.Screen name='Sign' component={Sign}/>
            <Stack.Screen name='Signup' component={Signup}/>
            <Stack.Screen name='Otpverification1' component={Otpverification1}/>
          </Stack.Navigator> 
      </TailwindProvider>
    </NavigationContainer>
    )
  );
}

export default App;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
