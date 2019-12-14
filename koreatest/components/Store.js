import { Image, StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import Button from './Button';
import getImageFromname from '../utils/getImageFromname';

export default class Store extends React.Component {
  static propTypes = {
    storename: PropTypes.string.isRequired,
    opentime: PropTypes.number.isRequired,
    endtime: PropTypes.number.isRequired,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    onPressLinkText: () => {},
  };

  render(){
    const {storename, opentime, endtime, onPress} = this.props;
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={getImageFromname(storename)} />
        <View style={styles.text}>
          <Text>{storename}</Text>
          <Text>{opentime}:00~{endtime}:00</Text>
          <View style={styles.buttonGroup}>
            <Button
              small
              title='예약'
              color='red'/>
            <Button
              small
              title='보기'
              color='blue'/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
  text: {
    paddingHorizontal: 10,
    marginTop: 10,
    flexDirection: 'column',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
