import React from 'react';
import { View, Text } from 'react-native';

import PropTypes from 'prop-types';

function MyComp({ title = 'Hello' }) {
  return <Text style={{ color: 'black' }}>{title}</Text>;
}

MyComp.propTypes = {
  title: PropTypes.string.isRequired,
};

function App() {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 50,
        backgroundColor: 'papayawhip',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <MyComp title="Hello World" />
    </View>
  );
}

export default App;
