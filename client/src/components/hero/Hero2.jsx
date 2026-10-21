import AboutTags from "../AboutTags";

function Hero2() {
  return (
    <div className="min-h-screen mt-32 md:m-0 md:content-center w-full">
      <div className="hero-padding max-w-6xl m-auto">
        <div className="relative flex flex-col-reverse md:flex-row items-center gap-1 md:gap-10 z-10">
          <div className="flex flex-col flex-1">
            <div className="text-xl md:text-2xl fira-light">
              You might be wondering,
            </div>
            <div className="text-4xl md:text-6xl mb-5">What do I do?</div>
            <AboutTags />
          </div>
          <div className="w-4/5 md:w-2/5">
            <img src="/assets/images/avatar/avatar2.png" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
