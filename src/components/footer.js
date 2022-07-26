import UsaFlag from "../assets/usa_flag.png";
import { ReactComponent as Twitter } from "../assets/twitter_icon.svg";
import { ReactComponent as Instagram } from "../assets/instagram_icon.svg";
import { ReactComponent as Facebook } from "../assets/facebook_icon.svg";
import { ReactComponent as Youtube } from "../assets/youtube_icon.svg";
import { ReactComponent as DownArrow } from "../assets/down_arrow.svg";
import Button from "./Button";
import DiscordLogo from "../assets/discord_main_logo.svg";

function FooterNavItem(prop) {
  return (
    <li>
      <a href="/" className="hover:underline hover:decoration-white">
        {prop.name}
      </a>
    </li>
  );
}

const Footer = (prop) => {
  return (
    <footer className="bg-[#23272a] text-white py-20 px-10">
      <div
        className={`${prop.container} xl:container xl:mx-auto 2xl:max-w-screen-xl grid grid-cols-4 gap-10 lg:gap-5 lg:grid-cols-6 lg:auto-cols-fr`}
      >
        <header className="flex flex-col gap-8 row-span-2 col-span-2">
          <h1 className="text-5xl font-extrabold w-2/3 uppercase text-[#5865f2] leading-10 lg:w-11/12">
            Imagine a place
          </h1>
          <div className="flex gap-3 items-center">
            <img src={UsaFlag} alt="usa flag" className="w-8"></img>
            <p>English, USA</p>
            <DownArrow />
          </div>
          <ul className="flex gap-8">
            <li>
              <a href="/">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="/">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="/">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="/">
                <Youtube />
              </a>
            </li>
          </ul>
        </header>
        <nav>
          <ul className="flex flex-col gap-2">
            <li className="text-[#4265e6]">Product</li>
            <FooterNavItem name="Download" />
            <FooterNavItem name="Nitro" />
            <FooterNavItem name="Status" />
          </ul>
        </nav>
        <nav>
          <ul className="flex flex-col gap-2">
            <li className="text-[#4265e6]">Company</li>
            <FooterNavItem name="About" />
            <FooterNavItem name="Jobs" />
            <FooterNavItem name="Branding" />
            <FooterNavItem name="Newsroom" />
          </ul>
        </nav>
        <nav>
          <ul className="flex flex-col gap-2">
            <li className="text-[#4265e6]">Resources</li>
            <FooterNavItem name="College" />
            <FooterNavItem name="Support" />
            <FooterNavItem name="Safety" />
            <FooterNavItem name="Blog" />
            <FooterNavItem name="Feedback" />
            <FooterNavItem name="Developers" />
            <FooterNavItem name="StreamKit" />
          </ul>
        </nav>
        <nav>
          <ul className="flex flex-col gap-2">
            <li className="text-[#4265e6]">Policies</li>
            <FooterNavItem name="Terms" />
            <FooterNavItem name="Privacy" />
            <FooterNavItem name="Cookie Settings" />
            <FooterNavItem name="Guidelines" />
            <FooterNavItem name="Acknowledgements" />
            <FooterNavItem name="Licences" />
            <FooterNavItem name="Moderation" />
          </ul>
        </nav>
      </div>
      <div className="xl:container xl:mx-auto 2xl:max-w-screen-xl h-px w-full bg-[#4265e6] mt-10"></div>
      <div className="xl:container xl:mx-auto 2xl:max-w-screen-xl flex justify-between mt-10 ">
        <a href="/">
          <img src={DiscordLogo} alt="logo" />
        </a>
        <Button
          buttonText="sign up"
          styleClass="bg-[#4265e6] hover:text-white hover:bg-[#7983f5]"
        />
      </div>
    </footer>
  );
};

export default Footer;
