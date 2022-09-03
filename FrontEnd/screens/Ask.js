import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'

const Ask = () => {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Text style={{fontSize:20, textAlign:'center',paddingVertical: 40, fontWeight:'bold', }}>Would you like to Take a  Insuline Correction Dose?</Text>
    </View>

    <View style={styles.footer}>

    <Image source={require('../assets/ask.png')} style={styles.Img} />

    <TouchableOpacity style={[styles.acceptbutton,styles.shadowBtn,{shadowColor:'#8EE1FF'}]}>
        
        <Text style={styles.loginText}>Yes!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.denybutton,styles.shadowBtn,{shadowColor:'#8EE1FF'}]}>
        
        <Text style={styles.loginText}>Nah, I'm good!</Text>
      </TouchableOpacity>


    </View>

    </View>
  )
}

export default Ask


const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: "#8EE1FF",
      },
  
    header: {
        flex: 1,
        paddingHorizontal: 20,
        padding: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    footer: {
       flex: 3,
       backgroundColor: '#fff',
       borderTopLeftRadius: 50,
       borderTopRightRadius: 50,
       paddingVertical: 20,
       paddingHorizontal: 30,
       borderBottomLeftRadius: 50,
       borderBottomRightRadius: 50,
       alignItems : 'center',
       width : '100%',
    },
    Img : {
        marginTop:'10%',
        width: 140,
        height: 140,
        marginBottom:'20%',
    },

    
   acceptbutton: {
    width: "80%",
    borderRadius: 14,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#8EE1FF",
  },
  denybutton: {
    width: "80%",
    borderRadius: 14,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#8EE1FF",
    opacity:0.5,
  },

  shadowBtn: {
    shadowOffset: {width:1, height: 10},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 15
  },

})