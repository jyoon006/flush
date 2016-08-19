import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import MapView from 'react-native-maps';
import {vw, vh, vmin, vmax} from '../viewport.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';

class AddPlace extends Component {
  
  constructor() {
    super();
    this.handleBackButton = this.handleBackButton.bind(this);
  }

  handleBackButton() {
    this.props.navigator.pop();
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.deviceGap}></View>
        <View style={styles.navbar}>
          <TouchableOpacity onPress={ this.handleBackButton }>
            <IonIcon name="md-arrow-round-back" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <Text> THIS IS ADD PLACE COMPONENT </Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  deviceGap: {
    backgroundColor: '#00698C',
    height: 3 * vh,
  },
  navbar: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#009ACD',
    height: 7 * vh,
    paddingLeft: 2 * vw
  }
});

module.exports = AddPlace;