import React, { SVGProps } from "react";

export default function PulseRing({
  width = 24,
  height = 24,
  dur = "1.2s",
  color,
}: SVGProps<SVGElement>): JSX.Element {
  return (
    <svg
      width={width}
      height={height}
      fill={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
        transform="translate(12, 12) scale(0)"
      >
        <animateTransform
          attributeName="transform"
          calcMode="spline"
          type="translate"
          dur={dur}
          values="12 12;0 0"
          keySplines=".52,.6,.25,.99"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          calcMode="spline"
          additive="sum"
          type="scale"
          dur={dur}
          values="0;1"
          keySplines=".52,.6,.25,.99"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur={dur}
          values="1;0"
          keySplines=".52,.6,.25,.99"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
}
