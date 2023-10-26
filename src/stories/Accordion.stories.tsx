import type { Meta, StoryObj } from '@storybook/react';
import {Accordion} from '../components/Accordion';
import { CSSProperties } from 'react';

const meta: Meta = {
  component: Accordion,
  tags: ['autodocs'],
  title: 'Components/Accordion',
  decorators: [
    (Story) => (
      <div style={{minHeight: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Example: Story = {
  render: () => {
    return (
        <Accordion/>
    )
  }
};