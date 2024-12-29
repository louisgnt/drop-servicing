import { PropsWithChildren } from "react";
import { cn } from "@/app/lib/utils";

export function PrimaryBtn(props: PropsWithChildren<{ className?: string }>) {
  return (
    <button
      className={cn(
        " px-4 py-1 bg-blue-400 text-white font-semibold  rounded-full hover:bg-blue-400/85 transition-colors md:px-6 md:py-2 text-sm md:text-base animate-slideUp delay-350",
        props.className
      )}>
      {props.children}
    </button>
  );
}

export function SecondaryBtn(props: PropsWithChildren<{ className?: string }>) {
  return (
    <button
      className={cn(
        " px-4 py-1 bg-white border-2 border-blue-400 text-blue-400 font-semibold  rounded-full hover:bg-blue-400 hover:text-white transition-colors md:px-6 md:py-2 text-sm md:text-base animate-slideUp delay-350",
        props.className
      )}>
      {props.children}
    </button>
  );
}
