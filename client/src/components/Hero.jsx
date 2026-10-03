function Hero() {
  return (
    <div className="min-h-screen content-center w-full">
      <div className="hero-padding max-w-6xl m-auto">
        <div className="relative flex flex-col-reverse md:flex-row items-center gap-1 md:gap-10 z-10">
          <div className="flex flex-col flex-1 gap-2">
            <div className="fira-light text-3xl">Hi there,</div>
            <div className="text-5xl">I'm Shubham</div>
          </div>
          <div className="w-2/3 sm:w-1/2 md:w-1/3">
            <img src="/avatar.png" alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
