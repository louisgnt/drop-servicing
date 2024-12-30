import { BotOff, Clock9, HandCoins } from "lucide-react";
import { Button } from "./ui/button";
import Section from "./Section";

export default function Advantages() {
  const challenges = [
    {
      icon: <BotOff className="w-6 h-6 text-blue-500" />,
      title: "No AI",
      description:
        "To create the design of your brand, no AI will be used. All our work is carried out by professional designers",
    },
    {
      icon: <Clock9 className="w-6 h-6 text-blue-500" />,
      title: "Less than 72h",
      description:
        "This is the maximum time in which you will receive your design. We guarantee quality work and rapid execution.",
    },
    {
      icon: <HandCoins className="w-6 h-6 text-blue-500" />,
      title: "Best price on the market",
      description:
        "We are committed to offering you the best price on the market, while ensuring exceptional quality. Our goal is to bring real added value to your brand.",
    },
  ];

  return (
    <Section>
      <div className="flex flex-col items-center bg-white">
        <div className="mt-16 mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">
            Our advantages
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Our expertise allows us to offer you the best service on the market.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-3 max-w-7xl">
          {challenges.map((challenge, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="p-4 mb-4 rounded-full bg-blue-50">
                {challenge.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                {challenge.title}
              </h3>
              <p className="leading-relaxed text-gray-600">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Button className="text-base font-semibold text-white bg-blue-400 hover:bg-blue-400/90">
            Improve my brand
          </Button>
        </div>
      </div>
    </Section>
  );
}
