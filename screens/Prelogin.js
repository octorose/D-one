import { View, Text, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

const Prelogin = () => {
    const navigation = useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        });
    }, [])    
    // logo picture
    const url = 'https://avatars.githubusercontent.com/u/48595123?v=4'
    // flatlist

    
  return (
    <SafeAreaView className='pt-4' style={{
        backgroundColor:'#b9e3f3'
    }} >
    <View className='items-center relative'>
      <Image
      source={{
        uri: url,
      }}
      className='h-48 w-48'
      />
    </View>
    <Text className='ml-24 mt-56 font-extrabold text-2xl absolute -px-1 ' style={{
        color:'#150d4e'
    }}  >
        Find your Doctor
    </Text>
    <Text className='text-center text-lg font-bold ' style={{
        color:'#424f55'
    }}>
    It's easy to find a doctor ::::and {'\n'}getting appointment 
    </Text>


    </SafeAreaView>
  )
}

export default Prelogin