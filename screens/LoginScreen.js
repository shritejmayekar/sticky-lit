import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Error } from '../components/Errror';
import { FilledButton } from '../components/FilledButton';
import { Heading } from '../components/Heading';
import { Input } from '../components/Input';
import { TextButton } from '../components/TextButton';

export function LoginScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Heading style={styles.title}>LOGIN</Heading>
            <Error error={''} />
            <Input style={styles.input} placeholder={'Email'} keyBoardType={'email-address'} />
            <Input style={styles.input} placeholder={'Password'} secureTextEntry />
            <FilledButton 
                title={'Login'} 
                style={styles.loginButton}                 
                onPress ={() => {

                   
                }}
                
                />
                <TextButton
                title={'Have you have account ? Create One'}
                onPress={() => {

                    navigation.navigate('Registration');
                }}
                />


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:120,
        alignItems: 'center',
        padding:20
    },
    title:{
        marginBottom:48,

    },
    input: {
        marginVertical:8
    },
    loginButton:{
        marginVertical:32,

    }
});
