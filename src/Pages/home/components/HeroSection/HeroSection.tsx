import React, { FC, ReactElement } from 'react';

export const HeroSection: FC = (): ReactElement => {
  return (
    <div>
      <h2>
        <span>Read.</span> <span>Connect.</span>
        <span>Grow</span>
      </h2>
      <p>
        We are creating social communities around books, stories, and articles based on your interests, helping to
        remove the barriers between readers and writers. Join our waitlist to get early access.{' '}
      </p>
    </div>
  );
};
