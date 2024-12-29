import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export default function Section(
  props: PropsWithChildren<{ className?: string }>
) {
  return (
    <section className={cn("max-w-4xl px-2 py-1 m-auto", props.className)}>
      {props.children}
    </section>
  );
}
