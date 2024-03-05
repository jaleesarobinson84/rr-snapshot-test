// GitHubCard.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GitHubCard from './GitHubCard';

test('renders GitHubCard correctly', () => {
  const username = 'Jaleesa';
  const imageUrl = '/public/Karma-Sleeping';
  const bio = 'I love graphic tees and socks';
  
  const { container } = render(<GitHubCard username={username} imageUrl={imageUrl} bio={bio} />);
  
  expect(container.firstChild).toMatchSnapshot();
});
