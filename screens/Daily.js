import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const Daily = ({navigation}) => {
  

    return (
      <View>
      <View style={{flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start', }}>
        <TouchableOpacity  onPress={()=> navigation.navigate('Nutrition')} className = 'm-2 mt-2 rounded-xl flex-row' style={{width:'45%', height:'30%', backgroundColor:'#6ccff8'}} >
              <Text className='text-left ml-2 mt-2 font-bold text-2xl' style={{color:'#0d093b'}}>Nutrition</Text>
        <Icon name="arrow-right" size={15} color="black" type="entypo" style={{marginLeft:20, marginTop:2}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('PhysicalActivities')} className = 'm-2 mt-2 rounded-xl flex-row' style={{width:'45%', height:'30%', backgroundColor:'#9599f7'}}>
        <Text className='text-left ml-2 mt-1 font-bold text-lg' style={{color:'#0d093b'}}>Physical Activities</Text>
        <Icon name="arrow-right" size={15} color="black" type="entypo" style={{marginLeft:20, marginTop:2}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Glucose')} className = 'bg-gray-200  m-2 rounded-xl flex-row' style={{width:'45%', height:'30%', backgroundColor:'#ee8f91'}}>
        <Text className='text-left ml-2 mt-2 font-bold text-2xl' style={{color:'#0d093b'}}>Glucose</Text>
        <Icon name="arrow-right" size={15} color="black" type="entypo" style={{marginLeft:20, marginTop:2}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Insuline')} className = 'bg-gray-200  m-2 rounded-xl flex-row' style={{width:'45%', height:'30%', backgroundColor:'#aef5c1'}}>
        <Text className='text-left ml-2 mt-2 text-2xl font-bold' style={{color:'#0d093b'}}>Insuline</Text>
        <Icon name="arrow-right" size={15} color="black" type="entypo" style={{marginLeft:20, marginTop:2}} />
        </TouchableOpacity>
      </View>
      </View>
    )
  }


export default Daily;