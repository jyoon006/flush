import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
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
        <View style={styles.deviceGap}></View>
        <View style={styles.navbar}>
          <TouchableOpacity >
            <Icon name="bars" size={30} color="white" />
          </TouchableOpacity>
        </View>
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
            <IonIcon name="md-add-circle" size={70} color="#96C0CE" />
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
  },
  createButton: {
    top: 78 * vh,
    left: 80 * vw,
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