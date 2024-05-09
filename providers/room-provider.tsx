"use client";

import { ReactNode } from "react";
import { RoomProvider as LiveblockRoomProvider } from "../liveblocks.config";
import { ClientSideSuspense } from "@liveblocks/react";
import { LiveMap } from "@liveblocks/client";
import Loader from "@/components/layout/loader";

export default function RoomProvider({ children }: { children: ReactNode }) {
  return (
    <LiveblockRoomProvider
      id="fabric-canvas"
      initialPresence={{
        cursor: null,
        cursorColor: null,
        editingText: null,
        message: null,
      }}
      initialStorage={{
        canvasObjects: new LiveMap(),
      }}
    >
      <ClientSideSuspense fallback={<Loader />}>{() => children}</ClientSideSuspense>
    </LiveblockRoomProvider>
  );
}
