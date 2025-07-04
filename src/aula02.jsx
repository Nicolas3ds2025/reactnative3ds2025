import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Aula02 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Aula02</Text>
        <Image 
          source={{ uri:('https://s2-techtudo.glbimg.com/wvbwTGY1XvT076sVA221uo-UNWM=/0x0:2047x1193/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/5/z/JnBUn2Tq21aTTcMveShQ/d8058lwueaar1ew.jfif')}}
          style={{ width: 50, height: 50}}
        />

        <View style={ styles.caixa }>1</View>
        <View style={ styles.caixa }>2</View>
        <View style={ styles.caixa }>3</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  caixa: {
    width: '80%',
    height: 100,
    backgroundColor: 'green',
    borderRadius: 5,
    margin: 5
  }



});

export default Aula02;
