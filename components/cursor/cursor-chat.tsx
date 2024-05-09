import CursorSVG from "@/public/assets/CursorSVG";
import clsx from "clsx";
import React from "react";
import { type CursorChatProps, CursorMode } from "@/types";

const CursorChat = ({ cursor, cursorState, setCursorState, updateMyPresence }: CursorChatProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateMyPresence({ message: e.target.value });
    setCursorState({
      mode: CursorMode.Chat,
      previousMessage: null,
      message: e.target.value,
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setCursorState({
        mode: CursorMode.Chat,
        message: "",
        // @ts-ignore
        previousMessage: cursorState.message,
      });
    } else if (e.key === "Escape") {
      setCursorState({ mode: CursorMode.Hidden });
    }
  };

  return (
    <div
      className={clsx("absolute left-0 top-0")}
      style={{
        transform: `translateX(${cursor.x}px) translateY(${cursor.y}px)`,
      }}
    >
      {cursorState.mode === CursorMode.Chat && (
        <>
          <CursorSVG color="#000" />

          <div
            className={clsx(
              "absolute left-2 top-5 p-4",
              "rounded-[20px] bg-blue-500 text-sm leading-relaxed text-white"
            )}
            onKeyUp={e => e.stopPropagation()} // Prevents the event from bubbling up the DOM tree
          >
            {cursorState.previousMessage && <div>{cursorState.previousMessage}</div>}
            <input
              className={clsx(
                "z-10 w-60 border-none bg-transparent text-white outline-none placeholder:text-blue-300"
              )}
              autoFocus={true}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder={cursorState.previousMessage ? "" : "Type a message..."}
              value={cursorState.message}
              maxLength={50}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CursorChat;
