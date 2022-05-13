import { MailIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="p-4 text-black bg-white bottom-0 w-full">
      <div className="text-center text-xs">
        <p>Built and designed by Todd Mason</p>

        <div className="flex justify-center items-center mt-1">
          <p>All rights reserved.</p>
          <div className="relative h-[16px] w-[16px] ml-1">
            <Image
              src="/copyrightlogo4.png"
              className="mix-blend-difference"
              alt="copyright logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-center items-center">
        <a
          href="https://github.com/MaseCodes20"
          target="_blank"
          rel="noreferrer"
          className="mx-3"
        >
          <div className="iconContainer">
            <Image
              src="/GitHub-Mark-120px-plus.png"
              alt="GitHub logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/todd-mason-491659231/"
          target="_blank"
          rel="noreferrer"
          className="mr-1 text-white"
        >
          <div className="iconContainer">
            <Image
              src="/LI-In-Bug.png"
              alt="LinkedIn logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </a>

        <button className="ml-1" aria-label="Email button">
          <MailIcon className="h-8 text-black" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
