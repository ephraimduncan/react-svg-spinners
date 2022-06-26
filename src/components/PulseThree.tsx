import React, { SVGProps } from "react";

export default function PulseThree({
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
      <circle cx="12" cy="12" r="0">
        <animate
          id="a"
          begin="0;c.begin+0.4s"
          attributeName="r"
          calcMode="spline"
          dur={dur}
          values="0;11"
          keySplines=".52,.6,.25,.99"
          fill="freeze"
        />
        <animate
          begin="0;c.begin+0.4s"
          attributeName="opacity"
          calcMode="spline"
          dur={dur}
          values="1;0"
          keySplines=".52,.6,.25,.99"
          fill="freeze"
        />
      </circle>
      <circle cx="12" cy="12" r="0">
        <animate
          id="b"
          begin="a.begin+0.4s"
          attributeName="r"
          calcMode="spline"
          dur={dur}
          values="0;11"
          keySplines=".52,.6,.25,.99"
          fill="freeze"
        />
        <animate
          begin="a.begin+0.4s"
          attributeName="opacity"
          calcMode="spline"
          dur={dur}
          values="1;0"
          keySplines=".52,.6,.25,.99"
          fill="freeze"
        />
      </circle>
      <circle cx="12" cy="12" r="0">
        <animate
          id="c"
          begin="a.begin+0.8s"
          attributeName="r"
          calcMode="spline"
          dur={dur}
          values="0;11"
          keySplines=".52,.6,.25,.99"
          fill="freeze"
        />
        <animate
          begin="a.begin+0.8s"
          attributeName="opacity"
          calcMode="spline"
          dur={dur}
          values="1;0"
          keySplines=".52,.6,.25,.99"
          fill="freeze"
        />
      </circle>
    </svg>
  );
}
