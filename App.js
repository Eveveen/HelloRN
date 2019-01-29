/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import Bananas from './ex01';
import Touchables from './example/touch';
import ScrollView from './example/scroll';
import FlatListBasics from './example/flatList';
import SectionList from './example/section'
import FeachExample from './example/fetch';
import MovieList from './movie/movieList';
import SampleAppMovies from './movie/movieFlat';
import IScrolledDownAndWhatHappenedNextShockedMe from './albums/picture';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


// type Props = {};
export default class App extends Component {
  render() {
    return (
      <View style={styles.myText}>
        <IScrolledDownAndWhatHappenedNextShockedMe />
        {/* <SampleAppMovies /> */}
        {/* <MovieList /> */}
        {/* <FeachExample /> */}
        {/* <SectionList /> */}
        {/* <FlatListBasics /> */}
        {/* <ScrollView /> */}
        {/* <Touchables /> */}
        {/* <PizzaTranslator /> */}
        {/* <Text>哈哈，终于能够成功运行了，继续加油！</Text> */}
        {/* <Button
          onPress={() => {
            Alert.alert("你点击了按钮！");
          }}
          title="点我！"
        /> */}
        {/* <ButtonBasics /> */}
      </View>
      // 试试去掉父View中的`flex: 1`。
      // 则父View不再具有尺寸，因此子组件也无法再撑开。
      // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
      // <View style={{ flex: 1 }}>
      //   <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
      //   <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
      //   <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
      // </View>
      // <View style={{ alignItems: 'center' }}>
      //   <Bananas />
      //   <Greeting name='Rexxar' />
      //   <Greeting name='Jaina' />
      //   <Greeting name='Valeera' />

      //   {/* <Blink text='I love to blink' />
      //   <Blink text='Yes blinking is so great' />
      //   <Blink text='Why did they ever take this out of HTML' />
      //   <Blink text='Look at me look at me look at me' /> */}

      //   <Text style={styles.red}>just red</Text>
      //   <Text style={styles.bigblue}>just bigblue</Text>
      //   <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
      //   <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>

      //   <View style={{ width: 50, height: 100, backgroundColor: 'powderblue' }} />
      //   <View style={{ width: 100, height: 100, backgroundColor: 'skyblue' }} />
      //   <View style={{ width: 150, height: 250, backgroundColor: 'steelblue' }} />
      // </View>
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>Hello</Text>
      //   <Text style={styles.instructions}>To get started, edit App.js</Text>
      //   <Text style={styles.instructions}>{instructions}</Text>
      // </View>
    );
  }
}

class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="This looks great!"
          />
          <Button
            onPress={this._onPressButton}
            title="OK!"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({ text })}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
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
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  myText: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
