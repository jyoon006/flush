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
      initialPosition: {}
    };

  }

  componentWillReceiveProps(props) {
    this.setState({ initialPosition: props.initialPosition });
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