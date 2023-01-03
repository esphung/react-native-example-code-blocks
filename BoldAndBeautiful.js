import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BoldAndBeautiful = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text style={styles.baseText}>
      I am bold
      <Text
        onPress={() => {
          alert('');
        }}
        style={styles.innerText}> and red</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold'
  },
  innerText: {
    color: 'red'
  }
});

export default BoldAndBeautiful;
