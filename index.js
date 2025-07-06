/**
 * @format
 */

import 'react-native-polyfill-globals/auto';
import 'web-streams-polyfill';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
