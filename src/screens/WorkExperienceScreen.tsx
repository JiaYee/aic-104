/**
 * WorkExperienceScreen.tsx
 * -------------------------
 * Work history displayed as a vertical timeline.
 */

import { Card, CardContent } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { roles } from '@/data/resumeData';
import { ScrollView, View } from 'react-native';

export default function WorkExperienceScreen() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="p-6 pb-8">
      <Text variant="muted" className="mb-6">
        Career timeline — newest roles appear at the top.
      </Text>

      {roles.map((role, index) => {
        const isLast = index === roles.length - 1;

        return (
          <View key={`${role.company}-${role.period}`} className="flex-row items-start">
            {/* Timeline track: dot + line */}
            <View className="mr-2 w-6 items-center self-stretch">
              <View className="mt-1.5 h-3 w-3 rounded-full bg-primary" />
              {!isLast && <View className="mt-1 w-0.5 flex-1 bg-border" />}
            </View>

            {/* Role card */}
            <Card className={`mb-4 flex-1 ${isLast ? 'mb-0' : ''}`}>
              <CardContent className="gap-1 pt-4">
                <Text variant="small" className="text-accent">
                  {role.period}
                </Text>
                <Text variant="h4">{role.title}</Text>
                <Text variant="small" className="font-semibold text-muted-foreground">
                  {role.company}
                </Text>
                <Text variant="muted" className="mb-2">
                  {role.location}
                </Text>

                {role.highlights.map((highlight) => (
                  <View key={highlight} className="mb-1 flex-row items-start">
                    <Text className="mr-2 text-accent">›</Text>
                    <Text variant="p" className="flex-1 text-sm">
                      {highlight}
                    </Text>
                  </View>
                ))}
              </CardContent>
            </Card>
          </View>
        );
      })}
    </ScrollView>
  );
}
