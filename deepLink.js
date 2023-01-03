import * as Linking from 'expo-linking';

async function deepLink () {
	// Linking.makeUrl()
  const addressPort = '127.0.0.1:19000';
  const urlPrefix = 'exp://' + addressPort;
  // Expo client: `exp://ADDRESS:PORT`
  // Standalone: `myapp://`
  await Linking.openURL(urlPrefix).then(() => {
    console.log('urlPrefix: ', urlPrefix);
  }).catch(() => alert('Failed deep linking'))
  
}