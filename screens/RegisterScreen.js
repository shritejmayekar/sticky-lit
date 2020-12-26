import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Error } from '../components/Errror';
import { FilledButton } from '../components/FilledButton';
import { Heading } from '../components/Heading';
import { IconButton } from '../components/IconButton';
import { Input } from '../components/Input';

export function RegisterScreen({navigation}) {
    return (
        <View style={styles.container}>
             <IconButton
              style={styles.closeIcon} 
              name={'close-circle-outline'} 
                onPress={()=> {


                    navigation.pop();
                }}
                
                
                />

            <Heading style={styles.title}>REGISTRATION</Heading>
            <Error error={''} />
            <Input style={styles.input} placeholder={'Email'} keyBoardType={'email-address'} />
            <Input style={styles.input} placeholder={'Password'} secureTextEntry />
            <FilledButton
                title={'Registration'}
                style={styles.loginButton}
                onPress={() => { }}

            />



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 120,
        alignItems: 'center',
        padding: 16
    },
    title: {
        marginBottom: 48,

    },
    input: {
        marginVertical: 8
    },
    loginButton: {
        marginVertical: 32,

    },
     closeIcon:{
         position:'absolute',
         top:60,
         right:16,

     }
});
