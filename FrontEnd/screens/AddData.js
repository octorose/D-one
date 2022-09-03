import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, Image, ScrollView} from 'react-native'
import React, { Component } from 'react'




const AddData = () => {
  return (
   <View style={styles.container}>


   <View style={styles.R1}>
    
       <TouchableOpacity
          style={[styles.profileImgContainer, { borderColor: '#4DA7CC', borderWidth:2 }]} >
             <Image source= {require("../assets/nutrition.png")} style={styles.Img} />
       </TouchableOpacity>
       

       <TouchableOpacity
          style={[styles.profileImgContainer, { borderColor: '#4C5BDF', borderWidth:2 }]} >
             <Image source={require('../assets/sports.png')} style={styles.Img} />
             
       </TouchableOpacity>
       </View>

       <View style={styles.R2}>
       <TouchableOpacity
          style={[styles.profileImgContainer, { borderColor: '#D24646', borderWidth:2 }]} >
             <Image source={require('../assets/glucose.png')} style={styles.Img} />
       </TouchableOpacity>
       

       <TouchableOpacity
          style={[styles.profileImgContainer, { borderColor: '#35C660', borderWidth:2 }]} >
             <Image source={require('../assets/insuline.png')} style={styles.Img} />
       </TouchableOpacity>
       </View>
        

        </View>
        

      
  )
}

export default AddData


const styles = StyleSheet.create({
    
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
    },

    profileImgContainer: {
      marginLeft: 8,
      width: 150,
      height: 150,
      borderRadius: 150 / 2,
      alignItems:'center',
      justifyContent:'center'
    },
    profileImg: {
      
      width: 150,
      height: 150,
      borderRadius: 150 / 2,
    },

    R1: {
      flexDirection: 'row',
      paddingHorizontal: 40,
      paddingVertical : 20,
      
    },

    R2: {
      flexDirection: 'row',
      paddingHorizontal: 40,
    },

  Img : {
    width: 100,
    height: 100,
  },
  });
     