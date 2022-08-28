import { StatusBar } from 'expo-status-bar';
import { View, 
         Text,
         StyleSheet,
        TouchableOpacity,
        Image,
         KeyboardAvoidingView } from 'react-native'
         import React,  {useState}  from 'react'
import OTPInputView from '@twotalltotems/react-native-otp-input'



const Otpverification1 = () => {

  // const [phoneNumber, setPhoneNumber] = useState('')

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
         <Text style={styles.text}>Insert your code here</Text>

         <OTPInputView 
               pinCount={4}
               style={styles.otpView}
               codeInputFieldStyle={styles.underlineStyleBase}
               onCodeFilled={value => {
               console.log(value);
        }}
      />

 <TouchableOpacity style={[styles.Verify,styles.shadowBtn,{shadowColor:'#8EE1FF'}]}>
          <Text >Verify & Proceed</Text>
        </TouchableOpacity>


      
        <Text style={styles.receive}>Didn't you receive any code ? </Text>
        <TouchableOpacity><Text style={styles.resend}>Resend New Code </Text></TouchableOpacity>

      <StatusBar style="auto" />

         </View>


         <Text>          </Text>
         <Text>          </Text>
         <Text>          </Text>

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
 paddingHorizontal: 60,
 color: 'grey',
 },


otpView: {
  width: '100%',
   color: 'black',
   borderBottomColor: '#fff',
   height: 100,
},

underlineStyleBase: {
  width: 30,
  height: 45,
  borderWidth: 0,
  borderBottomWidth: 1,
  color: 'black',
  borderBottomColor: '#8EE1FF',
  
  
},

Verify: {
  
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

        receive:{
         alignItems: 'center',
         justifyContent:'center',
         paddingVertical: 50,
         color: 'grey',   
         paddingHorizontal: 60,
    },
       
      resend: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'#8EE1FF',
        paddingHorizontal: 80,
        

      },
  
  
  
   

    });
    
    export default Otpverification1









