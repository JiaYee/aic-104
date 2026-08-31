/**
 * AppNavigator.tsx
 * -----------------
 * Sets up React Navigation with a native stack for two screens:
 *   1. Profile (home)
 *   2. Experience
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import ExperienceScreen from '../screens/ExperienceScreen';
import type { RootStackParamList } from '../types/navigation';
import { colors } from '../styles/theme';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: '600' },
        }}
      >
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'My Resume' }}
        />
        <Stack.Screen
          name="Experience"
          component={ExperienceScreen}
          options={{ title: 'Experience' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
