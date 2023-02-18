import { useEffect, useRef, RefObject } from "react";

export const useOnClickOutside = <T extends HTMLDivElement>(handler: (event: MouseEvent) => void, ref?: RefObject<T>) => {
  const domNode = ref || useRef<T>(null);
  useEffect(() => {
    const maybeHandler = (event: MouseEvent) => {
      if (!domNode.current?.contains(event.target as Node)) {
        handler(event);
      }
    };
    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  }, [handler, domNode]);
  return domNode;
};
