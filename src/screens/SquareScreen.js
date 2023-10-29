import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import ColorCounter from "./ColorCounter";

const SquareScreen = () => {
	const [Red, setRed] = useState(0);
	const [Blue, setBlue] = useState(0);
	const [Green, setGreen] = useState(0);

	const value = 15;
	console.log(Red);
	return (
		<View>
			<ColorCounter
				color="Red"
				onIncrease={() => setRed(Red + value)}
				onDecrease={() => setRed(Red - value)}
			/>
			<ColorCounter
				color="Blue"
				onIncrease={() => setBlue(Blue + value)}
				onDecrease={() => setBlue(Blue - value)}
			/>
			<ColorCounter
				color="Green"
				onIncrease={() => setGreen(Green + value)}
				onDecrease={() => setGreen(Green - value)}
			/>

			<View
				style={{
					height: 100,
					width: 100,
					backgroundColor: `rgb(${Red},${Green},${Blue})`,
				}}
			/>
		</View>
	);
};

const SetColor = (color, Change) => {
	// Color == "REd", "Green", "Blue"
	// Change == += 15 / -=15

	if (color == "Red") {
		if (Red + Change > 255 || Red + Change < 0) {
			return;
		} else {
			setRed(Red + Change);
		}
	}
};

const styles = StyleSheet.create({});

export default SquareScreen;
