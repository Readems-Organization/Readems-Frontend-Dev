import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const Inbox: FC<Props> = ({
  width = '16',
  height = '16',
  fill = '#778594',
}): ReactElement => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2222 0H1.77778C0.8 0 0 0.8 0 1.77778V14.2222C0 15.2 0.8 16 1.77778 16H14.2222C15.2 16 16 15.2 16 14.2222V1.77778C16 0.8 15.2 0 14.2222 0ZM14.2222 10.6667H10.6667C10.6667 12.1778 9.51111 13.3333 8 13.3333C6.48889 13.3333 5.33333 12.1778 5.33333 10.6667H1.77778V1.77778H14.2222V10.6667ZM11.5556 6.22222H9.77778V3.55556H6.22222V6.22222H4.44444L8 9.77778L11.5556 6.22222Z"
        fill={fill}
      />
    </svg>
  );
};

export default Inbox;
