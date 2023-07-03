import React from 'react';
import { render } from '@testing-library/react';
import PhraseCard from './PhraseCard';

describe('PhraseCard', () => {
  test('renders text correctly', () => {
    const text = 'Example text';
    const color = 'red';

    const { getByText } = render(<PhraseCard text={text} color={color} />);
    const renderedText = getByText(text);

    expect(renderedText).toBeInTheDocument();
  });
});