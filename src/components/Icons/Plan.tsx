import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const Plan: FC<Props> = ({
  width = '16',
  height = '16',
  fill = '#778594',
}): ReactElement => {
  return (
    <svg
      width="16"
      height="16"
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.35556 6.3112L3.11111 7.55564L7.11111 11.5556L16 2.66675L14.7556 1.42231L7.11111 9.06675L4.35556 6.3112ZM14.2222 14.2222H1.77778V1.77778H10.6667V0H1.77778C0.8 0 0 0.8 0 1.77778V14.2222C0 15.2 0.8 16 1.77778 16H14.2222C15.2 16 16 15.2 16 14.2222V7.11111H14.2222V14.2222Z"
        fill={fill}
      />
    </svg>
  );
};

export default Plan;
