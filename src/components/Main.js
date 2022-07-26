import Button from "./Button";
// import LeftHeaderBg from "../assets/left_bg_landing_header.svg";
import { ReactComponent as CenterHeaderBG } from "../assets/center_bg_landing_header.svg";
import { ReactComponent as RightHeaderBg } from "../assets/right_bg_landing_header.svg";
import { ReactComponent as UpArrow } from "../assets/up_arrow.svg";

function Main(prop) {
  return (
    <main
      className={`${prop.styleClass} xl:container xl:mx-auto 2xl:max-w-screen-xl flex flex-col items-start px-10 pt-10 pb-44 gap-6 relative z-20`}
    >
      <h1 className="font-sans text-6xl font-extrabold leading-[3rem] text-white uppercase mt-10 relative z-10">
        Imagine a <br></br> place...
      </h1>
      <p className="text-white w-3/5 leading-8 text-lg my-4">
        ...where you can belong to a school club, a gaming group, or a worldwide
        art community. Where just you and a handful of friends can spend time
        together. A place that makes it easy to talk every day and hang out more
        often.
      </p>
      <Button
        icon={<UpArrow className="inline-block" />}
        buttonText="Download for Windows"
        styleClass="text-xl flex gap-4 px-8 py-4"
      />
      <Button
        buttonText="Open Discord in your browser"
        styleClass="text-xl flex gap-4 px-8 py-4 bg-[#23272a] text-white hover:bg-[#36393f] hover:text-white"
      />
      <CenterHeaderBG className="absolute bottom-0 -right-3/4 -z-20" />
      <RightHeaderBg className="absolute bottom-0 -right-24 -z-10" />
      {/* <img src={LeftHeaderBg} alt="header-bg"></img> */}
    </main>
  );
}

export default Main;
