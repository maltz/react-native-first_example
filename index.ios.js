/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

class Img01 extends Component {
  constructor(props) {
    super(props)
    this.state = {showText: true}
    setInterval(() => {
      this.setState({ showText: !this.state.showText })
    }, 1000)
  }

  render() {
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    let label = this.state.showText ? this.props.label : '美味しいよ'
    return (
      <View>
        <Image source={pic} style={{width: 200,height: 120}} />
        <Text style={styles.Img01}>{label}</Text>
      </View>
    )
  }
}

export default class first_example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          編集するにはおおお index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Img01 label="バナナだよ" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  Img01: {
    color: 'red'
  }
});

AppRegistry.registerComponent('first_example', () => first_example);
