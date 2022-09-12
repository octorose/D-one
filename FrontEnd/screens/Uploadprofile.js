import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import client from "../API/client";
import { useNavigation } from "@react-navigation/native";
import AppLoader from "../components/AppLoader";

const Uploadprofile = (props) => {
  const [image, setImage] = useState(null);
  const [Progress, setProgress] = useState(0)
  const {token} = props.route.params
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
  const navigationi = useNavigation();

  const [sign, setsign] = useState(false)
  const uploadProfileImage =  async () => {
      const formdata = new FormData();
      formdata.append("profilepic", {
          name: new Date() + "_profile",
          uri: image,
          type: "image/jpg",
        });
        console.log('waa');
    try {  
      setsign(true)
      console.log(sign);    
      const res = await client.post("/upload-profile", formdata, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          authorization: `JWT ${token}`,
        },
      });
      setsign(false)
      console.log(sign);    
        if (res.data.success) {
          navigationi.navigate('Down', res.data)
        }
        console.log(res.data);
    } catch (error) {
        console.log(error.message);
    }
  };
  return (
    <>
    <View style={{ height: "100%", alignItems: "center" }}>
      <Image
        source={require("../assets/images/logo.png")}
        style={{
          alignSelf: "center",
          width: 200,
          height: "35%",
          top: 40,
        }}
      />
      <TouchableOpacity
        onPress={Openimagelibrary}
        style={styles.uploadBtnContainer}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 2,
            borderStyle: "dashed",
            height: 160,
            width: 160,
            borderRadius: 160 / 2,
            overflow: "hidden",
          }}
        >
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: "100%", height: "100%" }}
            />
          ) : (
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                fontWeight: "bold",
                color: "#a0a09f",
              }}
            >
              Upload Profile Image
            </Text>
          )}
        </View>
      </TouchableOpacity>
      <Text
        style={{
          top: 10,
          fontSize: 20,
          color: "#8a8a8a",
          fontWeight: "bold",
          letterSpacing: 2,
          opacity: 0.5,
        }}
      >
        Skip
      </Text>
      {image ? (
          <Text
          onPress={uploadProfileImage}
          style={[
              styles.skip,
              {
                  backgroundColor: "green",
                  color: "white",
              borderRadius: 8,
              top: 20,
            },
        ]}
        >
          Upload
        </Text>
      ) : null}
      <Text
        style={{
          top: 70,
          fontSize: 25,
          color: "#132d87",
          fontWeight: "bold",
          letterSpacing: 2,
        }}
      >
        Let Us See You
      </Text>
    </View>
{     sign ? (<AppLoader/>) : null
}
    </>
  );
};
const styles = StyleSheet.create({
  uploadBtn: {
    textAlign: "center",
    fontSize: 16,
    opacity: 0.3,
    fontWeight: "bold",
  },
  uploadBtnContainer: {
    height: 125,
    width: 125,
    borderRadius: 125 / 2,
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "dashed",
    borderWidth: 1,
    overflow: "hidden",
  },
  skip: {
    textAlign: "center",
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 2,
    opacity: 0.5,
  },
});

export default Uploadprofile;
