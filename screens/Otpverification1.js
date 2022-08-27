import { StatusBar } from 'expo-status-bar';
import {SafeAreaView,
        StyleSheet,
        View,
        Text, 
        Image,
        TextInput, 
         Button, 
         TouchableOpacity} from 'react-native'
import React,  {useState}  from 'react'
import PhoneInput from "react-native-phone-number-input";



const Otpverification1 = () => {

  const [phoneNumber, setPhoneNumber] = useState('')

  const url = 'https://avatars.githubusercontent.com/u/48595123?v=4'


  return (
    <View style={styles.container}>
        <View style={styles.header}>
             <Image
                source={{
                uri: url,
                         }}
            style = {{ justifyContent: 'center',
            alignItems: 'center', width: 250, height: 200}}
             />
       </View>

       <View style={styles.footer}>
         <Text style={styles.text_footer} >We will send you an One Time Password on this mobile number </Text>
         <Text style={styles.text}>Enter phone number</Text>

         <PhoneInput
            defaultValue={phoneNumber}
         />

 <TouchableOpacity style={[styles.get_OTP,styles.shadowBtn,{shadowColor:'#8EE1FF'}]}>
          <Text >Get OTP</Text>
        </TouchableOpacity>

      <StatusBar style="auto" />


         </View>




   



    </View>

    
  )
}

const styles = StyleSheet.create({
    
  container: {
    flex: 1,
    backgroundColor: "#8EE1FF",
  },

  header: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 50,
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

  
},

text: {
        
          width: 330,
          padding: 30,
          fontSize: 20,
          
          color: 'grey',
         
  
     },

     get_OTP: {
      borderRadius: 14,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#8EE1FF",
          
          
        },

        shadowBtn: {
          shadowOffset: {width:1, height: 10},
          shadowOpacity: 0.4,
          shadowRadius: 3,
          elevation: 15
        },
        
  
  
  
   

    });
    
    export default Otpverification1





















// const Otpverification1 = () => {

//   const [phoneNumber, setPhoneNumber] = useState('')

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Verification</Text>

      
//       <Text>We will send you an One Time Password on this mobile number </Text>
//       <Text style={styles.text}>Enter Mobile Number</Text>






//    <PhoneInput
//      defaultValue={phoneNumber}
//    />


// <TouchableOpacity style={styles.get_OTP}>
//           <Text >Get OTP</Text>
//         </TouchableOpacity>

//       <StatusBar style="auto" />
//     </View>

    
//   )
// }

// const styles = StyleSheet.create({
    
//   container: {
//     flex: 1,
//     backgroundColor: "#8EE1FF",
//   },

//       text: {
        
//         width: 330,
//         padding: 30,
//         fontSize: 20,
//         color: 'grey',

//    },

//    get_OTP: {
//     width: "80%",
//     borderRadius: 14,
//     height: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 40,
//     backgroundColor: "#8EE1FF",
    
    
    
//   },
  
   

//     });
// export default Otpverification1