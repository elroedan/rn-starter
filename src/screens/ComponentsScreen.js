import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () =>
{   
    // Save data into a variable. 
    const greeting = "Hi! My name is Elroe";

    // Save the JSX into a variable. 
    const conclusion = <Text>Helloooooooo</Text>;
    return (
        <View>
        <Text style = {styles.headers}>Getting started with react native!</Text>
        
        {/* Display the text. */}
        <Text style = {styles.textStyle}>{greeting}</Text>

        {/* Display the variable holding the JSX. */}
        {conclusion}
        </View>);
};

const styles = StyleSheet.create(
{
    textStyle: 
    {
        fontSize: 30,
    },

    headers:
    {
        fontSize: 45,
    }
});

export default ComponentsScreen;