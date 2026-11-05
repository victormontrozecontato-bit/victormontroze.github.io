import type { SVGProps } from "react";

const KreaAIIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 48 48"
  >
    <rect
      width="37"
      height="37"
      x="5.5"
      y="5.5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      rx="4"
      ry="4"
    />
    <circle cx="15.893" cy="15.135" r=".75" fill="currentColor" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m15.396 20.927l-1.074 12.529m17.821-6.265h-8.366m-2.61 6.265l7.877-18.913l4.634 18.913"
    />
  </svg>
);

export { KreaAIIcon };
