import Button from "./Button";
import { ReactComponent as UpArrow } from "../assets/up_arrow.svg";

const SectionJourney = (prop) => {
  return (
    <section className={`${prop.styleClass} py-20 px-10`}>
      <div
        className={`${prop.container} xl:container xl:mx-auto 2xl:max-w-screen-xl flex flex-col justify-center items-center gap-6`}
      >
        <div className="text-center">
          <h1 className="text-5xl font-extrabold leading-tight">
            {prop.heading}
          </h1>
          <p className="mt-6 text-xl leading-relaxed lg:px-28">{prop.text}</p>
        </div>
        <div>{prop.journey}</div>
        {/* <img src={prop.journey} alt="journey" className="h-full w-full"></img> */}
        <div className="flex flex-col items-center">
          <div className="w-[120%] h-[160%]">{prop.stars}</div>
          <h2 className="pb-8 text-3xl">Ready to start your journey?</h2>
          <Button
            icon={<UpArrow className="inline-block" />}
            buttonText="Download for Windows"
            styleClass="text-xl flex gap-4 px-8 py-4 bg-[#5865f2] text-white hover:text-white hover:bg-[#7983f5]"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionJourney;
