/**
 * ExperienceScreen.js
 * --------------------
 * Lists skills and past roles using basic View and Text components.
 * Data is imported from resumeData.js so students only edit one file.
 */

import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { roles, skills } from '../data/resumeData';
import { colors, spacing } from '../styles/theme';

export default function ExperienceScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {/* Skills section */}
      <Text style={styles.sectionTitle}>Skills</Text>
      {skills.map((group) => (
        <View key={group.category} style={styles.card}>
          <Text style={styles.cardTitle}>{group.category}</Text>
          {group.items.map((skill) => (
            <View key={skill} style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.listText}>{skill}</Text>
            </View>
          ))}
        </View>
      ))}

      {/* Work experience section */}
      <Text style={styles.sectionTitle}>Work Experience</Text>
      {roles.map((role) => (
        <View key={`${role.company}-${role.period}`} style={styles.card}>
          <Text style={styles.roleTitle}>{role.title}</Text>
          <Text style={styles.company}>{role.company}</Text>
          <Text style={styles.meta}>
            {role.location} · {role.period}
          </Text>
          {role.highlights.map((highlight) => (
            <View key={highlight} style={styles.listItem}>
              <Text style={styles.bullet}>›</Text>
              <Text style={styles.listText}>{highlight}</Text>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.md,
    marginTop: spacing.sm,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  roleTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  company: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textMuted,
    marginBottom: spacing.xs,
  },
  meta: {
    fontSize: 12,
    color: colors.textMuted,
    marginBottom: spacing.sm,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.xs,
  },
  bullet: {
    fontSize: 14,
    color: colors.accent,
    marginRight: spacing.sm,
    lineHeight: 20,
  },
  listText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    color: colors.text,
  },
});
