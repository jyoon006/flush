import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {vw, vh, vmin, vmax} from '../viewport.js';
import Icon from 'react-native-vector-icons/FontAwesome';

class Navbar extends Component {
  
  render() {
    return(
      <View style={styles.navbar}>
        <Icon name="home" size={30} color="white" />
      </View>
    );
  }
}

const styles = {
  navbar: {
    backgroundColor: 'black',
    height: 7 * vh,
    top: 3 * vh,
  }
}

module.exports = Navbar;