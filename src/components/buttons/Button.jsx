import React from "react";

function Button({
  primary,
  secondary,
  action,
  full,
  title,
  icon,
  small,
  medium,
  large,
}) {
  const handleAction = () => {
    if (action) {
      action();
    }
  };

  return (
    <button
      className={`p-4 rounded-2xl flex flex-row gap-2 text-[0.85rem] md:text-[1rem] items-center justify-center 
        ${
          primary &&
          "bg-blue-500 text-white font-semibold tracking-wide hover:bg-blue-400"
        }
        ${
          secondary &&
          "bg-[#1e1e1e] text-white font-semibold tracking-wide hover:bg-neutral-700"
        }
        ${
          !primary &&
          !secondary &&
          "border border-[#1e1e1e] bg-white text-[#1e1e1e] hover:bg-neutral-100"
        }
        ${full ? "w-full max-w-[300px] md:max-w-[450px]" : "w-fit px-8"}
        ${
          small &&
          "text-[0.65rem] font-normal md:text-[0.75rem] lg:text-sm py-2 rounded-lg"
        }
    `}
      onClick={handleAction}
    >
      {icon}
      {title}
    </button>
  );
}

export default Button;
