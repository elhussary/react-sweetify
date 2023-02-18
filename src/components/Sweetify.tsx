import React, { useState, useEffect } from "react";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import { useClasses } from "../hooks/useClasses";
import { ISweetify } from "../interfaces/ISweetify";

// Sweetify Component (Modal)
export default function Sweetify(props: ISweetify) {
  const [isSweetify, setIsSweetify] = useState(false);
  // passing in multiple classes
  const contentClasses = useClasses([
    "sweetify-content",
    props.options?.width,
    props.className,
    props.fullscreenBelow && `fullscreen-${props.fullscreenBelow}`,
  ]);

  const toggleShowSweetify = () => {
    setIsSweetify(!isSweetify);
  };

  const domNode = useOnClickOutside(() => {
    setIsSweetify(false);
  });

  // prevent the Body from scrolling when Sweetify is opened
  useEffect(() => {
    document.body.classList.toggle("sweetify-no-scroll", isSweetify);
  }, [isSweetify]);

  return (
    <>
      <button onClick={toggleShowSweetify}>{props.buttonText ? props.buttonText : "Open Modal"}</button>
      {isSweetify && (
        <section className={`sweetify-container ${props.options?.position ? props.options?.position : ""}`}>
          <div ref={domNode} className={contentClasses}>
            {props.children}
            <button className="close-sweetify" onClick={toggleShowSweetify}>
              <svg aria-hidden="true" viewBox="0 0 14 16" fill="#bebebe">
                <path
                  fillRule="evenodd"
                  d="M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"></path>
              </svg>
            </button>
          </div>
        </section>
      )}
    </>
  );
}
