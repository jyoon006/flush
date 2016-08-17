import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import MapView from 'react-native-maps';

class MapComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      initialPosition: {
      }
    };
  }

  componentDidMount() {
    let context = this;
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log('position', position);
      var location = {
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

  render() {
    return(
      <View>
        <MapView
          style={styles.map}
          region={this.state.initialPosition} >
          <MapView.Marker
            coordinate={this.state.initialPosition}
            title='testing marker'
            description='testing testing'
          />
        </MapView>
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
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 400,
  }
});

module.exports = MapComponent;