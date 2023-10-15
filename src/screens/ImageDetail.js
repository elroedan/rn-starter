import React from "react";
import { Button } from "react-native";
import {View, Text, StyleSheet, Image} from "react-native";

const ImageDetail = ({imageSrc, scoreImage, title}) => {
    return <View>
        <Image 
            source={imageSrc}
            style={{width: 200, height:200}}
        />
        <Text>{title} {scoreImage}</Text>
        </View>
};

const styles = StyleSheet.create();

export default ImageDetail;