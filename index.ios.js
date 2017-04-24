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
  ListView,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { Button } from 'react-native-elements';

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
      <View style={{ padding: 10, backgroundColor: 'white', margin: 5 }} >
        <Image source={pic} style={{width: 156, height: 100}} />
        <Text style={styles.Img01}>{label}:おっぱ</Text>
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

class Lists extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows([
        '美味しかい','美味しかな','美味しかな','美味しかな','美味しかな','美味しかな','美味しかな','美味しかな','美味しかな','美味しかな','美味しかな','美味しかな','美味しかな',
      ])
    }
  }
  render() {
    return(
      <ListView
        dataSource={this.state.dataSource}
        style={{ flex: 1, paddingTop: 20, backgroundColor: '#dddddd' }}
        contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
        renderRow={(rowData) => <Img01 label={rowData} />}
        />

    )
  }
}

class ScrollBox extends Component {
  render() {
    return(
      <ScrollView>
        <Lists />
      </ScrollView>
    )
  }
}

export default class first_example extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
          <Button
            raised
            buttonStyle={{backgroundColor: 'steelblue', borderRadius: 8, padding:20}}
            textStyle={{textAlign: 'center',fontWeight:'bold',fontSize:20}}
            title={`サインアップ`} />
        </View>
        <View style={styles.slide2}>
          <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
            <FlexBox />
            <InputBox/>
            <ScrollBox />
          </View>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
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
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

AppRegistry.registerComponent('first_example', () => first_example);
