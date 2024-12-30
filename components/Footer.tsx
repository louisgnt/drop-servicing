import { navLink } from "@/lib/placeholder-data";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col w-full px-8 pt-32 pb-8">
      <div className="flex flex-col gap-8">
        <p className="flex justify-center text-gray-800">Tosh</p>
        <div className="flex flex-col items-center justify-around gap-6 sm:flex-row sm:gap-0">
          <div className="flex items-center justify-center ">
            <p className="self-end max-w-xs pb-2 italic text-center text-gray-800 border-b-2 border-blue-400 sm:border-b-0 sm:border-r-2">
              Making the world a better place by giving back to those around us.
            </p>
          </div>

          <div className="flex flex-row gap-12">
            <div className="flex flex-col gap-4">
              <h1 className="text-lg font-semibold text-blue-400">Company</h1>
              <nav className="flex flex-col gap-2 text-gray-800">
                {navLink.map((nlink, index) => (
                  <Link
                    href={nlink.href}
                    key={index}
                    className="hover:underline">
                    {nlink.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex flex-col gap-4 ">
              <h1 className="text-lg font-semibold text-blue-400">Legal</h1>
              <nav className="flex flex-col gap-2 text-base text-gray-800">
                <Link href={"/"} className="hover:underline">
                  Terms of Use
                </Link>
                <Link href={"/"} className="hover:underline">
                  Legal Notice
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-24 border-t border-gray-300">
          <p className="flex justify-center text-gray-700">
            © 2024 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
