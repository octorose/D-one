import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';


const Uploadprofile = () => {
    const [image, setImage] = useState(null);
    const Openimagelibrary = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };
      const uploadProfileImage = () => {
        
      }
  return (
    <View style={{height:'100%', alignItems:'center'}}>
        <Image
          source={require("../assets/images/logo.png")}
          style={{
            alignSelf:'center',
            width: 200,
            height: '35%',
            top: 40,
          }}
        />
        <TouchableOpacity onPress={Openimagelibrary}>
        <View style={{alignItems:'center', justifyContent:'center', borderWidth:2, borderStyle:'dashed', height:160, width:160, borderRadius:160/2}}>

        <Text style={{ textAlign:'center', fontSize:18, fontWeight:'bold',color:"#a0a09f"}}>Upload Profile
            Image</Text>
        </View>
        </TouchableOpacity>
        <Text style={{top:10, fontSize:20, color:"#8a8a8a", fontWeight:'bold', letterSpacing:2, opacity:0.5}}>Skip</Text> 
        {
            image ? (<Text onPress={uploadProfileImage} style={[styles.skip,
            {
                backgroundColor: 'green', color: 'white', borderRadius: 8, top: 20
            }]}>
                Upload
            </Text>) : null
        }       
        <Text style={{top:70, fontSize:25, color:"#132d87", fontWeight:'bold', letterSpacing:2}}>Let Us See You</Text>        
</View>
  )
}
const styles = StyleSheet.create({
    
    uploadBtn: {
      textAlign: 'center',
      fontSize: 16,
      opacity: 0.3,
      fontWeight: 'bold',
    },
    skip: {
      textAlign: 'center',
      padding: 10,
      fontSize: 16,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: 2,
      opacity: 0.5,
    },
  });

export default Uploadprofile