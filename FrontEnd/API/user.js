import AsyncStorage from "@react-native-async-storage/async-storage";
import client from "./client";
export const Signin = async (Email, Password) => {
  try {
    const Signinres = await client.post("/sign-in", { Email, Password });
    if (Signinres.data.success) {
      const token = Signinres.data.token;
      await AsyncStorage.setItem("token", token);
    }
    return Signinres;
  } catch (error) {
    console.log("error inside signin method", error.message);
  }
};
export const Signout = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    if(token!==null){
      const Signoutres = await client.get("/sign-out", {
        headers: {
          Authorization: `JWT ${token}`,
        },
      });
      if (Signoutres.data.success) {
        await AsyncStorage.removeItem("token");
        return true
      }
    }
    return false
  } catch (error) {
    console.log("error inside signout method", error.message);
    return false
  }
};
