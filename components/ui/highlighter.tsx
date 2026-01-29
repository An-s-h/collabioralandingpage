"use client";

import { useEffect, useRef, useState } from "react";
import type React from "react";
import { useInView } from "framer-motion";

type AnnotationAction = "highlight" | "underline";

interface HighlighterProps {
  children: React.ReactNode;
  action?: AnnotationAction;
  color?: string;
  strokeWidth?: number;
  animationDuration?: number;
  iterations?: number;
  padding?: number;
  multiline?: boolean;
  isView?: boolean;
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#D0C4E2",
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 2,
  padding = 3,
  multiline = true,
  isView = false,
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(!isView);

  const isInView = useInView(elementRef, {
    once: true,
    margin: "-10%",
  });

  useEffect(() => {
    if (isView && isInView) {
      setIsVisible(true);
    }
  }, [isView, isInView]);

  const highlightStyle: React.CSSProperties = {
    backgroundImage:
      action === "highlight"
        ? `linear-gradient(120deg, ${color}40 0%, ${color}40 100%)`
        : "none",
    backgroundRepeat: "no-repeat",
    backgroundSize: isVisible ? "100% 0.4em" : "0% 0.4em",
    backgroundPosition: "0 88%",
    transition: `background-size ${animationDuration}ms ease-in-out`,
    paddingLeft: `${padding}px`,
    paddingRight: `${padding}px`,
    paddingTop: action === "underline" ? "0" : `${padding}px`,
    paddingBottom: action === "underline" ? "0" : `${padding}px`,
  };

  const underlineStyle: React.CSSProperties = {
    position: "relative",
    paddingBottom: `${padding + strokeWidth}px`,
  };

  const underlineLineStyle: React.CSSProperties = {
    position: "absolute",
    bottom: `${padding}px`,
    left: 0,
    width: isVisible ? "100%" : "0%",
    height: `${strokeWidth}px`,
    backgroundColor: color,
    transition: `width ${animationDuration}ms ease-in-out`,
  };

  return (
    <span
      ref={elementRef}
      className="relative inline-block bg-transparent"
      style={action === "highlight" ? highlightStyle : underlineStyle}
    >
      {children}
      {action === "underline" && (
        <span style={underlineLineStyle} className="absolute bottom-0 left-0 right-0" />
      )}
    </span>
  );
}
