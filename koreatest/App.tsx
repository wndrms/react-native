import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import Constants from 'expo-constants';

import StoreList from './components/StoreList';
import NavigationBar from './components/NavigationBar';

const stores = [
  {id: 1, storename: 'Darak'},
  {id: 2, storename: 'Choonja'},
];
export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <NavigationBar title="Home"/>
        <View style={styles.storecontainer}>
          <StoreList items={stores}/>
        </View>
      </SafeAreaView>
    );
  }
}
const platformVersion =
  Platform.OS === 'ios'
    ? parseInt(Platform.Version, 10)
    : Platform.Version;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:
      Platform.OS === 'android' || platformVersion <11
        ? Constants.statusBarHeight
        : 0,
  },
  storecontainer: {
    flex: 1,
    alignItems: 'stretch',
  }
});
