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
import { Button, ButtonGroup, FormLabel, FormInput } from 'react-native-elements';

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

class SignUpForm extends Component {
  constructor(props) {
    super(props)
    this.state = {email: '', password:'', password_confirmation:'',sex:'female',birth_year: 1960}

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    this.setState({email: '', password:'', password_confirmation:'',sex:'female',birth_year: 1960});
    event.preventDefault();
  }

  render() {
    return (
      <View>
        <Text>
        {this.state.email},
        {this.state.password}
        </Text>
        <Text>
          Email
        </Text>
        <TextInput
          style={{height: 40, width: 200, backgroundColor: '#ffffff', borderColor: 'gray', borderWidth: 1,paddingLeft:20}}
          placeholder="Type email"
          autoFocus={true}
          onChangeText={(text) => this.setState({email:text})}
        />
        <Text>
          Password
        </Text>
        <TextInput
          style={{height: 40, width: 200, backgroundColor: '#ffffff', borderColor: 'gray', borderWidth: 1,paddingLeft:20}}
          placeholder="Type password"
          onChangeText={(text) => this.setState({password:text})}
        />
        <Button
          raised
          buttonStyle={{backgroundColor: 'steelblue', borderRadius: 1, padding:20}}
          textStyle={{textAlign: 'center',fontWeight:'bold',fontSize:20}}
          title={`登録`}
          onPress={this.handleSubmit}
          />
      </View>
    )
  }
}

export default class swiper1 extends Component {
  render() {
    return (
      <View style={styles.slide1}>
        <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
          <Text style={styles.text}>あなたのプロフィール</Text>
        </View>
        <View style={{flex: 3,justifyContent: 'center',alignItems: 'center'}}>
          <SignUpForm />
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
