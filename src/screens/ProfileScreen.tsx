/**
 * ProfileScreen.tsx
 * ------------------
 * Home screen showing a profile photo placeholder, name, bio, and a button
 * that navigates to the Experience screen.
 */

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { profile } from '../data/resumeData';
import type { RootStackParamList } from '../types/navigation';
import { colors, spacing } from '../styles/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export default function ProfileScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      {/* Profile section — centered vertically using Flexbox */}
      <View style={styles.profileSection}>
        {/* Placeholder avatar — replace uri with your own photo URL or local asset */}
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://via.placeholder.com/150/2563EB/FFFFFF?text=TJY',
          }}
          accessibilityLabel="Profile photo placeholder"
        />

        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.title}>{profile.title}</Text>
        <Text style={styles.bio}>{profile.bio}</Text>

        {/* Contact links — simple text rows for beginners to customize */}
        <View style={styles.contactRow}>
          <Text style={styles.contactText}>{profile.email}</Text>
        </View>
        <View style={styles.contactRow}>
          <Text style={styles.contactText}>{profile.linkedin}</Text>
        </View>
      </View>

      {/* Navigation button — Pressable gives touch feedback out of the box */}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => navigation.navigate('Experience')}
      >
        <Text style={styles.buttonText}>View Experience</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xl,
    justifyContent: 'space-between',
  },
  profileSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: spacing.md,
    backgroundColor: colors.border,
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.xs,
    textAlign: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  bio: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.textMuted,
    textAlign: 'center',
    marginBottom: spacing.lg,
    paddingHorizontal: spacing.sm,
  },
  contactRow: {
    marginBottom: spacing.xs,
  },
  contactText: {
    fontSize: 13,
    color: colors.accent,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonPressed: {
    backgroundColor: colors.primaryDark,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
