import React from "react";
import { Link } from "react-router-dom";

function ServicesBoxSquare({ title, img, isNew, isPopular, imgLink }) {
  return (
    <div className="w-full max-w-[600px] flex flex-col items-start">
      <Link to={imgLink} className="w-full">
        <div className="rounded-2xl aspect-[3/4] w-full overflow-hidden bg-neutral-200 cursor-pointer relative group">
          {img && (
            <img
              src={img}
              className="object-cover w-full h-full group-hover:scale-110 transition-all ease-out duration-500"
              alt={title}
            />
          )}
          <div className="absolute inset-0 bg-black/40 hover:bg-black/20 flex items-end justify-center text-center p-6">
            <h3 className="font-semibold italic tracking-wider text-2xl md:text-lg text-white">
              {title}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ServicesBoxSquare;
