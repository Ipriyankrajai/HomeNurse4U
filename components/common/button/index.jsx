import Link from "next/link";
import React from "react";

const css = {
  ultra_small: {
    heightCSS: "h-[30px]",
  },
  supper_small: {
    heightCSS: "h-[35px]",
  },
  small: {
    heightCSS: "h-[45px]",
  },
  default: {
    heightCSS: "h-[60px]",
  },
  large: {
    heightCSS: "h-[70px]",
  },
};

const Button = (props) => {
  const {
    children,
    onClick,
    link = false,
    size = "default",
    fullWidth = false,
    type = "fill",
    disable = false,
    href = "/",
    className = "",
  } = props;

  const selectedType = css[size || "default"];

  // common CSS
  const commonCSS = `tracking-[0.5px] ${
    size === "ultra_small"
      ? "text-[14px]  leading-[14px] rounded-[6px]"
      : "text-[15px] leading-[15px] rounded-[10px]"
  } sf-d-m  duration-300 transition-all uppercase`;
  // color
  const fillCSS =
    "bg-primary text-white hover:bg-[#006C50] active:bg-[#005C44]";
  const outlineCSS =
    "border border-[#008060] text-[#008060] hover:border-[#006C50] hover:text-[#006C50] active:border-[#005C44] active:text-[#005C44]";
  const disableCSS = "bg-[#BDC1CC] text-white";
  const colorCSS = disable
    ? disableCSS
    : type === "outline"
    ? outlineCSS
    : fillCSS;

  //padding CSS
  const paddingCSS =
    size === "large"
      ? "px-[30px] py-[25px]"
      : size === "ultra_small"
      ? "px-[20px] py-[5px]"
      : "px-[24px] py-[12px]";

  //   height CSS
  // const heightCSS =
  //   size === "small" ? "h-[45px]" : size === "medium" ? "h-[60px]" : "h-[70px]";

  // width CSS
  const widthCSS = fullWidth ? "w-full" : "w-fit";

  return (
    <>
      {link ? (
        <Link
          href={href}
          className={`${commonCSS} ${colorCSS} ${paddingCSS} ${widthCSS} ${className} ${selectedType?.heightCSS} flex justify-center items-center`}
        >
          {children}
        </Link>
      ) : (
        <button
          className={`${commonCSS} ${colorCSS} ${paddingCSS} ${widthCSS} ${className} ${selectedType?.heightCSS}`}
          disabled={disable}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
