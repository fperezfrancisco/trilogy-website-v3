import React from "react";

function SkeletonBox({ height, width, isFullWidth, isFullHeight, rounded }) {
  return (
    <div
      className={`bg-neutral-300 animate-pulse block
        ${width ? `w-[${width}px]` : "w-full"}
        ${height ? `h-[${height}px]` : "h-[32px]"}
        ${isFullHeight ? `h-full` : ""}
        ${rounded ? "rounded-2xl" : ""}
    `}
    ></div>
  );
}

export default SkeletonBox;
