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
          "flex flex-col border-t border-primary-grey-200 bg-primary-black text-primary-grey-300 min-w-[227px] sticky left-0 h-full max-sm:hidden select-none overflow-y-auto pb-20"
        )}
      >
        <h3 className="border border-primary-grey-200 px-5 py-4 text-xs uppercase">
          Elements
        </h3>
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
                  <h3 className="text-sm font-semibold capitalize">
                    {info.name}
                  </h3>
                </div>
              );
            })}
        </div>
      </section>
    );
  }, [allShapes?.length]);

  return memoizedShapes;
};

export default LeftSidebar;
