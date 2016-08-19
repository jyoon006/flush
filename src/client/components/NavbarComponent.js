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
      <View>
        <View style={styles.deviceGap}></View>
        <View style={styles.navbar}>
          <TouchableOpacity >
            <Icon name="bars" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  deviceGap: {
    backgroundColor: '#00698C',
    height: 3 * vh,
  },
  navbar: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#009ACD',
    height: 7 * vh,
    paddingRight: 5 * vw
  }
}

module.exports = Navbar;