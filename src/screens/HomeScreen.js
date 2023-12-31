import React from "react";
import {
	Text,
	StyleSheet,
	View,
	Button,
	TouchableOpacity,
	Image,
} from "react-native";

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Text style={styles.text}>Welcome To English Ease</Text>

			<Button
				title="Alphabets"
				onPress={() => navigation.navigate("Alphabet")}
			/>

			<Button
				title="Go to List components"
				onPress={() => navigation.navigate("Image")}
			/>

			<Button
				title="Animal Image 🦁"
				onPress={() => navigation.navigate("Animal")}
			/>

			<Button
				title="Interactive Section 😜"
				onPress={() => navigation.navigate("Counter")}
			/>
			<Button
				title="Square Screen"
				onPress={() => navigation.navigate("Square")}
			/>
			<Button
				title="Text Screen"
				onPress={() => navigation.navigate("TextS")}
			/>

			<Button title="Color Game" onPress={() => navigation.navigate("Color")} />
			<Image
				source={{
					uri: "https://s25.postimg.org/88ypx1fgb/lion_thumbnails.jpg",
				}}
				style={{ width: 400, height: 400 }}
			/>
			{/* Can use text, image, icon ... */}
			{/* <TouchableOpacity onPress= {() => navigation.navigate('List')} >
      <Text>Go to List Demo</Text>
      <Text>List Combination</Text>
      <Text>Go to List Demo</Text>
      <Text>Go to List Demo</Text>
    </TouchableOpacity> */}
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 20,
		color: "green",
	},
});

export default HomeScreen;
