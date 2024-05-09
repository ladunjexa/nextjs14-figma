import clsx from "clsx";
import React, { useRef } from "react";
import Dimensions from "../settings/dimension";
import Text from "../settings/text";
import Color from "../settings/color";
import Export from "../settings/export";
import { RightSidebarProps } from "@/types";
import { modifyShape } from "@/lib/shapes";
import { fabric } from "fabric";

const RightSidebar = ({
  elementAttributes,
  setElementAttributes,
  fabricRef,
  activeObjectRef,
  isEditingRef,
  syncShapeInStorage,
}: RightSidebarProps) => {
  const colorInputRef = useRef(null);
  const strokeInputRef = useRef(null);

  const handleInputChange = (property: string, value: string) => {
    if (!isEditingRef.current) isEditingRef.current = true;

    setElementAttributes(prev => ({
      ...prev,
      [property]: value,
    }));

    modifyShape({
      canvas: fabricRef.current as fabric.Canvas,
      property,
      value,
      activeObjectRef,
      syncShapeInStorage,
    });
  };

  return (
    <section
      className={clsx(
        "sticky right-0 flex h-full min-w-[227px] select-none flex-col overflow-y-auto border-t border-primary-grey-200 bg-primary-black pb-20 text-primary-grey-300 max-sm:hidden"
      )}
    >
      <h3 className="px-5 pt-4 text-xs uppercase">Design</h3>
      <span className="mt-3 border-b border-primary-grey-200 px-5 pb-4 text-xs text-primary-grey-300">
        Make changes to canvas as you like
      </span>

      <Dimensions
        width={elementAttributes.width}
        height={elementAttributes.height}
        handleInputChange={handleInputChange}
        isEditingRef={isEditingRef}
      />
      <Text
        fontFamily={elementAttributes.fontFamily}
        fontSize={elementAttributes.fontSize}
        fontWeight={elementAttributes.fontWeight}
        handleInputChange={handleInputChange}
      />
      <Color
        inputRef={colorInputRef}
        attribute={elementAttributes.fill}
        attributeType="fill"
        placeholder="color"
        handleInputChange={handleInputChange}
      />
      <Color
        inputRef={strokeInputRef}
        attribute={elementAttributes.stroke}
        attributeType="stroke"
        placeholder="stroke"
        handleInputChange={handleInputChange}
      />
      <Export />
    </section>
  );
};

export default RightSidebar;
