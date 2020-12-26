import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Error({ error }) {
    return (

        <View style={styles.container}>
            <Text style={styles.text}>{error}</Text>
        </View>

    );



}

const styles = StyleSheet.create({
    container:{
        paddingVertical:8
    },
    text: {
        color: 'red',
        fontWeight: 'bold',

    }
});