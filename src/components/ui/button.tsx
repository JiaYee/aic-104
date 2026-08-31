import { Text, TextClassContext } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import * as Slot from '@rn-primitives/slot';
import * as React from 'react';
import { Pressable, type PressableProps } from 'react-native';

const buttonVariants = cva(
  'group flex flex-row items-center justify-center rounded-md',
  {
    variants: {
      variant: {
        default: 'bg-primary active:opacity-90',
        secondary: 'bg-secondary active:opacity-90',
        outline: 'border border-border bg-background active:bg-accent/10',
        link: 'active:opacity-70',
      },
      size: {
        default: 'h-11 px-5 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-12 rounded-md px-8',
        /** Icon above label — height grows with content */
        stacked: 'h-auto min-h-[4.5rem] flex-col gap-1.5 rounded-md px-2 py-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const buttonTextVariants = cva('text-sm font-medium', {
  variants: {
    variant: {
      default: 'text-primary-foreground',
      secondary: 'text-secondary-foreground',
      outline: 'text-foreground',
      link: 'text-primary underline',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type ButtonProps = PressableProps &
  VariantProps<typeof buttonVariants> & {
    label: string;
    icon?: React.ReactNode;
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  label,
  icon,
  asChild = false,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot.Pressable : Pressable;
  return (
    <TextClassContext.Provider value={buttonTextVariants({ variant })}>
      <Component
        className={cn(buttonVariants({ variant, size }), 'gap-2', className)}
        role="button"
        {...props}
      >
        {icon}
        <Text className={cn(icon ? 'text-center text-xs' : undefined)}>{label}</Text>
      </Component>
    </TextClassContext.Provider>
  );
}

export { Button, buttonTextVariants, buttonVariants };
export type { ButtonProps };
