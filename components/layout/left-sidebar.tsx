"use client";

import clsx from "clsx";
import React, { useMemo } from "react";
import Image from "next/image";

import { getShapeInfo } from "@/lib/utils";

type Props = {
  allShapes: Array<any>;
};

const LeftSidebar = ({ allShapes }: Props) => {
  const memoizedShapes = useMemo(() => {
    return (
      <section
        className={clsx(
          "sticky left-0 flex h-full min-w-[227px] select-none flex-col overflow-y-auto border-t border-primary-grey-200 bg-primary-black pb-20 text-primary-grey-300 max-sm:hidden"
        )}
      >
        <h3 className="border border-primary-grey-200 px-5 py-4 text-xs uppercase">Elements</h3>
        <div className="flex flex-col">
          {allShapes &&
            allShapes?.map((shape: any) => {
              const info = getShapeInfo(shape[1]?.type);

              return (
                <div
                  key={shape[1]?.objectId}
                  className={clsx(
                    "group my-1 flex items-center gap-2 px-5 py-2.5 hover:cursor-pointer hover:bg-primary-green hover:text-primary-black"
                  )}
                >
                  <Image
                    src={info?.icon}
                    alt="Layer"
                    width={16}
                    height={16}
                    className="group-hover:invert"
                  />
                  <h3 className="text-sm font-semibold capitalize">{info.name}</h3>
                </div>
              );
            })}
        </div>
      </section>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allShapes?.length]);

  return memoizedShapes;
};

export default LeftSidebar;
