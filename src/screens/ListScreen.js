import React from "react";
import { View, Text, StyleSheet, FlatList} from "react-native";

const ListScreen = () =>
{
    const friends = 
    [
        {name: 'Friend #1',age: 25},
        {name: 'Friend #2',age: 25},
        {name: 'Friend #3',age: 25},
        {name: 'Friend #4',age: 25},
        {name: 'Friend #5',age: 25},
        {name: 'Friend #6',age: 25},
        {name: 'Friend #7',age: 25},
        {name: 'Friend #8',age: 25}
    ];
    return (
    <FlatList 
        // This changes the display to horizontally
        // horizontal

        // Hide the scroll bay
        // showsHorizontalScrollIndicator = {false}
        data= {friends} 
        renderItem={({item}) => {
        return <Text style = {styles.textStyle}>{item.key} -----{item.name} ----Age {item.age}</Text>;
        }}
        />);
};


const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        
    }
});

export default ListScreen;