import React, { type FC, type ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const Close: FC<Props> = ({
  width = '18',
  height = '18',
  fill = 'white',
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
        d="M8.94968 7.74772L3.99993 2.79797L2.79785 4.00006L7.7476 8.9498L2.79785 13.8996L3.99993 15.1016L8.94968 10.1519L13.8994 15.1016L15.1015 13.8996L10.1518 8.9498L15.1015 4.00006L13.8994 2.79797L8.94968 7.74772Z"
        fill={fill}
      />
    </svg>
  );
};

export default Close;
