"use client";

import Image from "next/image";
import { Composer, ComposerProps } from "@liveblocks/react-comments";

type Props = {
  onComposerSubmit: ComposerProps["onComposerSubmit"];
};

const PinnedComposer = ({ onComposerSubmit, ...props }: Props) => {
  return (
    <div className="absolute flex gap-4" {...props}>
      <div className="relative flex size-9 select-none items-center justify-center rounded-r-full rounded-bl-full rounded-tl-md bg-white shadow">
        <Image
          src={`https://liveblocks.io/avatars/avatar-${Math.floor(Math.random() * 30)}.png`}
          alt="someone"
          width={28}
          height={28}
          className="rounded-full"
        />
      </div>
      <div className="flex min-w-96 flex-col overflow-hidden rounded-lg bg-white p-2 text-sm shadow">
        {/**
         * We're using the Composer component to create a new comment.
         * Liveblocks provides a Composer component that allows to
         * create/edit/delete comments.
         *
         * Composer: https://liveblocks.io/docs/api-reference/liveblocks-react-comments#Composer
         */}
        <Composer
          onComposerSubmit={onComposerSubmit}
          autoFocus={true}
          onKeyUp={e => {
            e.stopPropagation();
          }}
        />
      </div>
    </div>
  );
};

export default PinnedComposer;
