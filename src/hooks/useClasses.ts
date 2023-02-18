import { useEffect, useState } from "react";

type ClassesParam = Array<string | object> | object;
const isObject = (a: any): boolean => !!a && a.constructor === Object;

const getClassesFromObject = (obj: object): string => {
  return Object.keys(obj)
    .filter((keyObj) => {
      return typeof obj[keyObj as keyof object] === "boolean" ? obj[keyObj as keyof object] : false;
    })
    .join(" ")
    .trim();
};

export const useClasses = (classesObj: ClassesParam): string => {
  const [classes, setClasses] = useState("");

  useEffect(() => {
    if (Array.isArray(classesObj)) {
      setClasses(
        classesObj
          .map((item) => {
            if (isObject(item)) {
              return getClassesFromObject(item as object);
            } else if (typeof item === "string") {
              return item;
            } else {
              return "";
            }
          })
          .join(" ")
          .trim()
      );
    } else if (isObject(classesObj)) {
      setClasses(getClassesFromObject(classesObj));
    } else setClasses("");
  }, [classesObj]);

  return classes;
};
