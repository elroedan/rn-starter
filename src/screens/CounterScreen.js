import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
	// Array destructioring.
	const [counter, setcounter] = useState(0);

	return (
		<View>
			<Text>CounterScreen is running</Text>
			<Text>CounterScreen is running</Text>

			<Button
				title="Increase"
				onPress={() => {
					setcounter(counter + 1);
				}}
			/>

			<Button
				title="Decrease"
				onPress={() => {
					setcounter(counter - 1);
				}}
			/>

			<Text> Current count: {counter}</Text>
		</View>
	);
};

const style = StyleSheet.create({});

export default CounterScreen;
