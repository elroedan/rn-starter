// HomePage.js
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomePage = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome To English Ease</Text>

			<Text style={styles.text}></Text>

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
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "lightgreen", // Change the background color here
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "black",
	},
	subtitle: {
		fontSize: 18,
		color: "gray",
		marginVertical: 20,
	},
});

export default HomePage;
