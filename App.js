import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Glucose from './screens/Glucose';
import Prelogin from './screens/Prelogin';
import Homescreen from './screens/Homescreen';
import Nutrition from './screens/Nutrition';
import Insuline from './screens/Insuline';
import Settings from './screens/Settings';
import Notifications from './screens/Notifications';
import Profile from './screens/Profile';
import PhysicalActivities from './screens/PhysicalActivities';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Sign from './screens/Sign';
import Signup from './screens/Signup';
import react from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddData from './screens/AddData';
const Tab = createBottomTabNavigator();
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
const Costumtabbutton = ({children,onPress}) =>{
  return(
    <TouchableOpacity onPress={onPress} style={
      {
        top:-30,
        justifyContent:'center',
        alignItems:'center',
        ...styles.shadow,
      }
    }>
      <View style={{width:100, height:100,borderRadius:55,backgroundColor:'#7fdaf9'}}>
      {children}
      </View>
    </TouchableOpacity>
  )
}
function Down(){
  return(
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel:false, tabBarStyle:{backgroundColor:'#fff', position:'absolute', bottom:25, left:20, right:20, borderRadius:12, elevation:0, height:90,...styles.shadow}}} >
      <Tab.Screen name="Home" component={Homescreen} options={{
        tabBarIcon:({focused})=>{
          return(
         <View style={{ alignItems:'center', top:15}}>
            <Image source={require('./assets/images/home.png')}  style={{width:25, height:25,tintColor: focused ? '#2983f5' : '#2983f5'}} />
            
         </View>
          )
        }
      }}
      />
      <Tab.Screen name="Settings" component={Settings} options={{
        tabBarIcon:({focused})=>{
          return(
         <View style={{ alignItems:'center', top:15}}>
            <Image source={require('./assets/images/Settings.png')}  style={{width:25, height:25,tintColor: focused ? '#2983f5' : '#2983f5'}} />
            
         </View>
          )
        }
      }}/>
            <Tab.Screen name="AddData" component={AddData} options={{
              tabBarIcon:({focused})=>(
                  <Image source={require('./assets/images/add.png')} resizeMode='contain' style={{width:30, height:30,tintColor:'#fff' }} />
                 
              ),
              tabBarButton:(props)=>(
                <Costumtabbutton {...props}/>
              ),

              
            }}/>

      <Tab.Screen name="Notifications" component={Notifications} options={{
        tabBarIcon:({focused})=>{
          return(
         <View style={{ alignItems:'center', top:15}}>
            <Image source={require('./assets/images/Notification.png')}  style={{width:25, height:25,tintColor: focused ? '#2983f5' : '#2983f5'}} />
            
         </View>
          )
        }
      }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon:({focused})=>{
          return(
         <View style={{ alignItems:'center', top:15}}>
            <Image source={require('./assets/images/user.png')}  style={{width:25, height:25,tintColor: focused ? '#2983f5' : '#2983f5'}} />
            
         </View>
          )
        }
      }}/>
    </Tab.Navigator>
  )
}

  return (
    isAppFirstlaunched != null &&(
      <NavigationContainer>
      <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
      <TailwindProvider>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {
            isAppFirstlaunched && (
              <Stack.Screen name="Prelogin" component={Prelogin} />
              )}
            {/* Screens */}
            <Stack.Screen name='Sign' component={Sign}/>
            <Stack.Screen name='SignUp' component={Signup}/>
            {/* <Stack.Screen name='Otpverification1' component={Otpverification1}/> */}
            <Stack.Screen  name = 'Down' component={Down} options={{ headerShown: false }}/>
            <Stack.Screen name = 'Nutrition' component={Nutrition}/>
            <Stack.Screen name = 'Glucose' component={Glucose}/>
            <Stack.Screen name = 'Insuline' component={Insuline}/>
            <Stack.Screen name = 'PhysicalActivities' component={PhysicalActivities}/>
          </Stack.Navigator> 
      </TailwindProvider>
    </NavigationContainer>
     )
  );
}

export default App;
const styles = StyleSheet.create({
  shadow:{
    shadowColor:'#0d093b',
    shadowOffset:{width:0, height:10},
    shadowOpacity:0.25,
    elevation:5,
  }
})
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
