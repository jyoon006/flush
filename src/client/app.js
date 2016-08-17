import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Map from './components/MapComponent.js';

class Routes extends Component {
  
  configureScene( route, routeStack ) {
    return Navigator.SceneConfigs.FloatFromLeft;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navigator
          configureScene={ this.configureScene }
          initialRoute={{ component: 'Map' }}
          renderScene={ this.renderScene }
        />
      </View>
    )
  }

  renderScene( route, navigator ) {
    if( route.component === 'Map') {
      return (
        <Map navigator={ navigator } />
      )
    }
  }

}

module.exports = Routes;