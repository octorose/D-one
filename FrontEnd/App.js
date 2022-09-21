import { NavigationContainer } from "@react-navigation/native";
import Mainnavigator from "./components/Mainnavigator";
import LoginProvider from "./context/LogingProvider";

const App = () => {

  return (
    <LoginProvider>
      <NavigationContainer>
        <Mainnavigator />
      </NavigationContainer>
    </LoginProvider>
  );
};

export default App;
