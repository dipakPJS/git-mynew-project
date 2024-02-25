import { PrismicNextLink } from "@prismicio/next";
import React from "react";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import clsx from "clsx";
import { KeyTextField, LinkField } from "@prismicio/client";

type ButtonProps = {
  linkField: LinkField;
  label: KeyTextField;
  showIcon?: boolean;
  className?: string;
};

export default function Button({
  linkField,
  label,
  showIcon = true,
  className,
}: ButtonProps) {
  return (
    <PrismicNextLink
      field={linkField}
      className={clsx(
        "group relative text-slate-900 flex w-fit items-center justify-center overflow-hidden rounded-[50px]  border-2 border-slate-900 bg-slate-50  px-8 py-2 font-bold transition-transform ease-out  hover:scale-105",
        className,
      )}
    >
      <span
        className={clsx(
          "absolute inset-0 z-0 h-ful translate-y-9 bg-[#0037ff] rounded-[50px] transition-transform  duration-300 ease-in-out group-hover:translate-y-0",
        )}
      />
      <span className="relative flex items-center justify-center gap-2">
        {label} {showIcon && <FaSquareArrowUpRight className="inline-block" />} 
      </span>
    </PrismicNextLink>
  );
}