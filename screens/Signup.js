import { StatusBar } from 'expo-status-bar';
import { View,
         Text, 
         button,
         TextInput,
         ScrollView,
         StyleSheet, 
         ImageBackground,
         Dimensions,
         Platform, 
        TouchableOpacity } from 'react-native'
import React,  {useState} from 'react'
import  {Icon} from 'react-native-elements'
import { SocialIcon } from 'react-native-elements';
import Signupbutt from '../components/Signupbutt';
import { useNavigation } from '@react-navigation/native';





const Signup = () => {

   // const [data, setData] = React.useState ({
   //       email: '',
   //       password:'',
   //       check_textInputChange: false,
   //       secureTextEntry: true
   // });
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <View style={styles.header}>
         <Text style={styles.text_header}>Create your Account</Text>
      </View>

      <View style={styles.footer}>
         <Text style={styles.text_footer} >Email </Text>
         
         <View style={styles.action} >
               <Icon
               name='user'
               type='font-awesome'
               color='grey'
               size={18}
               />
         <TextInput 
           placeholder="Email or Username"
           style={styles.textInput}
           autoCapitalize="none"
         //   onChangeText={(email) => setEmail(email)}
           keyboardType={'email-address'}
         />

            
           {/* <Icon
               name='check-circle'
               type='font-awesome'
               color='green'
               size={20}
               /> */}
              
          </View>
         

         
          <Text style={[styles.text_footer, {marginTop: 25}]} >Password </Text>
          <View style={styles.action} >
               <Icon
               name='lock'
               type='font-awesome'
               color='grey'
               size={20}
               />
         <TextInput 
           placeholder="Password"
           style={styles.textInput}
           autoCapitalize="none"
           secureTextEntry={true}
         />

            {/* <TouchableOpacity
            // onPress={ updateSecureTextEntry }
            > 
            <Icon
               name='eye'
               type='font-awesome'
               color='grey'
               size={20}
               />
               </TouchableOpacity> */}
          </View>
         
          <Text style={[styles.text_footer, {marginTop: 25}]} >Confirm Password </Text>
          <View style={styles.action} >
               <Icon
               name='lock'
               type='font-awesome'
               color='grey'
               size={20}
               />
         <TextInput 
           placeholder="Confirm Password"
           style={styles.textInput}
           autoCapitalize="none"
           secureTextEntry={true}
         />

            {/* <TouchableOpacity
            // onPress={ updateSecureTextEntry }
            > 
            <Icon
               name='eye'
               type='font-awesome'
               color='grey'
               size={20}
               />
               </TouchableOpacity> */}
          </View>


          {/* <TouchableOpacity style={styles.button}>
             <LinearGradient 
                colors= {['#08d4c4', '#01ab9d']}
                style={styles.signin}
             >
               
            

          <Text style={[styles.SigninText, {color: '#fff'}]}>
                   Sign in</Text>
             </LinearGradient>

        </TouchableOpacity> */}

        <Signupbutt navigation={navigation} />
        {/* <TouchableOpacity style={[styles.sign_button,styles.shadowBtn,{shadowColor:'#8EE1FF'}]}>
        
          <Text style={styles.loginText}>Sign up</Text>
        </TouchableOpacity> */}

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center', paddingVertical: 50, paddingBottom: 5}}>
        <Text > ────    Or sign in with    ────</Text>
        </View>
        

        <View style={styles.social_icon} >
        <TouchableOpacity><SocialIcon type='google'/></TouchableOpacity>
        <TouchableOpacity><SocialIcon type='facebook'/></TouchableOpacity>
        <TouchableOpacity><SocialIcon type='twitter'/></TouchableOpacity>
       </View>

      

        <View style={{flexDirection:'row'}}>
             <Text style={{marginTop: 20, paddingVertical: 15}}>
             By signing in, you accept our
             </Text>
             <TouchableOpacity>
            <Text style={{marginTop:20, fontWeight: 'bold', color: '#8EE1FF', paddingVertical: 15}}> 
            Terms and Conditions  
              </Text>
              </TouchableOpacity>
        </View>
 

       
        
      </View>
    </View>

  )
}


export default Signup



const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: "#8EE1FF",
      },
  
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
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

    text_header: {
       color: '#fff',
       fontWeight: 'bold',
       fontSize: 30,
    },

    text_footer: {
       color: '#05375a' 
    },
     
    action: {
       flexDirection: 'row',
       marginTop: 10,
       borderBottomWidth: 1,
       borderBottomColor: '#f2f2f2',
       paddingBottom: 5,
       shadowColor:'#8EE1FF',
      shadowOffset: {width:1, height: 10},
      shadowOpacity: 0.4,
      shadowRadius: 3,
      elevation: 15
      

    },

    textInput: {
        flex:1,
        paddingLeft: 10,
        color: '#05375a',
    },

    

   //   button:{
   //    width:'100%',
   //    height: 50,
   //    justifyContent: 'center',
   //    alignContent: 'center',
   //    borderRadius: 10,
   //   },



   //   SigninText: {
       
   //     fontSize: 18,
   //     fontWeight: 'bold',
   //   },
     
     

   sign_button: {
      // width: "80%",
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

    social_icon: {
      flexDirection: 'row',
      justifyContent: 'center',
      shadowColor:'#8EE1FF',
      shadowOffset: {width:1, height: 10},
      shadowOpacity: 0.4,
      shadowRadius: 3,
      elevation: 15
      
      
      
    },
  

});
      