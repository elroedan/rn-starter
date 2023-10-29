import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import Alphabet from "./src/screens/Alphabet";
import ImageScreen from "./src/screens/ImageScreen";
import AnimalImage from "./src/screens/AnimalImage";
import CounterScreen from "./src/screens/CounterScreen";
import LearnColor from "./src/screens/LearnColor";
import SquareScreen from "./src/screens/SquareScreen";
import HomePage from "./src/screens/HomePage";
const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		Components: ComponentsScreen,
		List: ListScreen,
		Alphabet: Alphabet,
		Image: ImageScreen,
		Animal: AnimalImage,
		Counter: CounterScreen,
		Color: LearnColor,
		Square: SquareScreen,
		Homeage: HomePage,
	},
	{
		initialRouteName: "Homeage",
		defaultNavigationOptions: {
			title: "App",
		},
	}
);

export default createAppContainer(navigator);
