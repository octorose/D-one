import { BackHandler, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import react, { Component, useEffect } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Daily from '../screens/Daily';
import Average from '../screens/Average';
import ReactNativeCalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
const Tab = createMaterialTopTabNavigator();

const Stats = () => { 
  const styles = StyleSheet.create({
    up:{
      height:'100%', backgroundColor:'#fff', borderRadius:18, borderWidth:1,borderBottomWidth:-4,borderBottomRightRadius:0, borderTopLeftRadius:0, borderBottomLeftRadius:0,shadowColor: "#000000",
                shadowOpacity: 0.3,
                shadowRadius: 2,
                shadowOffset: {
                  height: 1,
                  width: 1,
                }, borderColor:'#e6e6e6',flex:1,zIndex:1,
    }})
        const [currentTabIndex, setCurrentTabIndex] = react.useState(0);
        const UpdateCurrentTabIndex0 = (e) => {
            setCurrentTabIndex(0);
        }
        const UpdateCurrentTabIndex1 = (e) => {
            setCurrentTabIndex(1);
        }
        useEffect(() => {
            console.log(currentTabIndex);
          }, [currentTabIndex]);

        return (
          <View style={{height:"73%",width:'98%', marginLeft:'auto', marginRight:'auto'}}>
            <View style={{flex:1}}>
              <View>
                  <View style={{flexDirection:'row', marginTop:30, marginBottom:30, position:'relative', height:44}}>
            
                      <TouchableOpacity className='justify-center items-left' style={{ height:'100%', backgroundColor:'#fff', borderRadius:18, borderWidth:1,borderBottomWidth:-1,borderBottomRightRadius:0, borderTopRightRadius:0, borderBottomLeftRadius:0,shadowColor: "#000000",
                      shadowOpacity: 0.3,
                      shadowRadius: 2,
                      shadowOffset: {
                        height: -1,
                        width: 2,
                      }, borderColor:'#e6e6e6',flex:1,zIndex:2}} onPressIn={UpdateCurrentTabIndex0}>
                          <Text className='font-bold text-lg text-left ml-3'>
                          Daily
                          </Text>
                      </TouchableOpacity>
                      <TouchableOpacity className='justify-center items-left'style={[styles.up, currentTabIndex == 1 && {  shadowOffset: {
                        height: -2,
                        width: -1,
                        
                      },zIndex:4}]}onPressIn={UpdateCurrentTabIndex1}>
                          <Text className='font-bold text-lg ml-3'>
                          Average
                          </Text>
                      </TouchableOpacity>
                  
                  </View>
              </View>
            </View>
            <View className='justify-center items-center' style={{width:'99.70%',height:'100%', backgroundColor:'#fff',top:40,shadowColor: "#00",
                      shadowOpacity: 0.3,
                      shadowRadius: 2,
                      shadowOffset: {
                        height: 3,
                        width: 2,
                      },zIndex:-3,borderTopWidth:-1,borderBottomLeftRadius:18,borderBottomRightRadius:18,}}>
                                <ReactNativeCalendarStrip daySelectionAnimation={{highlightColor:'#2983f5',type:'background'}} maxDate={moment()} scrollable={true} style={{width:'95%', height:'15%', marginTop:"42%"}}/>
                        {currentTabIndex == 1 ? 
                        <Average/> 
                        : 
                        <Daily/>
                        }
            </View>
          </View>

    );        
}

export default Stats;