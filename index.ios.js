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
  TextInput,
  ScrollView,
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

class FlexBox extends Component {
  render() {
    return(
      <View style={{height: 100,  flexDirection: 'row' }}>
        <View style={{flex: 1, backgroundColor: 'steelblue',justifyContent: 'space-between'}} >
          <Text>aa</Text>
          <Text>aa</Text>
          <Text>aa</Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'skyblue',justifyContent: 'center'}} >
          <Text>aa</Text>
          <Text>aa</Text>
          <Text>aa</Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'steelblue',justifyContent: 'space-between', alignItems: 'center'}} >
          <Text>aa</Text>
          <Text>aa</Text>
          <Text>aa</Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'skyblue',justifyContent: 'flex-end', alignItems: 'flex-start'}} >
          <Text>aa</Text>
          <Text>aa</Text>
          <Text>aa</Text>
        </View>
      </View>
    )
  }
}

class InputBox extends Component {
  constructor(props) {
    super(props)
    this.state = {text: ''}
  }
  render() {
    return(
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Tyoe here"
          onChangeText={(text) => this.setState({text})}
        />
        <Text>
          {this.state.text}
        </Text>
      </View>
    )
  }
}

class ScrollBox extends Component {
  render() {
    return(
      <ScrollView>
      <Text>
        ScrollMe
      </Text>
      {[1,2,3,4,5,6,7,8,9,10].map(function(val) {return <Img01 label={val} />}  )}
      </ScrollView>
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
        <FlexBox />
        <InputBox/>
        <ScrollBox />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
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
