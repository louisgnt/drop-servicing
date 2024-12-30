import { Button } from "@/components/ui/button";
import Section from "./Section";

export default function CTA() {
  return (
    <Section>
      <div className="relative max-w-5xl px-4 py-24 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl md:text-6xl">
            <span className="block text-blue-400">Boost your brand !</span>
            <span className="block">Start using our services today.</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600">
            Don&apos;t wait any longer, we have the solutions to grow your brand
            at the best price
          </p>

          <div className="flex items-center justify-center gap-4 mt-10 align-middle">
            <Button className="text-base font-semibold text-white bg-blue-400 hover:bg-blue-400/90">
              Get started
            </Button>
            <Button
              variant="ghost"
              className="text-base font-semibold text-gray-800 group">
              Contact us
              <svg
                className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
