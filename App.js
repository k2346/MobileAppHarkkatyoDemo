import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  stretch,
} from 'react-native';

export default class App extends Component<{}> {
    
  constructor(props) {
    super(props);
    this.state = {clicker: 0};
    this.clicked = this.clicked.bind(this);
    this.clear = this.clear.bind(this);
  }
  
  clicked(math) {
    console.log(math);
  this.setState({clicker: (math == '+') ? this.state.clicker + 1 : this.state.clicker - 1});
  }
  
  clear() {
    this.setState({clicker: 0});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.count}>
          {this.state.clicker}
        </Text> 
      <Button title='+' color={colorAdd} onPress={() => this.clicked('+')}></Button>
      <Button title='-' color={colorMinus} onPress={() => this.clicked('-')}></Button>
      <Button title='Clear' color={colorClear} onPress={this.clear}></Button>
      </View>
    ); 
      
  }
} 

//Colors
let colorAdd = '#008067';
let colorMinus = '#800045';
let colorClear = '#004f80';
let colorBack = '#1f2229';
let colorText = '#FFFF';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colorBack,  
  },
    
  buttonContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
    
  count: {
    textAlign: 'center',
    fontSize: 35,
    margin: 10,
    color: colorText,
  },
    
});
