import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return <View>
    <Text style={styles.text}>Welcome To English Ease</Text>

    <Button 
    title ="Alphabets" 
    onPress = {() => navigation.navigate('Alphabet') } /> 

    {/* <Button title= "Go to List components"
    onPress = {() => navigation.navigate('List')} /> */}

    <Button title = "Animal Image 🦁" 
    onPress = {() => navigation.navigate('Animal')}  />
    {/* Can use text, image, icon ... */}
    {/* <TouchableOpacity onPress= {() => navigation.navigate('List')} >
      <Text>Go to List Demo</Text>
      <Text>List Combination</Text>
      <Text>Go to List Demo</Text>
      <Text>Go to List Demo</Text>
    </TouchableOpacity> */}
    </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'green'
  },
  
});



export default HomeScreen;
