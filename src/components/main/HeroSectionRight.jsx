import React, { useState } from "react";
import Button from "../buttons/Button";
import SkeletonBox from "../skeleton/SkeletonBox";

function HeroSectionRight({
  mainTitle,
  specialTitleText,
  subheading,
  heroImg,
  heroImgMedium,
  heroImgSmall,
  heroSquare,
}) {
  const [loadState, setLoadState] = useState(false);

  return (
    <section className="w-full p-4 pb-12 sm:pb-16 md:p-8 md:pt-2 md:pb-16 relative">
      <div className="bg-neutral-300 flex overflow-hidden rounded-2xl aspect-[4/5] min-[425px]:aspect-video max-h-[600px] w-full mx-auto">
        {true && (
          <>
            <img
              src={heroImg}
              className="object-cover w-full object-center hidden lg:block"
            />
            <img
              src={heroImgMedium}
              className="object-cover w-full hidden sm:block lg:hidden"
            />
            <img
              src={heroImgSmall}
              className="object-cover w-full hidden min-[425px]:block sm:hidden"
            />
            <img
              src={heroSquare}
              className="object-cover w-full block min-[425px]:hidden"
            />
          </>
        )}
      </div>
      <div className="sm:absolute flex flex-col items-center sm:items-start gap-2 lg:gap-4 justify-center mx-auto right-0 sm:right-3 sm:left-auto sm:justify-start bg-white rounded-t-2xl p-6 sm:rounded-tl-2xl sm:rounded-tr-none sm:p-6 sm:pl-4 md:pl-11 w-fit sm:w-full sm:max-w-[400px] md:max-w-[450px] lg:max-w-[600px] xl:max-w-[650px] bottom-[1rem] md:bottom-0">
        {loadState ? (
          <SkeletonBox isFullWidth={true} height={32} rounded={true} />
        ) : (
          <h1 className="text-[#1e1e1e] font-semibold text-center sm:text-left text-[1.75rem] leading-[1] md:text-[2.25rem] lg:text-[3rem]">
            {mainTitle}
            <span className="text-blue-500 italic"> {specialTitleText}</span>.
          </h1>
        )}

        {loadState ? (
          <SkeletonBox width={200} height={32} rounded={true} />
        ) : (
          <p className="text-center mb-6 sm:text-left text-sm lg:text-[1.25rem] leading-6">
            {subheading}
          </p>
        )}
      </div>
    </section>
  );
}

export default HeroSectionRight;
