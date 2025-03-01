"use client";

import { HTMLMotionProps, motion as framerMotion } from "framer-motion";
import React from "react";

// Use the correct React types for the ref
type MotionDivProps = HTMLMotionProps<"div"> & React.RefAttributes<HTMLDivElement>;

export const motion = {
  div: React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>((props, ref) =>
      <framerMotion.div {...props} ref={ref} />
  ),
  h1: React.forwardRef<HTMLHeadingElement, HTMLMotionProps<"h1">>((props, ref) =>
      <framerMotion.h1 {...props} ref={ref} />
  ),
  h2: React.forwardRef<HTMLHeadingElement, HTMLMotionProps<"h2">>((props, ref) =>
      <framerMotion.h2 {...props} ref={ref} />
  ),
  h3: React.forwardRef<HTMLHeadingElement, HTMLMotionProps<"h3">>((props, ref) =>
      <framerMotion.h3 {...props} ref={ref} />
  ),
  p: React.forwardRef<HTMLParagraphElement, HTMLMotionProps<"p">>((props, ref) =>
      <framerMotion.p {...props} ref={ref} />
  ),
  span: React.forwardRef<HTMLSpanElement, HTMLMotionProps<"span">>((props, ref) =>
      <framerMotion.span {...props} ref={ref} />
  ),
  a: React.forwardRef<HTMLAnchorElement, HTMLMotionProps<"a">>((props, ref) =>
      <framerMotion.a {...props} ref={ref} />
  ),
  ul: React.forwardRef<HTMLUListElement, HTMLMotionProps<"ul">>((props, ref) =>
      <framerMotion.ul {...props} ref={ref} />
  ),
  li: React.forwardRef<HTMLLIElement, HTMLMotionProps<"li">>((props, ref) =>
      <framerMotion.li {...props} ref={ref} />
  ),
  button: React.forwardRef<HTMLButtonElement, HTMLMotionProps<"button">>((props, ref) =>
      <framerMotion.button {...props} ref={ref} />
  ),
  section: React.forwardRef<HTMLElement, HTMLMotionProps<"section">>((props, ref) =>
      <framerMotion.section {...props} ref={ref} />
  ),
};