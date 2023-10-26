import type { Meta, StoryObj } from '@storybook/react';
import {Row} from '../layout/index';
import { CSSProperties } from 'react';

const meta: Meta = {
  component: Row,
  tags: ['autodocs'],
  title: 'Layout/Row',
  argTypes: {
    justify: {
      options: ["flex-start" , "flex-end" , "center" , "space-between" , "space-around" , "space-evenly"],
      control: { type: 'select' },
    },
    gap: {
      control: { type: 'number', min:1, max:30 },
    },
    background: { control: 'color' }
  },
};

export default meta;

type Story = StoryObj<typeof Row>;

export const Example: Story = {
  render: (args) => {

    const style: CSSProperties = {
      height: '100px',
      width: '100px',
      background: '#029cfd',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'monospace',
      fontWeight: '600',
      fontSize: '20px',
      color: 'white'
    }
    return (
      <Row {...args}>
        <div style={style}>Box 1</div>
        <div style={style}>Box 1</div>
        <div style={style}>Box 1</div>
      </Row>
    )
  }
};