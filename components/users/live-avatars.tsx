import React from "react";
import { Avatar } from "./avatar";
import { useOthersMapped, useSelf } from "@/liveblocks.config";
import { AnimatePresence, motion } from "framer-motion";
import { generateGradient, generateRandomName } from "@/lib/utils";

/**
 * This file shows how to add live avatars like you can see them at the top right of a Google Doc or a Figma file.
 *
 * The users avatar and name are not set via the `useMyPresence` hook like the cursors.
 * They are set from the authentication endpoint.
 *
 * See pages/api/liveblocks-auth.ts and https://liveblocks.io/docs/api-reference/liveblocks-node#authorize for more information
 */

const MAX_OTHERS = 3;

const animationProps = {
  initial: { width: 0, transformOrigin: "left" },
  animate: { width: "auto", height: "auto" },
  exit: { width: 0 },
  transition: {
    type: "spring",
    damping: 15,
    mass: 1,
    stiffness: 200,
    restSpeed: 0.01,
  },
};

const avatarProps = {
  style: { marginLeft: "-0.45rem" },
  size: 40,
  outlineWidth: 3,
  outlineColor: "white",
};

function containsColor(colors: [string, string][], color: [string, string]) {
  return colors?.some(([color1, color2]) => color1 === color[0] || color2 === color[1]);
}

export default function LiveAvatars() {
  //
  // RATIONALE:
  // Using useOthersMapped here and only selecting/subscribing to the "info"
  // part of each user, which is static data that won't change (unlike
  // presence). In this example we don't use presence, but in a real app this
  // makes a difference: if we did not use a selector function here, these
  // avatars would get needlessly re-rendered any time any of the others moved
  // their cursors :)
  //
  const others = useOthersMapped(other => other.info);
  const currentUser = useSelf();
  const hasMoreUsers = others.length > MAX_OTHERS;

  const memoizedAvatars = React.useMemo(() => {
    const selfGradient = generateGradient();
    let othersGradient: [string, string][] | null = null;
    othersGradient = others.slice(0, MAX_OTHERS).map(() => {
      let gradient;
      do {
        gradient = generateGradient();
      } while (
        containsColor([selfGradient], gradient) ||
        containsColor(othersGradient as [string, string][], gradient)
      );
      return gradient;
    });

    return (
      <div
        style={{
          minHeight: avatarProps.size + "px",
          display: "flex",
          paddingLeft: "0.75rem",
          overflow: "hidden",
        }}
      >
        <AnimatePresence>
          {hasMoreUsers ? (
            <motion.div key="count" {...animationProps}>
              <Avatar {...avatarProps} variant="more" count={others.length - 3} />
            </motion.div>
          ) : null}

          {others
            .slice(0, MAX_OTHERS)
            .reverse()
            .map(([key, info], _i) => (
              <motion.div key={key} {...animationProps}>
                <Avatar
                  {...avatarProps}
                  src={`https://liveblocks.io/avatars/avatar-${Math.floor(Math.random() * 3)}.png`}
                  name={generateRandomName()}
                  color={othersGradient[_i]}
                />
              </motion.div>
            ))}

          {currentUser ? (
            <motion.div key="you" {...animationProps}>
              <Avatar
                {...avatarProps}
                src={`https://liveblocks.io/avatars/avatar-${Math.floor(Math.random() * 3)}.png`}
                name={`${generateRandomName()} (you)`}
                color={selfGradient}
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [others.length]);

  return memoizedAvatars;
}
