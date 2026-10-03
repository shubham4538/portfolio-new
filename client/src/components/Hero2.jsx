import { ReactTyped } from "react-typed";

function Hero2() {
  return (
    <div className="min-h-screen content-center w-full">
      <div className="hero-padding max-w-6xl m-auto">
        {/* <DancingBlobs /> */}
        <div className="relative flex flex-col-reverse md:flex-row items-center gap-1 md:gap-10 z-10">
          <div className="flex flex-col flex-1 gap-2 md:gap-5">
            {/* <ReactTyped
                strings={[
                  "Web Designer",
                  "Web Developer",
                  "FrontEnd Developer",
                  "BackEnd Developer",
                  "App Developer",
                ]}
                typeSpeed={50}
                backSpeed={25}
                loop
              /> */}
            <div className="text-5xl">What do I do?</div>
            <div className="flex gap-5">
              <img src="/website.png" style={{ height: 50, width: 50 }} />
              <img src="/mobile.png" style={{ height: 50, width: 50 }} />
              <img src="/video.png" style={{ height: 50, width: 50 }} />
            </div>
          </div>
          <div className="w-2/3 sm:w-1/2 md:w-1/3">
            <img src="/avatar2.png" alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
