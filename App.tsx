/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView, StyleSheet,
} from 'react-native';
import Calculatrice from './component/Calculatrice';




function App(): JSX.Element {

  return (
    <SafeAreaView style={styles.background}>
      <Calculatrice/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor:"black",
  }
});

export default App;
