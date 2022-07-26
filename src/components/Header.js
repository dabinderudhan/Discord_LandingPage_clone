import React, { useState } from "react";
import { ReactComponent as DiscordLogo } from "../assets/discord_main_logo.svg";
import { ReactComponent as OpenButton } from "../assets/open_icon.svg";
import Button from "./Button";
import { ReactComponent as CloseButton } from "../assets/close_icon.svg";
import { ReactComponent as UpArrow } from "../assets/up_arrow.svg";
import App from "../App";

function showSideBar(setSideBarClass, sideBarClass) {
  setSideBarClass(!sideBarClass);
  <App styleClass="opacity-50" />;
}

function Header() {
  const [sideBarClass, setSideBarClass] = useState(false);

  return (
    <header className="xl:container xl:mx-auto flex h-full justify-between items-center px-10 py-5">
      <div
        className={`${
          sideBarClass ? null : "hidden"
        } w-screen h-screen fixed top-0 left-0 z-30 bg-black opacity-40`}
      ></div>
      <a href="/">
        <DiscordLogo />
      </a>
      <div className="flex gap-4">
        <Button buttonText="Login" />
        <OpenButton
          className="inline-block cursor-pointer"
          onClick={() => {
            showSideBar(setSideBarClass, sideBarClass);
          }}
        />
      </div>

      <aside
        className={`${
          sideBarClass ? "flex" : "hidden"
        } fixed top-0 right-0 w-80 h-screen pl-8 py-6 pr-4 z-40 rounded-lg bg-white flex-col gap-4`}
      >
        <div className="flex justify-between mb-3">
          <a href="/">
            <DiscordLogo className="text-black" />
          </a>
          <CloseButton
            className="w-6 cursor-pointer"
            onClick={() => {
              showSideBar(setSideBarClass, sideBarClass);
            }}
          />
        </div>
        <div className="h-px w-11/12 bg-[#ebedef]"></div>
        <nav className="w-11/12">
          <ul className="flex flex-col gap-4">
            <li className="px-4 py-2 rounded-md bg-[#f6f6f6]">
              <a
                href="/"
                className="text-[#37c4f5] hover:underline hover:decoration-[#37c4f5]"
              >
                Home
              </a>
            </li>
            <li>
              <a href="/" className="px-4 hover:underline">
                Download
              </a>
            </li>
            <li>
              <a href="/" className="px-4 hover:underline">
                Nitro
              </a>
            </li>
            <li>
              <a href="/" className="px-4 hover:underline">
                Safety
              </a>
            </li>
            <li>
              <a href="/" className="px-4 hover:underline">
                Mod Academy
              </a>
            </li>
            <li>
              <a href="/" className="px-4 hover:underline">
                Support
              </a>
            </li>
            <li>
              <a href="/" className="px-4 hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="/" className="px-4 hover:underline">
                Careers
              </a>
            </li>
          </ul>
        </nav>
        <div className="h-full flex-grow flex items-end">
          <Button
            icon={<UpArrow className="inline-block w-4" />}
            buttonText="Download for Windows"
            styleClass="text-sm font-bold flex items-center justify-center gap-2 px-5 py-3 w-full bg-[#5865f2] text-white hover:text-white hover:bg-[#7983f5]"
          />
        </div>
      </aside>
    </header>
  );
}

export { Header, showSideBar };
