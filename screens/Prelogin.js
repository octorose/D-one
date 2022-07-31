import { View, Text, Image, Dimensions } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import OnboardingItems from '../components/OnboardingItems';

const Prelogin = () => {
    const navigation = useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        });
    }, [])    
    const {width, height} = Dimensions.get('window');

    // logo picture
    const url = 'https://avatars.githubusercontent.com/u/48595123?v=4'
    // flatlist images


    
  return (
    <SafeAreaView className='pt-4' style={{
        backgroundColor:'#b9e3f3'
    }} >
    <View className='items-center '>
      <Image
      source={{
        uri: url,
      }}
      style = {{height:height*0.20, width: width*0.41}}
      />
    </View>
    {/* <Text className='ml-24 mt-56 font-extrabold text-2xl absolute -px-1 ' style={{
        color:'#150d4e'
    }}  >
        Find your Doctor
    </Text> */}
    {/* <Text className='text-center text-lg font-bold ' style={{
        color:'#424f55'
    }}>
    It's easy to find a doctor and {'\n'}getting appointment 
    </Text> */}

    <OnboardingItems navigation={navigation}/>
    </SafeAreaView>
  )
}

export default Prelogin