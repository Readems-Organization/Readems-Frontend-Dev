import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const Scan: FC<Props> = ({
  width = '21',
  height = '16',
  fill = '#778594',
}): ReactElement => {
  return (
    <svg
      width="21"
      height="16"
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.6488 5.11159C3.6442 5.45851 3.36042 5.73864 3.00897 5.74317H3.00044C2.65041 5.73857 2.36911 5.45714 2.36914 5.11159V4.21054C2.36903 1.90147 4.2529 0.0230907 6.592 0H7.28302C7.63446 0.00453543 7.91825 0.284664 7.92284 0.631581C7.91825 0.978497 7.63446 1.25863 7.28302 1.26316H6.592C5.80397 1.26308 5.04882 1.57494 4.49562 2.12893C3.94242 2.68291 3.63738 3.43274 3.6488 4.21054V5.11159ZM14.3895 1.26316H13.6985C13.3451 1.26316 13.0586 0.980393 13.0586 0.631581C13.0586 0.282768 13.3451 0 13.6985 0H14.3895C16.7152 0.0413304 18.5786 1.9144 18.5782 4.21054V5.11159C18.5782 5.4604 18.2917 5.74317 17.9384 5.74317C17.585 5.74317 17.2985 5.4604 17.2985 5.11159V4.21054C17.3099 3.43855 17.0096 2.69383 16.4637 2.14083C15.9179 1.58783 15.1716 1.27203 14.3895 1.26316ZM19.508 8.21062H1.3796C1.13495 8.1826 0.895729 8.29567 0.764464 8.50138C0.633199 8.70709 0.633199 8.9689 0.764464 9.17461C0.895729 9.38032 1.13495 9.49339 1.3796 9.46536H2.3692V11.8317C2.39259 14.1406 4.29549 16.0002 6.63471 16.0001H7.32573C7.67909 16.0001 7.96555 15.7173 7.96555 15.3685C7.96555 15.0197 7.67909 14.737 7.32573 14.737H6.59206C4.96657 14.737 3.64885 13.4362 3.64885 11.8317V9.46536H6.01195V10.4085C6.01195 11.5015 6.90952 12.3875 8.01674 12.3875H12.8965C13.4282 12.3875 13.9381 12.179 14.3141 11.8079C14.6901 11.4367 14.9013 10.9334 14.9013 10.4085V9.46536H17.2985V11.8317C17.2986 13.4232 16.0016 14.7185 14.3894 14.737H13.6984C13.345 14.737 13.0586 15.0197 13.0586 15.3685C13.0586 15.7173 13.345 16.0001 13.6984 16.0001H14.3894C15.5086 16.0001 16.5818 15.5607 17.3724 14.7787C18.163 13.9967 18.606 12.9364 18.6037 11.8317V9.46536H19.508C19.7527 9.49339 19.9919 9.38032 20.1232 9.17461C20.2544 8.9689 20.2544 8.70709 20.1232 8.50138C19.9919 8.29567 19.7527 8.1826 19.508 8.21062ZM6.0119 6.67791V5.59159C6.0119 4.49865 6.90947 3.61264 8.01669 3.61264H12.8879C13.4196 3.61264 13.9295 3.82114 14.3055 4.19226C14.6815 4.56339 14.8927 5.06674 14.8927 5.59159V6.67791C14.8951 6.74115 14.8707 6.80252 14.8254 6.84727C14.7801 6.89201 14.7179 6.91609 14.6538 6.9137H6.25077C6.1867 6.91609 6.12453 6.89201 6.0792 6.84727C6.03386 6.80252 6.00948 6.74115 6.0119 6.67791Z"
        fill={fill}
      />
    </svg>
  );
};

export default Scan;