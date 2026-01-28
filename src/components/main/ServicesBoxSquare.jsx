import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function ServicesBoxSquare({ title, img, isNew, isPopular, imgLink }) {
  return (
    <div className="w-full max-w-[600px] flex flex-col gap-2 items-start">
      <Link to={imgLink} className="w-full">
        <div className="rounded-2xl aspect-square w-full overflow-hidden bg-neutral-200 cursor-pointer relative group">
          {img && (
            <img
              src={img}
              className="object-cover w-full h-full group-hover:scale-110 transition-all ease-out duration-500"
              alt={title}
            />
          )}
        </div>
      </Link>
      <Link to={imgLink} className="w-full">
        <div className="px-4 py-2 rounded-xl bg-blue-500 w-full flex items-center justify-between">
          <h3 className="font-semibold italic tracking-wider text-lg sm:text-sm xl:text-lg text-white">
            {title}
          </h3>
          <ArrowRight className="text-white" />
        </div>
      </Link>
    </div>
  );
}

export default ServicesBoxSquare;
