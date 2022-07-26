const Section = (prop) => {
  return (
    <section className={`${prop.styleClass} py-20 px-10`}>
      <div
        className={`${prop.container} xl:container xl:mx-auto 2xl:max-w-screen-xl flex gap-6 lg:gap-16 lg:items-center`}
      >
        <div className="h-auto w-auto flex-1 lg:flex-auto">{prop.image}</div>
        <div className="flex-1 lg:flex-shrink">
          <h1 className="text-5xl font-bold leading-tight lg:w-11/12">
            {prop.heading}
          </h1>
          <p className="mt-6 text-xl leading-relaxed lg:w-9/12">{prop.text}</p>
        </div>
      </div>
    </section>
  );
};

export default Section;
