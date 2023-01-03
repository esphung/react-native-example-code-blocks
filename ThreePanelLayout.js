import React from 'react';

import {
  View,
  SafeAreaView,
} from 'react-native';

const ThreePanelLayout = () => {
  const view = (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View style={{ flex: 0.3, backgroundColor: 'powderblue' }} />
      <View style={{ flex: 1, backgroundColor: 'skyblue' }} />
      <View style={{ flex: 0.3, backgroundColor: 'steelblue' }} />

    </SafeAreaView>
  );
  return view;
};

export default ThreePanelLayout;
