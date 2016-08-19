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

class AddPlace extends Component {
  
  constructor() {
    super();
  }

  render() {
    return(
      <View style={styles.heading}>
        <Text> THIS IS ADD PLACE COMPONENT </Text>
      </View>
    );
  }

}

const styles = {
  heading: {
    top: 50 * vh
  }
}

module.exports = AddPlace;