import React from "react";
import Button from "../buttons/Button";

function ProgramBox({ program }) {
  return (
    <div
      className="w-full max-w-[900px] flex flex-col md:flex-row gap-8 items-start"
      id={`program${program.id}`}
    >
      <div className="aspect-[3.75/2] md:aspect-[4/5] flex w-full max-w-[600px] min-w-[250px] bg-neutral-300 rounded-2xl overflow-hidden">
        {program.imgMain && (
          <img src={program.imgMain} className="w-full object-cover" alt="" />
        )}
      </div>
      <div className="flex flex-col items-start w-full sm:min-w-[350px]">
        <h3 className="font-medium text-3xl leading-tight mb-2">
          {program.title}
        </h3>
        <p className="text-neutral-500 leading-tight max-w-[500px] md:max-w-none">
          {program.description}
        </p>
        {program.bullets && (
          <ul className="w-full list-outside list-disc ml-3 sm:ml-8 flex flex-col py-4 gap-1">
            {program.bullets.map((bullet, index) => (
              <li
                className="w-full list-item text-neutral-500 font-sm leading-tight"
                key={index}
              >
                {bullet}
              </li>
            ))}
          </ul>
        )}
        <div className="w-full flex flex-col pl-8 sm:pl-0 items-start sm:items-center sm:flex-row gap-4 my-8">
          {program.primaryBtn && (
            <Button
              secondary={true}
              title={program.primaryBtn.title}
              action={program.primaryBtn.action}
            />
          )}
          {program.secondaryBtn && (
            <Button
              title={program.secondaryBtn.title}
              action={program.secondaryBtn.action}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProgramBox;
