import React, { type FC, type ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  viewBoxWidth?: string;
  viewBoxHeight?: string;
  fill?: string;
}

const Profile: FC<Props> = ({
  width = '12',
  height = '12',
  viewBoxWidth = '12',
  viewBoxHeight = '12',
  fill = '#778594',
}): ReactElement => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.99539 6.35855C7.07218 6.36033 8.04393 5.70868 8.45723 4.70765C8.87052 3.70663 8.64391 2.55351 7.88313 1.78633C7.12235 1.01916 5.97733 0.789126 4.98233 1.20357C3.98734 1.618 3.33846 2.59524 3.33846 3.6793C3.33845 5.15729 4.5273 6.35613 5.99539 6.35855ZM5.99537 1.76555C6.76639 1.76555 7.46141 2.23337 7.75605 2.95068C8.0507 3.66798 7.88689 4.49336 7.34107 5.0416C6.79525 5.58984 5.97503 5.75286 5.26321 5.45458C4.55139 5.1563 4.0883 4.45552 4.09007 3.6793C4.09007 3.17098 4.29094 2.68354 4.64838 2.32452C5.00582 1.96549 5.49045 1.76438 5.99537 1.76555ZM8.26779 7.5552C9.09808 7.72238 9.63996 8.05233 9.86719 8.53627C10.0487 8.93834 10.0439 9.40075 9.85408 9.79891C9.62248 10.2829 9.0806 10.6128 8.2372 10.7844C7.85465 10.8705 7.466 10.9264 7.07479 10.9516C6.64217 11 6.2751 11 5.93425 11H5.93423H5.79876C5.60566 10.979 5.45928 10.8149 5.45928 10.6194C5.45928 10.4239 5.60566 10.2598 5.79876 10.2389C6.19643 10.2433 6.59847 10.2301 7.0005 10.1949C7.35622 10.1716 7.70971 10.1216 8.05803 10.0453C8.65672 9.9133 9.03253 9.72412 9.15052 9.47335C9.2423 9.28153 9.2423 9.05806 9.15052 8.86623C9.03253 8.61106 8.65672 8.41309 8.07114 8.2943C7.71742 8.21441 7.35795 8.16292 6.99613 8.14032C6.32017 8.07872 5.64006 8.07872 4.9641 8.14032C4.60694 8.16361 4.252 8.21361 3.9022 8.2899C3.30352 8.42189 2.93207 8.61106 2.80971 8.86183C2.76636 8.95707 2.744 9.06063 2.74416 9.16539C2.74392 9.27158 2.76627 9.37659 2.80971 9.47335C3.01771 9.75934 3.33416 9.94571 3.68371 9.98809C3.8225 10.0156 3.93466 10.1184 3.97485 10.2549C4.01504 10.3914 3.97661 10.5391 3.8751 10.6383C3.77359 10.7375 3.62578 10.7717 3.49143 10.7272C2.92804 10.6347 2.4339 10.2966 2.14111 9.80331C1.95296 9.40374 1.95296 8.94024 2.14111 8.54067C2.37272 8.04354 2.91459 7.72238 3.74925 7.5508C4.14223 7.46522 4.541 7.40934 4.94225 7.38362C5.66054 7.32202 6.38273 7.32202 7.10101 7.38362C7.4938 7.40995 7.88393 7.46731 8.26779 7.5552Z"
        fill={fill}
      />
    </svg>
  );
};

export default Profile;
