/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, ImageBackground, Image, Text} from 'react-native';

const Splash = props => {
  setTimeout(() => {
    props.navigation.replace('Login');
  }, 2000);

  return (
    <ImageBackground
      style={Styles.imageStyle}
      source={require('./BoldBackground.jpg')}>
      <View style={Styles.container}>
        <Image
          style={Styles.logoStyle}
          source={require('./BoldLogo-removebg-preview.png')}
        />
        <Text style={Styles.title}> BOLD FINANCE</Text>
      </View>
    </ImageBackground>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  logoStyle: {
    height: 300,
    width: 300,
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Splash;
