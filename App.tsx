/**
 * App.tsx — Entry point for the Resume/CV starter app.
 */

import AppNavigator from '@/navigation/AppNavigator';
import { PortalHost } from '@rn-primitives/portal';
import { StatusBar } from 'expo-status-bar';
import '../global.css';

export default function App() {
  return (
    <>
      <AppNavigator />
      <PortalHost />
      <StatusBar style="light" />
    </>
  );
}
