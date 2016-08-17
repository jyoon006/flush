import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class MapComponent extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>THIS IS MAP COMPONENT</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

module.exports = MapComponent;