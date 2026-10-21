function Hero3() {
  return (
    <div className="min-h-screen mt-32 md:m-0 md:content-center w-full">
      <div className="hero-padding max-w-6xl m-auto">
        <div className="relative flex flex-col-reverse md:flex-row items-center gap-1 md:gap-10 z-10">
          <div className="flex flex-col flex-1">
            <div className="text-4xl md:text-5xl">About me</div>
            <div className="text-xl md:text-2xl fira-light">
              Developer by curiosity. Creator by instinct.
            </div>
            <div className="text-white/70 text-sm md:text-lg fira-thin mt-5 leading-5 tracking-wider">
              I'm a Developer who is interested in technology and art. I like
              building applications & websites because I enjoy the balance
              between logic and design, making things not just functional but
              also visually appealing. Other than coding, I'm into creative
              visuals and music, so I experminent things that combines both.
              Always learning new things.
            </div>
          </div>
          <div className="w-4/5 md:w-2/5">
            <img src="/assets/images/avatar/avatar3.png" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero3;
