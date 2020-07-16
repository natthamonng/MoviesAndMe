import React from 'react';
import { Provider } from 'react-redux';
import Store from './Store/configreStore';
import { StyleSheet } from 'react-native';
import Navigation from './Navigation/Navigation';

export default function App() {
  return (
    <Provider store={Store}>
        <Navigation/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
