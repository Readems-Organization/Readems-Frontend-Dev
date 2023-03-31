import React, { type FC, type ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const CircleArrowRight: FC<Props> = ({
  width = '15',
  height = '15',
  fill = '#2D3B45',
}): ReactElement => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.62732 11.3727C6.03692 13.7823 9.9566 13.7823 12.3662 11.3727C14.7758 8.96313 14.7758 5.04345 12.3662 2.63384C9.9566 0.224238 6.03692 0.224238 3.62732 2.63384C1.21771 5.04345 1.21771 8.96313 3.62732 11.3727ZM12.9488 2.05126C15.6794 4.78187 15.6794 9.22472 12.9488 11.9553C10.2182 14.686 5.77534 14.686 3.04472 11.9553C0.314109 9.22472 0.31411 4.78187 3.04472 2.05126C5.77534 -0.679358 10.2182 -0.679358 12.9488 2.05126ZM8.57936 4.67291L9.16195 4.09032L12.0749 7.00328L9.16195 9.91625L8.57935 9.33365L10.4978 7.41518L4.5012 7.41576L4.5012 6.59081L10.4978 6.59139L8.57936 4.67291Z"
        fill={fill}
      />
    </svg>
  );
};

export default CircleArrowRight;
