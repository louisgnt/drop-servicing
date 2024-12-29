import { PropsWithChildren } from "react";
import { cn } from "@/app/lib/utils";

export default function Section(
  props: PropsWithChildren<{ className?: string }>
) {
  return (
    <section className={cn("px-2 py-1 m-auto", props.className)}>
      {props.children}
    </section>
  );
}
