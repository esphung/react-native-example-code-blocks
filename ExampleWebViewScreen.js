import React from 'react';

import {View, SafeAreaView} from 'react-native';

import Config from 'react-native-config'

import {WebView} from 'react-native-webview';

import {PrimaryScreenView, HeaderComponent} from 'components/Shared';

import colors from 'colors';

function MyWebComponent({uri, onNavigationStateChange}) {
  return (
    <WebView
      style={{flex: 1}}
      source={{uri: uri ?? 'https://reactnative.dev/'}}
      onNavigationStateChange={onNavigationStateChange}
    />
  );
}

const ExampleWebViewScreen = ({navigation, route}) => {
  const {uri} = route?.params ?? {uri: 'https://google.com'};
  const onNavigationStateChange = ({url: returnUrl, canGoBack}) => {
    console.debug('WATCH THIS TO KNOW WHAT TO DO ===> returnUrl: ', returnUrl);
  };

  const view = (
    <PrimaryScreenView barStyle="dark-content" backgroundColor={colors.white} style={{backgroundColor: colors.white}}>
      <HeaderComponent />
      <View style={{flex: 1, backgroundColor: 'skyblue'}}>
        <MyWebComponent uri={uri} onNavigationStateChange={onNavigationStateChange} />
      </View>
    </PrimaryScreenView>
  );
  return view;
};

export default ExampleWebViewScreen;
