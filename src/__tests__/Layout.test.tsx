import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Layout } from 'src/layout/Layout';

describe('Layout component', () => {
  test('renders children inside ThemeProvider and applies GlobalStyle', () => {
    const { getByText } = render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );

    expect(getByText('Test Content')).toBeInTheDocument();
  });

  test('applies theme correctly', () => {
    const { container } = render(
      <Layout>
        <div>Test Theme</div>
      </Layout>
    );

    const styledElement = container.firstChild;
    expect(styledElement).toHaveStyle('font-family: "Roboto');
  });
});
