/**
 * SkillsScreen.tsx
 * -----------------
 * Single combined view: experience overview + technical skills.
 */

import ExperienceBarChart from '@/components/ExperienceBarChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { technicalSkills } from '@/data/resumeData';
import { ScrollView } from 'react-native';

export default function SkillsScreen() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="p-6 pb-8">
      <Text variant="muted" className="mb-6">
        All technical skills with years of experience in one place.
      </Text>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Technical Skills & Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <ExperienceBarChart data={technicalSkills} />
        </CardContent>
      </Card>
    </ScrollView>
  );
}
