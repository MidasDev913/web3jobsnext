import React from 'react';

const SvgIcon = ({ color }: { color?: string }) => (
  <svg
    width="11"
    height="15"
    viewBox="0 0 11 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.91292 5.18301C9.18674 4.19396 9.73179 2.80072 9.97676 1.97396C10.2064 1.19313 9.71342 0.173465 8.69681 0.0387336C8.03541 -0.0470043 7.14128 0.0724164 6.04506 0.400058C5.6868 0.50723 5.31017 0.50723 4.95497 0.400058C3.85875 0.0754784 2.96156 -0.0776249 2.30322 0.0387336C1.08757 0.253078 0.830361 1.2605 1.02327 1.97396C1.24986 2.80684 1.81328 4.19396 3.0871 5.18301C1.34479 6.49357 0.202637 9.01059 0.202637 10.8203C0.202637 13.3097 2.30934 15 5.50001 15C8.69069 15 10.7974 13.3097 10.7974 10.8203C10.7974 9.01059 9.65524 6.49357 7.91292 5.18301ZM2.23585 1.63713C2.20523 1.52996 2.18379 1.33705 2.46857 1.285C2.80233 1.22375 3.44537 1.2605 4.59977 1.60345C5.19075 1.77799 5.81541 1.77799 6.40639 1.60345C7.56079 1.2605 8.20382 1.22682 8.53759 1.285C8.77336 1.3248 8.79786 1.52996 8.7703 1.63713C8.55596 2.40265 8.00479 3.75302 6.66972 4.50935C6.29615 4.38075 5.90727 4.31032 5.50614 4.31032C5.10501 4.31032 4.71306 4.38075 4.34255 4.50935C2.99831 3.75302 2.44713 2.39959 2.23585 1.63713ZM5.50001 13.7568C3.65053 13.7568 1.4489 12.9913 1.4489 10.8203C1.4489 8.84218 3.33207 5.55658 5.50001 5.55658C7.66796 5.55658 9.55113 8.84218 9.55113 10.8203C9.55113 12.9913 7.38319 13.7568 5.50001 13.7568Z"
      fill={color || 'white'}
    />
    <path
      d="M5.50011 9.2127C5.19391 9.2127 4.94282 8.96162 4.94282 8.65541C4.94282 8.3492 5.19391 8.09811 5.50011 8.09811C5.65628 8.09811 5.8002 8.15935 5.90737 8.27265C6.10947 8.48699 6.44936 8.49924 6.6637 8.29715C6.87804 8.09505 6.89029 7.75516 6.6882 7.54081C6.50753 7.3479 6.284 7.20399 6.03598 7.11825V6.88553C6.03598 6.58851 5.79713 6.34967 5.50011 6.34967C5.20309 6.34967 4.96425 6.58851 4.96425 6.88553V7.11825C4.32734 7.34178 3.87109 7.94501 3.87109 8.65541C3.87109 9.55259 4.60293 10.2844 5.50011 10.2844C5.80632 10.2844 6.05741 10.5355 6.05741 10.8417C6.05741 11.1479 5.80632 11.399 5.50011 11.399C5.34395 11.399 5.20003 11.3378 5.09286 11.2245C4.89076 11.0101 4.55087 10.9979 4.33653 11.2C4.12218 11.4021 4.10994 11.742 4.31203 11.9563C4.49269 12.1492 4.71622 12.2931 4.96425 12.3789V12.6116C4.96425 12.9086 5.20309 13.1475 5.50011 13.1475C5.79713 13.1475 6.03598 12.9086 6.03598 12.6116V12.3789C6.67289 12.1554 7.12913 11.5521 7.12913 10.8417C7.12913 9.94148 6.3973 9.2127 5.50011 9.2127Z"
      fill={color || 'white'}
    />
  </svg>
);

export default SvgIcon;