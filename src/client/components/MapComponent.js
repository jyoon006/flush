import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import {vw, vh, vmin, vmax} from '../viewport.js';
import Navbar from './NavbarComponent.js';


class MapComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      initialPosition: {}
    };
    this.addPlace = this.addPlace.bind(this);

  }

  componentWillReceiveProps(props) {
    this.setState({ initialPosition: props.initialPosition });
  }

  addPlace() {
    this.props.navigator.push({
      component: 'AddPlace',
      passProps: {
        navigator: this.props.navigator,
        initialPosition: this.state.initialPosition
      }
    })
  }

  render() {
    return(
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.initialPosition} >
          <MapView.Marker
            coordinate={this.state.initialPosition}
            title='testing marker'
            description='testing testing'
            image={require('../assets/pin.png')}
          />
        </MapView>
        <View style={styles.createButton}>
          <TouchableOpacity onPress={ this.addPlace }>
            <Text style={styles.createButtonText}>
              +
            </Text>
          </TouchableOpacity>  
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  createButton: {
    top: 78 * vh,
    left: 80 * vw,
    width: 60,
    height: 60,
    backgroundColor: '#96C0CE',
    borderRadius: 50,
  },
  createButtonText: {
    backgroundColor: 'transparent',
    fontSize: 30,
    color: 'white',
    margin: 10,
    textAlign: 'center',
  },

  map: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 90* vh,
  }
});

module.exports = MapComponent;