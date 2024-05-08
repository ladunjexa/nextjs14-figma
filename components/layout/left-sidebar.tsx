import clsx from "clsx";
import React from "react";

type Props = {};

const LeftSidebar = (props: Props) => {
  return (
    <section
      className={clsx(
        "flex flex-col border-t border-primary-grey-200 bg-primary-black text-primary-grey-300 min-w-[227px] sticky left-0 h-full max-sm:hidden select-none overflow-y-auto pb-20"
      )}
    >
      <h3 className="px-5 pt-4 text-xs uppercase">Elements</h3>
    </section>
  );
};

export default LeftSidebar;
