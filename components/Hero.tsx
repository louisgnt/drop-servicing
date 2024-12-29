import Section from "../Section";
import Link from "next/link";

export function Hero() {
  return (
    <div>
      <Section className="flex flex-col justify-center items-center gap-8">
        <button>
          <Link href="/">🎉 -30% exclusivement ce week-end </Link>
        </button>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-[-0.020em] text-center leading-[0.9] text-colored">
          {/* Changer text la c'est dla merde c'est juste pour avoir un rendu */}
          The <span className="text-blue-300">Custom </span>Brand<br></br>
          Designed by <span className="text-blue-300">Experts</span>
        </h1>
        <h2 className="w-full max-w-2xl text-lg font-semibold leading-tight text-center text-gray-400 lg:text-2xl md:text-xl">
          {/* Changer text la c'est dla merde c'est juste pour avoir un rendu */}
          Prices that defy all competition ! Starting at only $130!
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-500 font-medium">
          {/* Changer les buttons c'est juste pour le design on s'en branle en soit  */}
          <button>
            View our packages{" "}
            {/* <SendIcon size={16} color="#FFFFFF" className="text-foreground" /> */}
          </button>

          <Link href="#portfolio" className="text-sm">
            How we work
          </Link>
        </div>
      </Section>
    </div>
  );
}
