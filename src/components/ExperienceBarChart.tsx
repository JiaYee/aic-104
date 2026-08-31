/**
 * ExperienceBarChart.tsx
 * -----------------------
 * Combined experience overview + technical skills in one view.
 * Each tier shows bars and badge chips together.
 */

import { Text } from '@/components/ui/text';
import type { TechnicalSkill } from '@/types/resume';
import { useMemo } from 'react';
import { View } from 'react-native';

type Props = {
  data: TechnicalSkill[];
};

type Tier = {
  years: number;
  title: string;
  subtitle: string;
  barClass: string;
  skills: TechnicalSkill[];
};

const MAX_YEARS = 11;

function SkillBar({ skill, barClass }: { skill: TechnicalSkill; barClass: string }) {
  const widthPercent = (skill.years / MAX_YEARS) * 100;

  return (
    <View className="mb-3">
      <View className="mb-1 flex-row items-center justify-between">
        <Text className="flex-1 text-sm font-medium text-foreground">{skill.name}</Text>
        <Text variant="muted" className="ml-2 text-xs font-semibold">
          {skill.years} yrs
        </Text>
      </View>
      <View className="h-3 overflow-hidden rounded-full bg-muted">
        <View
          className={`h-full rounded-full ${barClass}`}
          style={{ width: `${widthPercent}%` }}
        />
      </View>
    </View>
  );
}

function TierSection({ tier }: { tier: Tier }) {
  return (
    <View className="mb-5 border-b border-border pb-5 last:mb-0 last:border-b-0 last:pb-0">
      {/* Tier header */}
      <View className="mb-3 flex-row items-center gap-3">
        <View className={`h-14 w-14 items-center justify-center rounded-2xl ${tier.barClass}/15`}>
          <Text className="text-2xl font-bold text-primary">{tier.years}</Text>
        </View>
        <View className="flex-1">
          <Text variant="h4">{tier.title}</Text>
          <Text variant="muted" className="text-xs">
            {tier.subtitle} · {tier.skills.length} skills
          </Text>
        </View>
      </View>

      {/* Experience bars per skill */}
      {tier.skills.map((skill) => (
        <SkillBar key={skill.name} skill={skill} barClass={tier.barClass} />
      ))}
    </View>
  );
}

export default function ExperienceBarChart({ data }: Props) {
  const tiers = useMemo(() => {
    const yearGroups = new Map<number, TechnicalSkill[]>();

    data.forEach((skill) => {
      const group = yearGroups.get(skill.years) ?? [];
      group.push(skill);
      yearGroups.set(skill.years, group);
    });

    const sortedYears = [...yearGroups.keys()].sort((a, b) => b - a);

    return sortedYears.map((years): Tier => {
      const skills = yearGroups.get(years) ?? [];
      const isCore = years >= 9;

      return {
        years,
        title: isCore ? 'Core Stack' : 'Modern Stack',
        subtitle: isCore ? 'Long-term expertise' : 'Recent technologies',
        barClass: isCore ? 'bg-primary' : 'bg-accent',
        skills: skills.sort((a, b) => a.name.localeCompare(b.name)),
      };
    });
  }, [data]);

  return (
    <View className="w-full">
      <Text variant="small" className="mb-4 text-muted-foreground">
        Bars show years of experience, grouped by tier.
      </Text>

      {tiers.map((tier) => (
        <TierSection key={tier.years} tier={tier} />
      ))}

      <View className="mt-4 flex-row justify-center gap-4 border-t border-border pt-3">
        <View className="flex-row items-center gap-1.5">
          <View className="h-2 w-6 rounded-full bg-primary" />
          <Text variant="muted" className="text-xs">
            9+ years
          </Text>
        </View>
        <View className="flex-row items-center gap-1.5">
          <View className="h-2 w-6 rounded-full bg-accent" />
          <Text variant="muted" className="text-xs">
            2 years
          </Text>
        </View>
      </View>
    </View>
  );
}
