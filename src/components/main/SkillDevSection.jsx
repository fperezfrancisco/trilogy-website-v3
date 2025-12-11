import React from "react";
import { useNavigate } from "react-router-dom";
import jackImg from "../../assets/jack-trilogy.webp";

function SkillDevSection() {
  const navigate = useNavigate();

  const handleRegistration = () => {
    window.open("https://forms.gle/VpZjdDEuQ82JMqvM6", "_blank");
    return;
  };

  return (
    <div className="w-full py-[6rem] md:py-[10rem] lg:py-[10rem] px-4 md:px-8 flex flex-col items-center lg:flex-row-reverse lg:items-start justify-center gap-12">
      <div className="aspect-[4/5] flex w-full max-w-[450px] bg-neutral-400 rounded-2xl overflow-hidden">
        {true && <img src={jackImg} className="object-cover w-full" alt="" />}
      </div>
      <div className="sectionCopy w-full max-w-[650px] flex flex-col items-center lg:items-start gap-8">
        <div className="flex flex-col items-center lg:items-start w-full">
          <h2 className="sectionTitle text-[1.75rem] text-center lg:text-left md:text-[2.25rem] lg:text-[2.75rem] font-semibold text-[#1e1e1e] capitalize mb-0 leading-none">
            Winter Training Programs
          </h2>
          <p className="mt-4 text-[1rem] font-normal text-center lg:text-left">
            Our Winter Training Programs are back for 2025/26! These programs
            are designed specifically for players ages 6 - 12 to continue their
            preparation & development. We offer 3 programs that are ideal for
            those looking to get ahead of tournaments & try out season. Limited
            spots & early bird discounts available!
          </p>
          <ul className="w-full flex flex-col gap-2 py-4 list-disc pl-4">
            <li className="items-center list-item">
              <div className="w-full flex flex-col items-start">
                <p className=" text-xl font-medium text-center lg:text-left">
                  Winter Skills Clinic
                </p>

                <div className="flex items-center gap-1">
                  <p className=" text-[1rem] font-medium text-center lg:text-left text-neutral-800">
                    Dec 29 - 30 | 8am - 10am |
                  </p>
                  <p className=" text-base text-blue-500 font-medium text-center lg:text-left">
                    Single Day $35 / Both Days $60
                  </p>
                </div>
              </div>
            </li>
            <li className="items-center list-item">
              <div className="w-full flex flex-col items-start">
                <p className=" text-xl font-medium text-center lg:text-left">
                  Preseason Program
                </p>

                <div className="flex items-center gap-1">
                  <p className=" text-[1rem] font-medium text-center lg:text-left text-neutral-800">
                    Jan 5 - Jan 9 | 8am - 10am |
                  </p>
                  <p className=" text-base text-blue-500 font-medium text-center lg:text-left">
                    Early Bird $170 / Regular $200
                  </p>
                </div>
                <p className=" text-sm font-medium text-center lg:text-left text-neutral-400">
                  * Early Bird Ends Dec 29, 2025 *
                </p>
              </div>
            </li>
            <li className="items-center list-item">
              <div className="w-full flex flex-col items-start">
                <p className=" text-xl font-medium text-center lg:text-left">
                  MLK Day Clinic
                </p>

                <div className="flex items-center gap-1">
                  <p className=" text-[1rem] font-medium text-center lg:text-left text-neutral-800">
                    Jan 19, 2026 | 8am - 10am |
                  </p>
                  <p className=" text-base text-blue-500 font-medium text-center lg:text-left">
                    $35 per Player
                  </p>
                </div>
              </div>
            </li>
          </ul>

          <p className=" text-[1rem] font-normal text-neutral-800 text-center lg:text-left">
            Field TBD in Santa Clarita, CA
          </p>
          <p className=" text-[1rem] font-normal text-neutral-800 text-center lg:text-left">
            Players ages 6 - 12
          </p>
        </div>

        <button
          className="p-4 rounded-2xl w-full max-w-[350px] bg-blue-500 border-2 border-black text-white hover:bg-blue-400"
          onClick={handleRegistration}
        >
          Register Now
        </button>
      </div>
    </div>
  );
}

export default SkillDevSection;
