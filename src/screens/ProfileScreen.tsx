/**
 * ProfileScreen.tsx
 * ------------------
 * Home tab with profile info and contact CTAs (email, LinkedIn, WhatsApp).
 */

import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { profile } from '@/data/resumeData';
import { Image, Linking, View } from 'react-native';

/** Opens a URL in the device mail app, browser, or WhatsApp. */
function openLink(url: string) {
  Linking.openURL(url);
}

export default function ProfileScreen() {
  return (
    <View className="flex-1 justify-between bg-background px-6 py-8">
      {/* Profile section — centered using Flexbox */}
      <View className="flex-1 items-center justify-center">
        <Image
          className="mb-4 h-[120px] w-[120px] rounded-full border-2 border-border bg-muted"
          source={require('../../assets/profile.jpg')}
          accessibilityLabel="Profile photo of Tai Jia Yee"
        />

        <Text variant="h1" className="mb-1 text-center">
          {profile.name}
        </Text>
        <Text variant="large" className="mb-4 text-center text-primary">
          {profile.title}
        </Text>
        <Text variant="p" className="mb-6 px-2 text-center text-muted-foreground">
          {profile.bio}
        </Text>
      </View>

      {/* Contact CTAs — prominent buttons for reaching out */}
      <View className="gap-3">
        <Text variant="small" className="mb-1 text-center uppercase tracking-wider text-muted-foreground">
          Get in touch
        </Text>
        <Button
          label="Email Me"
          size="lg"
          onPress={() => openLink(`mailto:${profile.email}`)}
          accessibilityLabel={`Send email to ${profile.email}`}
        />
        <Button
          variant="outline"
          label="Connect on LinkedIn"
          onPress={() => openLink(`https://${profile.linkedin}`)}
          accessibilityLabel="Open LinkedIn profile"
        />
        <Button
          variant="secondary"
          label="WhatsApp Me"
          onPress={() => openLink(`https://${profile.phone}`)}
          accessibilityLabel="Open WhatsApp chat"
        />
      </View>
    </View>
  );
}
