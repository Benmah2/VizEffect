import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import TabNavigation from "./components/TabNavigation"
import LoginScreen from "./pages/LoginScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <TabNavigation/>
  );
};

