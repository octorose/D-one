import { View, Text, Image, Dimensions, FlatList, SafeAreaView,} from 'react-native'
import React from 'react'

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
        title :'Store your Medical Records',
        description:"D-one may include your medical history & notes",
        image:require("../assets/images/onboarding2.jpeg")
    },
    {
        id :3,
        title :"Get notified about",
        description:"the app will notify you about any recurring patterns",
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
    <Text className='text-center text-xs font-bold ' style={{
        color:'#424f55',
        textAlign:'center'
    }}>
    {item.description} 
    </Text>
            <Image  className='mt-4' source={item.image} style={{width:300, height:200, borderRadius:500, marginHorizontal: 40,}}/>
        </SafeAreaView>
    }
  return (
    <View style={width}>
        <FlatList data={slides} contentContainerStyle = {{height:height*0.75}} showsHorizontalScrollIndicator={false} bounces={false} horizontal renderItem={({item}) => <Slide item={item} className='content-center'/>}/>
    </View>
  )
}

export default OnboardingItems