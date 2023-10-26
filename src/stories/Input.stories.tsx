import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../components/Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    value: {
      control: { type: 'text' },
    },
    error: {
      control: { type: 'boolean' },
    },
    errorMessage: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Example: Story = {
  args: {
    name: 'nome',
    label: 'Nome',
    value: '',
    placeholder: '',
    error: false
  },

  render: (args) => {
    return (
      <Input
          {...args}
          onChange={() => {}}
        />
    )
  }
};