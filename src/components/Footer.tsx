"use client";

import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

export function Footer() {
  return (
    <div id="footer" className="w-full bg-violet-950 relative">
      <footer className="text-white max-w-7xl mx-auto py-10 w-full">
        <div className="flex items-center justify-center gap-3 text-gray-400">
          <a target="_blank" href="https://github.com/antonioclaudioofc">
            <LinkedinLogo
              className="w-10 h-10 cursor-pointer hover:text-gray-200"
              size={32}
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/antonio-claudio-233741231/"
          >
            <GithubLogo
              className="w-10 h-10 cursor-pointer hover:text-gray-200"
              size={32}
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
