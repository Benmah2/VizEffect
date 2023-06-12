import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import TabNavigation from "./components/TabNavigation"

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

