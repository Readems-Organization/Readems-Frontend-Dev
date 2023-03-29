import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  viewBoxWidth?: string;
  viewBoxHeight?: string;
  fill?: string;
}

const Power: FC<Props> = ({
  width = '9',
  height = '10',
  viewBoxWidth = '9',
  viewBoxHeight = '10',
  fill = '#778594"',
}): ReactElement => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.05556 1C5.05556 0.723858 4.8317 0.5 4.55556 0.5C4.27941 0.5 4.05556 0.723858 4.05556 1H5.05556ZM4.05556 4.55556C4.05556 4.8317 4.27941 5.05556 4.55556 5.05556C4.8317 5.05556 5.05556 4.8317 5.05556 4.55556H4.05556ZM4.05556 1V4.55556H5.05556V1H4.05556ZM8.61111 5.44444C8.61111 3.20462 6.79538 1.38889 4.55556 1.38889V2.38889C6.24309 2.38889 7.61111 3.75691 7.61111 5.44444H8.61111ZM4.55556 9.5C6.79538 9.5 8.61111 7.68427 8.61111 5.44444H7.61111C7.61111 7.13198 6.24309 8.5 4.55556 8.5V9.5ZM0.5 5.44444C0.5 7.68427 2.31573 9.5 4.55556 9.5V8.5C2.86802 8.5 1.5 7.13198 1.5 5.44444H0.5ZM1.5 5.44444C1.5 3.75691 2.86802 2.38889 4.55556 2.38889V1.38889C2.31573 1.38889 0.5 3.20462 0.5 5.44444H1.5Z"
        fill={fill}
      />
    </svg>
  );
};

export default Power;
