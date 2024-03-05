// GitHubCard.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GitHubCard from './GitHubCard';

test('renders GitHubCard correctly', () => {
  const username = 'YourUserName';
  const imageUrl = 'path/to/your/image';
  const bio = 'A blurb about yourself';
  
  const { container } = render(<GitHubCard username={username} imageUrl={imageUrl} bio={bio} />);
  
  expect(container.firstChild).toMatchSnapshot();
});
