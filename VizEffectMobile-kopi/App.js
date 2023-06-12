import {SafeAreaViewComponent, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import TabNavigation from "./components/TabNavigation"
import StudioLiveStream from "./pages/StudioLiveStream";
import SharedLiveStream from "./pages/SharedLiveStream";
import LiveStream from "./pages/LiveStream";
import LoginScreen from "./pages/LoginScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <TabNavigation/>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

