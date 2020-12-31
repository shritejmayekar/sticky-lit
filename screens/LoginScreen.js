import React from 'react';
import {StyleSheet,Image} from 'react-native';

import {Heading} from '../components/Heading';
import {Input} from '../components/Input';
import {FilledButton} from '../components/FilledButton';
import {TextButton} from '../components/TextButton';
import {Error} from '../components/Error';
import {AuthContainer} from '../components/AuthContainer';
import {AuthContext} from '../contexts/AuthContext';
import {Loading} from '../components/Loading';

export function LoginScreen({navigation}) {
  const {login} = React.useContext(AuthContext);
  const [email, setEmail] = React.useState('shritej');
  const [password, setPassword] = React.useState('shri@123');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  return (
    <AuthContainer>
      <Image
      style={styles.imageLogo}
      source={require('../assets/eStoreLogo.png')}
    />
      <Heading style={styles.title}>LOGIN</Heading>
      <Error error={error} />
      <Input
        style={styles.input}
        placeholder={'Username'}
        keyboardType={'email-address'}
        value={email}
        onChangeText={setEmail}
      />
      <Input
        style={styles.input}
        placeholder={'Password'}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <FilledButton
        title={'Login'}
        style={styles.loginButton}
        onPress={async () => {
          try {
            setLoading(true);
            await login(email, password);
          } catch (e) {
            setError(e.message);
            setLoading(false);
          }
        }}
      />
      <TextButton
        title={'Have u an account? Create one'}
        onPress={() => {
          navigation.navigate('Registration');
        }}
      />
      <Loading loading={loading} />
    </AuthContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 48,
    color:'purple',
  },
  input: {
    marginVertical: 8,
  },
  loginButton: {
    marginVertical: 32,
  },
  imageLogo: {
    width: 150,
    height: 150,
  },
});
