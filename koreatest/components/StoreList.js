import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import Store from './Store';
import getImageFromname from '../utils/getImageFromname';

const keyExtractor = ({storename}) => storename.toString();
export default class StoreList extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        storename: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  renderItem = ({ item: {storename}}) => {
    return (
      <Store
        storename={storename}
        opentime={9}
        endtime={18}
      />
    );
  };


  render() {
    const {items} = this.props;

    return (
      <FlatList
        data={items}
        renderItem={this.renderItem}
        keyExtractor={keyExtractor}
      />
    );
  }
}
