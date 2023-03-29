import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const Tag: FC<Props> = ({
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
        d="M15.3407 9.9114L9.92084 15.3313C9.49559 15.757 8.91854 15.9962 8.31681 15.9962C7.71507 15.9962 7.13802 15.757 6.71338 15.3319L0.221659 8.84772C0.0797422 8.70597 0 8.51361 0 8.31303V0.75573C0 0.338352 0.338352 0 0.75573 0H8.31303C8.51346 0 8.70568 0.0796213 8.84741 0.221348L15.3407 6.71466C16.2198 7.59895 16.2198 9.02711 15.3407 9.9114Z"
        fill={fill}
      />
    </svg>
  );
};

export default Tag;
