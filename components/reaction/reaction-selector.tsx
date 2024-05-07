import clsx from "clsx";
import React from "react";

type Props = {
  setReaction: (reaction: string) => void;
};

const REACTIONS = ["👍", "🔥", "😍", "👀", "😱", "🙁"];

export default function ReactionSelector({ setReaction }: Props) {
  return (
    <div
      className={clsx(
        "absolute bottom-20 left-0 right-0 mx-auto w-fit transform rounded-full bg-white px-2"
      )}
      onPointerMove={(e) => e.stopPropagation()}
    >
      {REACTIONS.map((reaction) => (
        <ReactionButton
          key={reaction}
          reaction={reaction}
          onSelect={setReaction}
        />
      ))}
    </div>
  );
}

function ReactionButton({
  reaction,
  onSelect,
}: {
  reaction: string;
  onSelect: (reaction: string) => void;
}) {
  return (
    <button
      className="transform select-none p-2 text-xl transition-transform hover:scale-150 focus:scale-150 focus:outline-none"
      onPointerDown={() => onSelect(reaction)}
    >
      {reaction}
    </button>
  );
}
