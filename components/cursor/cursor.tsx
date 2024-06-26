import CursorSVG from "@/public/assets/CursorSVG";
import { type CursorProps } from "@/types";
import clsx from "clsx";
import React from "react";

const Cursor = ({ color, x, y, message }: CursorProps) => {
  return (
    <div
      className="pointer-events-none absolute left-0 top-0"
      style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
    >
      <CursorSVG color={color} />

      {message && (
        <div
          className={clsx("absolute left-2 top-5 rounded-3xl px-4 py-2")}
          style={{ backgroundColor: color }}
        >
          <p className="whitespace-nowrap text-sm leading-relaxed text-white">{message}</p>
        </div>
      )}
    </div>
  );
};

export default Cursor;
