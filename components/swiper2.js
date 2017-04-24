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
  Alert,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { Button, ButtonGroup, FormLabel, FormInput } from 'react-native-elements';

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

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangeSex = (event) => {
    if (event.nativeEvent.selectedSegmentIndex == 0) {
      this.setState({
        sex: 'female'
      })
    } else if (event.nativeEvent.selectedSegmentIndex == 1)  {
      this.setState({
        sex: 'male'
      })
    }
  };

  handleSubmit(event) {
    event.preventDefault();
    Alert.alert(this.state.email+','+this.state.sex)
  }

  render() {
    return (
      <View>
        <Text>
          {this.state.email},
          {this.state.password},
          {this.state.password_confirmation}
        </Text>

        <Text>
          性別
        </Text>
        <View style={{marginBottom: 10}}>
          <SegmentedControlIOS
            values={['女', '男']}
            selectedIndex={0}
            onChange={this.onChangeSex}
          />
        </View>

        <Text>
          Email
        </Text>
        <TextInput
          style={{height: 40, width: 200, backgroundColor: '#ffffff', borderColor: 'gray', borderWidth: 1,paddingLeft:20}}
          placeholder="Type email"
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

        <Text>
          Password確認
        </Text>
        <TextInput
          style={{height: 40, width: 200, backgroundColor: '#ffffff', borderColor: 'gray', borderWidth: 1,paddingLeft:20}}
          placeholder="Type password"
          onChangeText={(text) => this.setState({password_confirmation:text})}
        />

        <Button
          raised
          style={{marginTop:20}}
          buttonStyle={{backgroundColor: 'steelblue', borderRadius: 1, padding:10}}
          textStyle={{textAlign: 'center',fontWeight:'bold',fontSize:14}}
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
