import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import NavigationService from '../navigation/NavigationService';

class HeaderMenuButton extends Component {
  onPress() {
    NavigationService.toggleDrawer();
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.iconStyle}
        onPress={this.onPress.bind(this)}
      >
        <Icon name="md-menu" type="ionicon" />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  iconStyle: {
    marginLeft: 20
  }
});

export default HeaderMenuButton;
