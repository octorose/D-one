import AsyncStorage from '@react-native-async-storage/async-storage';
import client from './client';
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
