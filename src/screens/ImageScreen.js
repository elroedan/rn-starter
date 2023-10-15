import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from "./ImageDetail";




const ImageScreen = () => {
    return <View>
        
        <ImageDetail scoreImage = '6' imageSrc = {require('../../Images/tree-838667_1280.jpg')} title = "Forest"/>
        <ImageDetail scoreImage = '6' imageSrc = {require('../../Images/tree-838667_1280.jpg')} title = "Lake"/>
        
    </View>;
     
}

const styles = StyleSheet.create({});

export default ImageScreen;