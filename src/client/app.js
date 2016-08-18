import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Map from './components/MapComponent.js';

class Routes extends Component {
  
  constructor(props, context) {
    super(props, context);
    this.state = {
      initialPosition: {
        latitude: 40.740824, 
        longitude: -73.887696,
        latitudeDelta: 0.022,
        longitudeDelta: 0.022,
      }
    }
  }

  componentDidMount() {
    let context = this;
    navigator.geolocation.getCurrentPosition(function(position) {
      let location = {
        latitude: position.coords.latitude, 
        longitude: position.coords.longitude,
        latitudeDelta: 0.022,
        longitudeDelta: 0.022,
      };
      context.setState({initialPosition: location});

    }, function(err) {
      console.log('error getting current geolocation', err);
    },
    { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
  }

  configureScene( route, routeStack ) {
    return Navigator.SceneConfigs.FloatFromLeft;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navigator
          configureScene={ this.configureScene }
          initialRoute={{ component: 'Map', initialPosition: this.state.initialPosition }}
          renderScene={ this.renderScene }
        />
      </View>
    )
  }

  renderScene( route, navigator ) {
    if( route.component === 'Map') {
      return (
        <Map navigator={ navigator } initialPosition={ route.initialPosition }/>
      )
    }
  }

}

module.exports = Routes;