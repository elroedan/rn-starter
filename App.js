import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import Alphabet from "./src/screens/Alphabet";
import ImageScreen from "./src/screens/ImageScreen";
import AnimalImage from "./src/screens/AnimalImage";

const navigator = createStackNavigator(
  {
    Home: HomeScreen, 
    Components: ComponentsScreen,
    List: ListScreen,
    Alphabet: Alphabet,
    Image: ImageScreen,
    Animal : AnimalImage
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
