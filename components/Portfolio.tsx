import Section from "./Section";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

// Il faut changer les videos mais si tu valides je pense que la page est op

export default function Portfolio() {
  return (
    <Section>
      <div className="flex flex-col items-center bg-white">
        {/* Title and description */}
        <div className="mt-16 mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">
            Our Creations
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Explore the collection of our work.
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid w-full grid-cols-1 gap-6 p-6 md:grid-cols-12 max-w-7xl animate-slideUp">
          {/* Top Left Card - Smaller width */}
          <div className="flex flex-col gap-4 md:col-span-5">
            <div className="w-full h-[300px] rounded-3xl bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 p-6">
              <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
                <video
                  className="absolute object-contain w-full h-full"
                  autoPlay
                  loop
                  muted
                  playsInline>
                  <source
                    src="https://hasque.com/images/instagram.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            <div className="flex flex-col gap-1 px-1">
              <h3 className="text-lg font-medium text-black">Graphic Charts</h3>
              <p className="text-sm text-black/60">
                A graphic charter guarantees you a coherent visual identity on
                all its communication media
              </p>
            </div>
          </div>

          {/* Top Right Card - Larger width */}
          <div className="flex flex-col gap-4 md:col-span-7 animate-slideUp">
            <div className="w-full h-[300px] rounded-3xl bg-blue-600 p-6">
              <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
                <video
                  className="absolute object-contain w-full h-full"
                  autoPlay
                  loop
                  muted
                  playsInline>
                  <source
                    src="https://firebasestorage.googleapis.com/v0/b/proto-3691f.appspot.com/o/videos%2Ftest-download.mp4?alt=media&token=45bee45e-7948-4ece-9306-53ffd9953020"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            <div className="flex flex-col gap-1 px-1">
              <h3 className="text-lg font-medium text-black">Logo Design</h3>
              <p className="text-sm text-black/60">
                This is the first visual element that customers associate with a
                brand. A good logo conveys your values
              </p>
            </div>
          </div>

          {/* Bottom Left Card - Larger width */}
          <div className="flex flex-col gap-4 md:col-span-7 animate-slideUp">
            <div className="w-full h-[300px] rounded-3xl bg-indigo-600 p-6">
              <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
                <video
                  className="absolute object-contain w-full h-full"
                  autoPlay
                  loop
                  muted
                  playsInline>
                  <source
                    src="https://firebasestorage.googleapis.com/v0/b/proto-3691f.appspot.com/o/videos%2Ftest-download.mp4?alt=media&token=45bee45e-7948-4ece-9306-53ffd9953020"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            <div className="flex flex-col gap-1 px-1">
              <h3 className="text-lg font-medium text-black">
                Personalized Request{" "}
              </h3>
              <p className="text-sm text-black/60">
                We will make you other creations on request to grow your brand
              </p>
            </div>
          </div>

          {/* Bottom Right Card - Smaller width */}
          <div className="flex flex-col gap-4 md:col-span-5 animate-slideUp">
            <div className="w-full h-[300px] rounded-3xl bg-yellow-400 p-6">
              <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
                <video
                  className="absolute object-contain w-full h-full"
                  autoPlay
                  loop
                  muted
                  playsInline>
                  <source
                    src="https://hasque.com/images/instagram.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            <div className="flex flex-col gap-1 px-1">
              <h3 className="text-lg font-medium text-black">
                Social Networks
              </h3>
              <p className="text-sm text-black/60">
                Social networks will allow you to attract and retain your
                audience
              </p>
            </div>
          </div>
        </div>

        {/* Button at the bottom */}
        <div className="mt-12 mb-16">
          <Button className="flex items-center gap-2 text-base font-semibold text-white transition-colors duration-300 bg-blue-400 border-2 border-blue-400 shadow-md hover:bg-white hover:text-blue-400 hover:shadow-lg">
            Taking action
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </Section>
  );
}
