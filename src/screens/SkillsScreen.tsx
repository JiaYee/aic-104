/**
 * SkillsScreen.tsx
 * -----------------
 * Dedicated tab listing skill groups from resumeData.ts.
 */

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { skills } from '@/data/resumeData';
import { ScrollView, View } from 'react-native';

export default function SkillsScreen() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="p-6 pb-8">
      <Text variant="muted" className="mb-6">
        Core technologies and languages grouped by experience level.
      </Text>

      {skills.map((group) => (
        <Card key={group.category} className="mb-4">
          <CardHeader>
            <CardTitle className="text-primary">{group.category}</CardTitle>
          </CardHeader>
          <CardContent>
            <View className="flex-row flex-wrap gap-2">
              {group.items.map((skill) => (
                <Badge key={skill} label={skill} variant="accent" />
              ))}
            </View>
          </CardContent>
        </Card>
      ))}
    </ScrollView>
  );
}
