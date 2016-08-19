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
            image={require('../assets/pin.png')}
          />
        </MapView>
         
            <TouchableOpacity style={styles.addButton}>
              <Icon name="plus-circle" size={60} color="#009ACD"/>
            </TouchableOpacity>  
       
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
  addButton:{
    width: 20 * vw,
    color:'#fff',
    textAlign:'center',
    top: 90 * vh,
    left: 80 * vw
  },
  map: {
    position: 'absolute',
    top: 10 * vh,
    left: 0,
    right: 0,
    bottom: 0,
    height: 90* vh,
  }
});

module.exports = MapComponent;