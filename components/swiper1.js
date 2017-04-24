import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  ListView,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { Button } from 'react-native-elements';

export default class swiper1 extends Component {
  render() {
    return (
      <View style={styles.slide1}>
        <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
          <Text style={styles.text}>Dempro</Text>
        </View>
        <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
          <Button
            raised
            buttonStyle={{backgroundColor: 'steelblue', borderRadius: 1, padding:20}}
            textStyle={{textAlign: 'center',fontWeight:'bold',fontSize:20}}
            title={`サインアップページへ`} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    flexDirection: 'column'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});
