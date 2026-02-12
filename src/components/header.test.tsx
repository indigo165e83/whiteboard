/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import Header from './header';
import '@testing-library/jest-dom'

describe('Header component', () => {
  test('renders correctly', () => {
    const { getByText, getByTitle } = render(
      <Header
        currentColor="black"
        callbackOnClick={() => {}}
        callbackOnChange={() => {}}
        callbackOnClickTrash={() => {}}
      />
    );

    expect(getByText('Size')).toBeInTheDocument();
    expect(getByText('Color')).toBeInTheDocument();
    expect(getByTitle('Clear canvas')).toBeInTheDocument();
  });
});
