import { Text, View } from 'react-native'
import React, { Component } from 'react'
import ReactNativeCalendarStrip from 'react-native-calendar-strip'

export class Daily extends Component {
  render() {
    return (
      <View>
      <View style={{flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start', }}>
        <View className = 'm-2 mt-2 rounded-xl' style={{width:'45%', height:'30%', backgroundColor:'#6ccff8'}}></View>
        <View className = 'm-2 mt-2 rounded-xl' style={{width:'45%', height:'30%', backgroundColor:'#9599f7'}}></View>
        <View className = 'bg-gray-200  m-2 rounded-xl' style={{width:'45%', height:'30%', backgroundColor:'#ee8f91'}}></View>
        <View className = 'bg-gray-200  m-2 rounded-xl' style={{width:'45%', height:'30%', backgroundColor:'#aef5c1'}}></View>
      </View>
      </View>
    )
  }
}

export default Daily