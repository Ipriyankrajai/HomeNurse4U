import { cn } from "@/utilits";
import React from "react";

function Button(props) {
  const { type, children } = props;
  const commonCSS = "px-[12px] py-[20px] rounded-[6px]";
  const typeObj = {
    primary: "",
  };
  return <div className={cn([typeObj[type], commonCSS])}>{children}</div>;
}

export default Button;
