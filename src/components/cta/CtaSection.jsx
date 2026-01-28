import React from "react";
import Button from "../buttons/Button";
import ctaDecoration from "../../assets/cta-decoration.png";
import eliteImg from "../../assets/elite-group.png";

function CtaSection() {
  const openInNewTab = (path) => {
    window.open(path, "_blank");
  };
  return (
    <section className="w-full p-4 md:p-8 relative ">
      <div className="ctaBanner overflow-hidden rounded-2xl flex relative w-full h-full lg:min-h-[450px] p-[3rem] bg-gradient-to-b from-[#C8C8C8] to-blue-500 justify-center items-center">
        <div className="flex flex-col items-center justify-center text-center max-w-[500px] w-full z-[2]">
          <h2 className="text-white text-xl sm:text-[2rem] drop-shadow-md lg:text-[2.65rem] leading-tight mb-4 font-semibold">
            Ready to take your game to the next level?
          </h2>
          <p className="text-white text-[0.75rem] md:text-[0.9rem] leading-tight mb-6">
            Set up a call with us so that we can get you started on the best
            development plan right away.
          </p>
          <Button
            secondary={true}
            full={true}
            title={"Set up my call now"}
            action={() => openInNewTab("/gethelp")}
          />
        </div>
        {true && (
          <>
            <img
              src={ctaDecoration}
              alt=""
              className="absolute left-0 top-0 w-[140px] lg:w-[240px] z-[1]"
            />
            <img
              src={ctaDecoration}
              alt=""
              className="absolute scale-x-[-1] right-0 top-0 w-[140px] lg:w-[240px] z-[1]"
            />
            <div className="absolute flex z-0 opacity-25 w-full h-full overflow-hidden">
              <img
                src={eliteImg}
                className="object-cover bottom-0 object-center w-full"
                alt=""
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default CtaSection;
