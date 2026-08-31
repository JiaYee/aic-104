/**
 * LanguagesScreen.tsx
 * --------------------
 * Spoken languages with list cards and proficiency bars —
 * a different layout from the Skills tab badge grid.
 */

import { Text } from '@/components/ui/text';
import { languages } from '@/data/resumeData';
import type { Language } from '@/types/resume';
import { ScrollView, View } from 'react-native';

/** Maps proficiency level to bar colour class. */
function barColor(level: Language['level']) {
  switch (level) {
    case 'Native':
      return 'bg-primary';
    case 'Professional':
      return 'bg-accent';
    case 'Conversational':
      return 'bg-secondary';
    default:
      return 'bg-muted-foreground';
  }
}

function LanguageRow({ language }: { language: Language }) {
  return (
    <View className="mb-3 flex-row items-center rounded-xl border border-border bg-card p-4 shadow-sm">
      {/* Avatar circle with language initial */}
      <View className="mr-4 h-12 w-12 items-center justify-center rounded-full bg-primary/10">
        <Text className="text-base font-bold text-primary">{language.initial}</Text>
      </View>

      {/* Name, level label, and proficiency bar */}
      <View className="flex-1">
        <View className="mb-2 flex-row items-baseline justify-between">
          <Text variant="h4">{language.name}</Text>
          <Text variant="muted" className="text-xs uppercase tracking-wide">
            {language.level}
          </Text>
        </View>

        {/* Proficiency track */}
        <View className="h-2 overflow-hidden rounded-full bg-muted">
          <View
            className={`h-full rounded-full ${barColor(language.level)}`}
            style={{ width: `${language.proficiency}%` }}
          />
        </View>

        <Text variant="muted" className="mt-1 text-xs">
          {language.proficiency}% proficiency
        </Text>
      </View>
    </View>
  );
}

export default function LanguagesScreen() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="p-6 pb-8">
      <Text variant="muted" className="mb-2">
        Language fluency at a glance.
      </Text>
      <Text variant="small" className="mb-6 text-muted-foreground">
        Each row shows a proficiency bar — wider means stronger fluency.
      </Text>

      {languages.map((language) => (
        <LanguageRow key={language.name} language={language} />
      ))}

      {/* Legend — explains the bar colours */}
      <View className="mt-4 rounded-xl border border-border bg-card p-4">
        <Text variant="small" className="mb-3 font-semibold text-foreground">
          Proficiency key
        </Text>
        <View className="gap-2">
          <View className="flex-row items-center gap-2">
            <View className="h-2 w-8 rounded-full bg-primary" />
            <Text variant="muted" className="text-xs">
              Native — full fluency
            </Text>
          </View>
          <View className="flex-row items-center gap-2">
            <View className="h-2 w-8 rounded-full bg-accent" />
            <Text variant="muted" className="text-xs">
              Professional — business/working level
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
