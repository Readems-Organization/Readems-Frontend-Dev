import React, { type FC, type ReactElement, type CSSProperties } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
  style?: CSSProperties;
}

const Arrow: FC<Props> = ({
  width = '14',
  height = '7',
  fill = 'white',
  style,
}): ReactElement => {
  return (
    <svg width={width} height={height} style={style}>
      <g fill="none" fillRule="evenodd">
        <path
          fill={fill}
          d="M7 .07v1.428l-5.55 5.5L0 6.982zM7 .07v1.428l5.55 5.5L14 6.982z"
        />
        <path fill={fill} d="M1.45 7L7 1.498 12.55 7z" />
      </g>
    </svg>
  );
};

export default Arrow;
