/**
 * App.js — Entry point for the Resume/CV starter app.
 * All navigation logic lives in src/navigation/AppNavigator.js.
 */

import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <>
      <AppNavigator />
      <StatusBar style="light" />
    </>
  );
}
