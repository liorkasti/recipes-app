/* origin App.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/navigations/AppNavigation';

export default function App() {
  return (
     <AppContainer />
  );
}
 */

import React, { useEffect } from 'react';
import { StyleSheet, View, StatusBar, YellowBox } from 'react-native';
import Orientation from 'react-native-orientation-locker';

import AppContainer from './src/navigations';

const App = () => {

  useEffect(() => {

    setTimeout(() => {
      Orientation.lockToPortrait();
    });

    return onOpenIndex();
  }, []);

  const onOpenIndex = () => {
    console.disableYellowBox = true;
  }

  return (
    <View>
      {/* <StatusBar backgroundColor={transparent} animated={true} hidden={true}></StatusBar> */}
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <AppContainer />
    </View>
  );
}

export default App;