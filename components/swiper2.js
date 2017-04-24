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
  SegmentedControlIOS,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { Button, ButtonGroup } from 'react-native-elements';

class SexButton extends Component {
  constructor () {
  super()
  this.state = {
    selectedIndex: 2
  }
  this.updateIndex = this.updateIndex.bind(this)
}
updateIndex (selectedIndex) {
  this.setState({selectedIndex})
}

render () {
  const buttons = ['女性', '男性']
  const { selectedIndex } = this.state
  return (
    <ButtonGroup
      onPress={this.updateIndex}
      selectedIndex={selectedIndex}
      buttons={buttons}
      selectedBackgroundColor='steelblue'
      selectedTextStyle={{color:'white'}}
      containerStyle={{height: 40, width:250}} />
  )
}
}

class SexSegment extends Component {
  render() {
    return (
      <View style={{marginBottom: 10}}>
        <SegmentedControlIOS values={['One', 'Two']} />
      </View>
    );
  }
}

export default class swiper1 extends Component {
  render() {
    return (
      <View style={styles.slide1}>
        <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
          <Text style={styles.text}>あなたのプロフィール22</Text>
        </View>
        <View style={{flex: 3,justifyContent: 'center',alignItems: 'center'}}>
          <SexButton />
          <Button
            raised
            buttonStyle={{backgroundColor: 'steelblue', borderRadius: 4, padding:20}}
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
