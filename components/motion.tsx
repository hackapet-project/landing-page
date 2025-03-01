"use client";

import { HTMLMotionProps, motion as framerMotion } from "framer-motion";

type MotionDivProps = HTMLMotionProps<"div">;

export const motion = {
  div: (props: MotionDivProps) => <framerMotion.div {...props} />,
  h1: (props: HTMLMotionProps<"h1">) => <framerMotion.h1 {...props} />,
  h2: (props: HTMLMotionProps<"h2">) => <framerMotion.h2 {...props} />,
  h3: (props: HTMLMotionProps<"h3">) => <framerMotion.h3 {...props} />,
  p: (props: HTMLMotionProps<"p">) => <framerMotion.p {...props} />,
  span: (props: HTMLMotionProps<"span">) => <framerMotion.span {...props} />,
  a: (props: HTMLMotionProps<"a">) => <framerMotion.a {...props} />,
  ul: (props: HTMLMotionProps<"ul">) => <framerMotion.ul {...props} />,
  li: (props: HTMLMotionProps<"li">) => <framerMotion.li {...props} />,
  button: (props: HTMLMotionProps<"button">) => <framerMotion.button {...props} />,
  section: (props: HTMLMotionProps<"section">) => <framerMotion.section {...props} />,
};