import React from 'react';
import { DecoratorFn, StoryFn } from '@storybook/react';

const withMaxWidth: DecoratorFn = (StoryFn) => {
  return (
    <div style={{ maxWidth: 400, margin: 'auto', border: '1px solid #fab' }}>
      <StoryFn />
    </div>
  );
};

export const globalDecorators = [];
