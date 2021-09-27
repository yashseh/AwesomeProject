/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [create, setCreate] = useState(false);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      {create ? (
        <></>
      ) : (
        <>
          <Button title="Sign in" />
        </>
      )}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(32, 53, 70)',
    // alignItems:'center',
    padding: 20,
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
