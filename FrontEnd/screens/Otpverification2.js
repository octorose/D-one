import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import OTPInputView from '@twotalltotems/react-native-otp-input'

const Otpverification2 = () => {
  return (
    <View style={styles.container}>

      <KeyboardAvoidingView 
         keyboardVerticalOffset={50}
         behavior={'padding'}
         style={styles.containerAvoiddingView}> 
         <Text style={styles.text}> Verification</Text>
         <Text style={styles.text}>Insert your code here :</Text>
      
      
      
      
      

      
      <OTPInputView 
        pinCount={4}
        style={styles.otpView}
        codeInputFieldStyle={styles.underlineStyleBase}
        onCodeFilled={value => {
          console.log(value);
        }}
      />
      
      <View style={styles.bottomView}>
        <TouchableOpacity>
          <View style={styles.btnChangeNumber}>
            <Text style={styles.textChange}>Change number</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.btnResend}>
            <Text style={styles.textResend}>Resend OTP</Text>
          </View>
        </TouchableOpacity>


      </View>
      
     </KeyboardAvoidingView>
    </View>
  )
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  containerAvoiddingView : {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },

  text: {
        
    marginTop: 50,
    marginBottom: 50,
    color: 'grey',
    fontSize: 16,

},

otpView: {
  width: '80%',
  height: 200,
  color: 'black',
},

underlineStyleBase: {
  width: 30,
  height: 45,
  borderWidth: 0,
  borderBottomWidth: 1,
  color: 'black',
  borderBottomColor: '#8EE1FF',
},


bottomView: {
  width: 150,
  height: 50,
  borderRadius: 10,
  alignItems: 'flex-start',
  justifyContent:'center',
},

btnChangeNumber: {
  width: 150,
  height:50,
  borderRadius:10,
  alignItems: 'flex-start',
  justifyContent:'center',
},

textChange : {
  color: 'black',
  alignItems: 'center'
},

btnResend: {
  width: 150,
  height: 50,
  borderRadius: 10,
  alignContent: 'flex-end',
  justifyContent: 'center',
},

})
export default Otpverification2

