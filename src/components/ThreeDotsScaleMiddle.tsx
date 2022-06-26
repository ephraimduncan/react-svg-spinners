import React, { SVGProps } from "react";

export default function ThreeDotsScaleMiddle({
  width = 24,
  height = 24,
  dur = "0.75s",
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
      <circle cx="4" cy="12" r="1.5">
        <animate attributeName="r" dur={dur} values="1.5;3;1.5" repeatCount="indefinite" />
      </circle>
      <circle cx="12" cy="12" r="3">
        <animate attributeName="r" dur={dur} values="3;1.5;3" repeatCount="indefinite" />
      </circle>
      <circle cx="20" cy="12" r="1.5">
        <animate attributeName="r" dur={dur} values="1.5;3;1.5" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
