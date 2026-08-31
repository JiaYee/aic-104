/**
 * AppNavigator.tsx
 * -----------------
 * Bottom tab navigator: Profile, Skills, Work (timeline).
 */

import ProfileScreen from '@/screens/ProfileScreen';
import SkillsScreen from '@/screens/SkillsScreen';
import WorkExperienceScreen from '@/screens/WorkExperienceScreen';
import type { RootTabParamList } from '@/types/navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, type Theme } from '@react-navigation/native';
import { Briefcase, Sparkles, UserRound } from 'lucide-react-native';

const Tab = createBottomTabNavigator<RootTabParamList>();

const navTheme: Theme = {
  dark: false,
  colors: {
    primary: 'hsl(221 83% 53%)',
    background: 'hsl(210 40% 98%)',
    card: 'hsl(0 0% 100%)',
    text: 'hsl(222 47% 11%)',
    border: 'hsl(214 32% 91%)',
    notification: 'hsl(0 84% 60%)',
  },
  fonts: {
    regular: { fontFamily: 'System', fontWeight: '400' },
    medium: { fontFamily: 'System', fontWeight: '500' },
    bold: { fontFamily: 'System', fontWeight: '700' },
    heavy: { fontFamily: 'System', fontWeight: '800' },
  },
};

export default function AppNavigator() {
  return (
    <NavigationContainer theme={navTheme}>
      <Tab.Navigator
        initialRouteName="Profile"
        screenOptions={{
          headerStyle: { backgroundColor: 'hsl(221 83% 53%)' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: '600' },
          tabBarActiveTintColor: 'hsl(221 83% 53%)',
          tabBarInactiveTintColor: 'hsl(215 16% 47%)',
          tabBarStyle: {
            backgroundColor: 'hsl(0 0% 100%)',
            borderTopColor: 'hsl(214 32% 91%)',
            height: 60,
            paddingTop: 6,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
            marginBottom: 6,
          },
        }}
      >
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'My Resume',
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size, focused }) => (
              <UserRound color={color} size={size} strokeWidth={focused ? 2.5 : 2} />
            ),
          }}
        />
        <Tab.Screen
          name="Skills"
          component={SkillsScreen}
          options={{
            title: 'Skills',
            tabBarIcon: ({ color, size, focused }) => (
              <Sparkles color={color} size={size} strokeWidth={focused ? 2.5 : 2} />
            ),
          }}
        />
        <Tab.Screen
          name="Work"
          component={WorkExperienceScreen}
          options={{
            title: 'Experience',
            tabBarLabel: 'Work',
            tabBarIcon: ({ color, size, focused }) => (
              <Briefcase color={color} size={size} strokeWidth={focused ? 2.5 : 2} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
