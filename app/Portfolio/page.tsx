import Section from "@/components/Section";
import { GlobeIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";
import { AllCustomers } from "@/lib/customersData";

export default function Portolio() {
  return (
    <Section className="flex flex-col gap-12">
      <div className="flex flex-col items-center justify-center gap-4 text-center sm:mx-auto sm:max-w-md">
        <h1 className="text-4xl font-bold text-gray-800 ">Recent Projects</h1>
        <p className="text-gray-800">
          Check out some of our latest projects, done for customers around the
          world, in every industry.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 m-auto md:grid-cols-2 w-fit">
        {AllCustomers.map((customer, index) => (
          <div
            key={index}
            className="flex flex-col border border-gray-300 rounded-xl hover:shadow-md">
            <div>
              <Image
                src={customer.image}
                alt="Work for the customer"
                width={500}
                height={500}
              />
            </div>
            <div className="flex flex-col px-2 pb-2 space-y-2 md:space-y-1">
              <h1 className="mt-1 text-lg font-medium text-gray-800 ">
                {customer.name}
              </h1>
              <p className="text-xs font-light">{customer.date}</p>
              <p className="flex flex-wrap text-sm text-gray-500">
                {customer.description}
              </p>
              {customer.website && (
                <Link href={customer.website}>
                  <button className="flex items-center gap-2 px-2 py-1 text-xs text-white bg-black rounded-lg w-fit hover:bg-black/90">
                    <GlobeIcon />
                    Website
                  </button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
