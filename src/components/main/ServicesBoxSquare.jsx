import React from "react";
import Button from "../buttons/Button";
import { Link, useNavigate } from "react-router-dom";

function ServicesBoxSquare({
  title,
  img,
  isNew,
  isPopular,
  buttonTitle,
  action,
  imgLink,
}) {
  return (
    <div className="w-full max-w-[250px] flex flex-col items-start gap-4">
      <div className="rounded-2xl aspect-square w-full overflow-hidden bg-neutral-200 cursor-pointer">
        <Link to={imgLink}>
          {img && (
            <img
              src={img}
              className="object-cover hover:scale-125 transition-all ease-out duration-200"
            />
          )}
        </Link>
      </div>
      <div className="w-full flex flex-col items-start gap-2">
        <h3 className="font-medium text-lg">{title}</h3>
        <Button
          secondary={true}
          action={action}
          title={buttonTitle}
          small={true}
        />
      </div>
    </div>
  );
}

export default ServicesBoxSquare;
