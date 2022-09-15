import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";
import client from "../API/client";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState({});

  const fetchUser = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token !== null) {
      const res = await client.get("/profile", {
        headers: {
          Authorization: `JWT ${token}`,
        },
      });
    //   console.log(res.data);
      if (res.data.success) {
        setProfile(res.data);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        setProfile({});
      }
    } else {
      setIsLoggedIn(false);
      setProfile({});
    }
};
console.log('qq',profile);
useEffect(() => {
    fetchUser();
}, []);
return (
    <LoginContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, profile, setProfile }}
    >
      {children}
    </LoginContext.Provider>
  );
};
export const useLogin = () => useContext(LoginContext);

export default LoginProvider;
