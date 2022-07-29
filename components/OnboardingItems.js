import { View, Text, Image, Dimensions, FlatList, SafeAreaView, StyleSheet, TouchableOpacity,} from 'react-native'
import React from 'react'
import react from 'react';

const OnboardingItems = ({item}) => {
    const {width, height} = Dimensions.get('window');
    const Colors = {primary :'#150d4e', secondary:'#424f55'};
    const slides = [{
        id :1,
        title :'Find your Doctor',
        description:"it's easy to find a doctor and \n getting appointment",
        image:require("../assets/images/onboarding1.jpeg")
    },
    {
        id :2,
        title :'Store your\n Medical Records',
        description:"D-one May Include Your \nMedical History, Notes And Other...",
        image:require("../assets/images/onboarding2.jpeg")
    },
    {
        id :3,
        title :"Get notified about",
        description:"the app will notify you about \n any recurring patterns",
        image:require("../assets/images/onboarding3.png")
    },
    {
        id :4,
        title :"Discuss in the forum",
        description:"",
        image:require("../assets/images/onboarding4.jpeg")
    },]
    const Slide = ({item}) => {
        return <SafeAreaView style = {{alignItems: 'center', flex:1}}>
                <Text className=' font-extrabold text-2xl' style={{
        color:'#150d4e',
        textAlign:'center'
    }}  >
        {item.title}
    </Text>
    <Text className='text-center text-sm font-bold mt-5' style={{
        color:'#424f55',
        textAlign:'center',
        fontSize:18
    }}>
    {item.description} 
    </Text>
            <Image  className='mt-9 ' source={item.image} style={{width:300, height:180, borderRadius:500, marginHorizontal: 40,}}/>
        </SafeAreaView>
    }
    const [currentSlideIndex, setCurrentSlideIndex] = react.useState(0 )
    const Footer = () =>{
        return <View style = {{height:height*0.25, justifyContent:'space-between', paddingHorizontal: 20}}>

            <View style = {{flexDirection: 'row', justifyContent:'center', marginTop: 40}}>
                {slides.map((_,index)=>(
                <View key={index } style={[styles.indicator, currentSlideIndex == index && {
                    backgroundColor : '#11103d',
                    width:25
                }]}/>
                ))}
            </View>
            <View style = {{marginBottom: 70}}>
                <View  className='flex-1 flex-wrap flex-row justify-between' >
                    <TouchableOpacity >
                        <Text style = {{
                    color:'#11103d'
                }}>Skip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style = {{
                    color:'#11103d'
                }}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    }
    const styles = StyleSheet.create({
      indicator: {
          height:2.5,
          width:10,
          backgroundColor:"#4f8ee8",
          marginHorizontal: 3,
          borderRadius:2,
      }
    })
  return (
    <SafeAreaView style={width}>
        <FlatList data={slides} contentContainerStyle = {{height:height*0.50}} showsHorizontalScrollIndicator={false}  horizontal pagingEnabled renderItem={({item}) => <Slide item={item} className='content-center'/>}/>
        <Footer/>
    </SafeAreaView>
  );
}

export default OnboardingItems