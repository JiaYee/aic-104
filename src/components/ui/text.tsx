import { cn } from '@/lib/utils';
import * as Slot from '@rn-primitives/slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Platform, Text as RNText, type Role } from 'react-native';

const textVariants = cva(
  cn('text-foreground text-base', Platform.select({ web: 'select-text' })),
  {
    variants: {
      variant: {
        default: '',
        h1: 'text-3xl font-bold tracking-tight',
        h2: 'text-2xl font-semibold tracking-tight',
        h3: 'text-xl font-semibold',
        h4: 'text-lg font-semibold',
        p: 'leading-6',
        lead: 'text-lg text-muted-foreground',
        large: 'text-lg font-semibold',
        small: 'text-sm font-medium leading-none',
        muted: 'text-sm text-muted-foreground',
        link: 'text-sm text-primary underline',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

type TextVariantProps = VariantProps<typeof textVariants>;

const roleVariants: Partial<Record<NonNullable<TextVariantProps['variant']>, Role>> = {
  h1: 'heading',
  h2: 'heading',
  h3: 'heading',
  h4: 'heading',
};

type TextProps = React.ComponentProps<typeof RNText> &
  TextVariantProps & {
    asChild?: boolean;
  };

function Text({ className, asChild = false, variant, ...props }: TextProps) {
  const textClass = React.useContext(TextClassContext);
  const Component = asChild ? Slot.Text : RNText;
  return (
    <Component
      className={cn(textVariants({ variant }), textClass, className)}
      role={variant ? roleVariants[variant] : undefined}
      {...props}
    />
  );
}

const TextClassContext = React.createContext<string | undefined>(undefined);

export { Text, TextClassContext, textVariants };
export type { TextProps };
