import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CreateNewPlayer() {
  const { accid } = useParams();
  const navigate = useNavigate();

  const [playerLastName, setPlayerLastName] = useState();
  const [playerFirstName, setPlayerFirstName] = useState();
  const [playerDob, setPlayerDob] = useState();
  const [playerGender, setPlayerGender] = useState("male");

  const [playerTeam, setPlayerTeam] = useState();
  const [playerLevel, setPlayerLevel] = useState();
  const [playerShortObj, setPlayerShortObj] = useState();
  const [playerLongObj, setPlayerLongObj] = useState();
  const [playerStrengths, setPlayerStrengths] = useState();
  const [playerWeaknesses, setPlayerWeaknesses] = useState();
  const [playerMembership, setPlayerMembership] = useState();
  //curr player object
  const [currPlayer, setCurrPlayer] = useState();

  const playerObj = {
    playerLastName: playerLastName,
    playerFirstName: playerFirstName,
    playerDob: playerDob,
    playerGender: playerGender,
    playerTeam: playerTeam,
    playerLevel: playerLevel,
    playerShortObj: playerShortObj,
    playerLongObj: playerLongObj,
    playerStrengths: playerStrengths,
    playerWeaknesses: playerWeaknesses,
    playerMembership: playerMembership,
    playerParentId: accid,
    playerSessions: [],
  };

  //page
  const [currFormPage, setCurrFormPage] = useState(0);

  const playerInfoQuestions = [
    {
      question: "Player Last Name",
      type: "text",
      placeholder: "Last Name",
      inputName: "playerLName",
      required: true,
      stateUpdate: setPlayerLastName,
      value: playerLastName,
    },
    {
      question: "Player First Name",
      type: "text",
      placeholder: "First Name",
      inputName: "playerFName",
      required: true,
      stateUpdate: setPlayerFirstName,
      value: playerFirstName,
    },
    {
      question: "Date of Birth",
      type: "date",
      placeholder: "",
      inputName: "playerDOB",
      required: true,
      stateUpdate: setPlayerDob,
      value: playerDob,
    },
    {
      question: "Player Gender",
      type: "select",
      placeholder: "",
      options: ["male", "female", "prefer not to say"],
      inputName: "playerGender",
      required: true,
      stateUpdate: setPlayerGender,
      value: playerGender,
    },
  ];

  const playerExperienceQuestions = [
    {
      question: "Current Team",
      type: "text",
      placeholder: "ex: LAFC B2016 Gold, AYSO, not currently playing, etc.",
      inputName: "playerCurrTeam",
      required: true,
      stateUpdate: setPlayerTeam,
      value: playerTeam,
    },
    {
      question: "Current Flight or Level",
      type: "text",
      placeholder: "ex: Flight 1, NPL, Recreational, n/a, etc.",
      inputName: "playerCurrLevel",
      required: true,
      stateUpdate: setPlayerLevel,
      value: playerLevel,
    },
    {
      question: "Short Term Objectives",
      type: "textarea",
      placeholder:
        "ex: Want to increase playing time, want to make the first team at my club, etc.",
      inputName: "playerShortTermObjectives",
      required: true,
      stateUpdate: setPlayerShortObj,
      value: playerShortObj,
    },
    {
      question: "Long Term Objectives",
      type: "textarea",
      placeholder: "ex: Want to play in College, want to play pro, etc.",
      inputName: "playerLongTermObjectives",
      required: true,
      stateUpdate: setPlayerLongObj,
      value: playerLongObj,
    },
    {
      question: "Player Strengths",
      type: "textarea",
      placeholder:
        "ex: Player is quick, fast, and has a great first touch etc...",
      inputName: "playerStrengths",
      required: true,
      stateUpdate: setPlayerStrengths,
      value: playerStrengths,
    },
    {
      question: "Player Weaknesses",
      type: "textarea",
      placeholder:
        "ex: Struggles with ball control, weak passes, and not agile enough etc...",
      inputName: "playerWeaknesses",
      required: true,
      stateUpdate: setPlayerWeaknesses,
      value: playerWeaknesses,
    },
  ];

  const updateCurrPlayer = () => {
    setCurrPlayer(playerObj);
  };

  const handleContinue = (e) => {
    //e.preventDefault();
    if (currFormPage <= 3) {
      if (
        currFormPage === 0 &&
        (!playerLastName || !playerFirstName || !playerDob || !playerGender)
      ) {
        alert("Please ensure all fields are non-empty before advancing!");
      } else if (
        currFormPage === 1 &&
        (!playerTeam ||
          !playerLevel ||
          !playerShortObj ||
          !playerLongObj ||
          !playerStrengths ||
          !playerWeaknesses)
      ) {
        alert("Please ensure all fields are non-empty before advancing!");
      } else if (currFormPage === 2 && !playerMembership) {
        alert("Please ensure all fields are non-empty before advancing!");
      } else {
        updateCurrPlayer();
        console.log("Current player object: ", currPlayer);
        setCurrFormPage(currFormPage + 1);
      }
    }
  };

  const handlePrev = (e) => {
    e.preventDefault();
    console.log("Current player object: ", currPlayer);
    if (currFormPage >= 1) {
      setCurrFormPage(currFormPage - 1);
    }
  };

  const handleMembershipChange = (e) => {
    setPlayerMembership(e.target.value);
  };

  return (
    <div className="w-full h-full min-h-screen relative flex flex-col items-center pt-12">
      <p
        className="absolute top-4 left-4 cursor-pointer hover:underline z-10 text-neutral-500"
        onClick={() => navigate(`/userdashboard/${accid}/`)}
      >
        Back to dashboard
      </p>
      <div className="w-full h-full p-4 flex flex-col items-center pb-16">
        <h1 className="text-[1rem] sm:text-2xl">Create a new player</h1>
        <div className="flex items-center my-4">
          <ul className="flex flex-row items-center gap-3">
            <li
              className={`p-1 flex items-center justify-center w-[32px] h-[32px] rounded-full border-black border-[1px] ${
                currFormPage === 0 ? "bg-blue-400" : "bg-white"
              } `}
            >
              1
            </li>
            <li
              className={`p-1 flex items-center justify-center w-[32px] h-[32px] rounded-full border-black border-[1px] ${
                currFormPage === 1 ? "bg-blue-400" : "bg-white"
              } `}
            >
              2
            </li>
            <li
              className={`p-1 flex items-center justify-center w-[32px] h-[32px] rounded-full border-black border-[1px] ${
                currFormPage === 2 ? "bg-blue-400" : "bg-white"
              } `}
            >
              3
            </li>
            <li
              className={`p-1 flex items-center justify-center w-[32px] h-[32px] rounded-full border-black border-[1px] ${
                currFormPage === 3 ? "bg-blue-400" : "bg-white"
              } `}
            >
              4
            </li>
          </ul>
        </div>
        <form
          action=""
          className="w-full max-w-[700px] h-full sm:min-h-[700px] sm:max-w-[700px] min-[800px]:border-2 min-[800px]:border-neutral-200 shadow-lg rounded-2xl flex flex-col p-2"
        >
          {currFormPage === 0 && (
            <div className="playerInfo flex flex-col items-center w-full h-full p-4">
              <h2 className="text-xl">Player Info</h2>
              <ul className="flex w-full flex-col px-4 gap-6 pt-6">
                {playerInfoQuestions &&
                  playerInfoQuestions.map((question) =>
                    question.type === "select" ? (
                      <li className="flex flex-col leading-tight items-start gap-1">
                        <label htmlFor={question.inputName}>
                          {question.question}
                        </label>
                        <select
                          className="p-2 border-[1px] border-neutral-300 rounded-lg cursor-pointer"
                          name={question.inputName}
                          id={question.inputName}
                          value={question.value}
                          onChange={(e) => question.stateUpdate(e.target.value)}
                        >
                          {question.options.map((option) => (
                            <option value={option}>{option}</option>
                          ))}
                        </select>
                      </li>
                    ) : (
                      <li className="flex flex-col gap-1 leading-tight items-start">
                        <label htmlFor={question.inputName}>
                          {question.question}
                        </label>
                        <input
                          className="p-2 w-full rounded-lg border-[1px] border-neutral-200"
                          placeholder={question.placeholder}
                          value={question.value}
                          type={question.type}
                          id={question.inputName}
                          onChange={(e) => question.stateUpdate(e.target.value)}
                          required
                        />
                      </li>
                    )
                  )}
              </ul>
              <div className="flex flex-col sm:flex-row gap-2 w-full items-center justify-center">
                <button
                  type="button"
                  onClick={(e) => handleContinue(e)}
                  className="mt-12 p-2 border-[1px] w-full max-w-[300px] border-neutral-700 rounded-lg text-center hover:bg-neutral-200"
                >
                  Continue
                </button>
              </div>
            </div>
          )}
          {currFormPage === 1 && (
            <div className="playerExperience flex flex-col items-center w-full h-full p-4">
              <h2 className="text-xl">Player Experience</h2>
              <ul className="flex w-full flex-col px-4 gap-6 pt-6">
                {playerExperienceQuestions &&
                  playerExperienceQuestions.map((question) =>
                    question.type === "textarea" ? (
                      <li className="flex flex-col leading-tight items-start gap-1">
                        <label htmlFor={question.inputName}>
                          {question.question}
                        </label>
                        <textarea
                          className="w-full border-[1px] border-neutral-200 p-2 rounded-lg"
                          placeholder={question.placeholder}
                          id={question.inputName}
                          required
                          rows={4}
                          value={question.value}
                          onChange={(e) => question.stateUpdate(e.target.value)}
                        />
                      </li>
                    ) : (
                      <li className="flex flex-col gap-1 leading-tight items-start">
                        <label htmlFor={question.inputName}>
                          {question.question}
                        </label>
                        <input
                          className="p-2 w-full rounded-lg border-[1px] border-neutral-200"
                          placeholder={question.placeholder}
                          type={question.type}
                          id={question.inputName}
                          onChange={(e) => question.stateUpdate(e.target.value)}
                          value={question.value}
                          required
                        />
                      </li>
                    )
                  )}
              </ul>
              <div className="flex flex-col items-center justify-center sm:flex-row gap-2 w-full">
                <button
                  type="button"
                  className="mt-12 p-2 border-[1px] w-full max-w-[300px] border-neutral-700 rounded-lg text-center hover:bg-neutral-200"
                  onClick={(e) => handlePrev(e)}
                >
                  Go back
                </button>
                <button
                  type="button"
                  onClick={(e) => handleContinue(e)}
                  className="mt-12 p-2 border-[1px] w-full max-w-[300px] border-neutral-700 rounded-lg text-center hover:bg-neutral-200"
                >
                  Continue
                </button>
              </div>
            </div>
          )}
          {currFormPage === 2 && (
            <div className="playerExperience flex flex-col items-center w-full h-full p-4">
              <h2 className="text-xl">Player Membership</h2>
              <p className="text-sm text-neutral-500">
                Please select the membership you would like to add for your
                player.
              </p>
              <ul className="flex w-full flex-col px-4 gap-6 pt-6">
                <li className="flex flex-col leading-tight gap-4">
                  <div className="flex items-start w-full border-[1px] border-neutral-700 rounded-lg overflow-hidden">
                    <input
                      type="radio"
                      name="membership"
                      id="Free"
                      value={"Free"}
                      className="peer hidden"
                      checked={playerMembership === "Free"}
                      onChange={(e) => handleMembershipChange(e)}
                    />
                    <label
                      htmlFor="Free"
                      className="w-full h-full flex flex-col peer-checked:bg-blue-300 p-4"
                    >
                      <div className="flex items-center justify-between">
                        <h3>Free Membership</h3>
                        <div className="text-2xl font-semibold">$0</div>
                      </div>
                      <div className="flex w-full">
                        <p className="text-sm text-neutral-800 w-[80%]">
                          Access to all open sessions & programs. No access to
                          member only sessions or content. All sessions are full
                          price.
                        </p>
                      </div>
                    </label>
                  </div>
                  <div className="flex gap-2 w-full border-[1px] border-neutral-700 rounded-lg overflow-hidden">
                    <input
                      type="radio"
                      name="membership"
                      id="Starter"
                      value={"Starter"}
                      className="hidden peer"
                      checked={playerMembership === "Starter"}
                      onChange={(e) => handleMembershipChange(e)}
                    />
                    <label
                      htmlFor="Starter"
                      className="w-full h-full flex flex-col peer-checked:bg-blue-300 p-4"
                    >
                      <div className="flex items-center justify-between">
                        <h3>Starter Membership</h3>
                        <div className="text-2xl font-semibold">
                          $200{" "}
                          <span className="text-sm text-neutral-400">
                            /month
                          </span>{" "}
                        </div>
                      </div>
                      <div className="flex w-full">
                        <p className="text-sm  w-[80%]">
                          Access to all open sessions & programs. Access to 1
                          free Trilogy Academy Sessions per week. Includes all
                          member and non-member content.
                        </p>
                      </div>
                    </label>
                  </div>
                  <div className="flex items-start w-full border-[1px] border-neutral-700 rounded-lg overflow-hidden">
                    <input
                      type="radio"
                      name="membership"
                      id="Pro"
                      value={"Pro"}
                      className="hidden peer"
                      checked={playerMembership === "Pro"}
                      onChange={(e) => handleMembershipChange(e)}
                    />
                    <label
                      htmlFor="Pro"
                      className="w-full h-full flex flex-col peer-checked:bg-blue-300 p-4"
                    >
                      <div className="flex items-center justify-between">
                        <h3>Pro Membership</h3>
                        <div className="text-2xl font-semibold">
                          $350{" "}
                          <span className="text-sm text-neutral-400">
                            /month
                          </span>{" "}
                        </div>
                      </div>
                      <div className="flex w-full">
                        <p className="text-sm w-[80%]">
                          Access to all open sessions & programs. Access to 2
                          free Trilogy Academy Sessions per week. Includes all
                          member and non-member content.
                        </p>
                      </div>
                    </label>
                  </div>
                  <div className="flex items-start w-full border-[1px] border-neutral-700 rounded-lg overflow-hidden">
                    <input
                      type="radio"
                      name="membership"
                      id="Premium"
                      value={"Premium"}
                      className="hidden peer"
                      checked={playerMembership === "Premium"}
                      onChange={(e) => handleMembershipChange(e)}
                    />
                    <label
                      htmlFor="Premium"
                      className="w-full h-full flex flex-col peer-checked:bg-blue-300 p-4"
                    >
                      <div className="flex items-center justify-between">
                        <h3>Premium Membership</h3>
                        <div className="text-2xl font-semibold">
                          $450{" "}
                          <span className="text-sm text-neutral-400">
                            /month
                          </span>{" "}
                        </div>
                      </div>
                      <div className="flex w-full">
                        <p className="text-sm  w-[80%]">
                          Access to all open sessions & programs. Access to 3
                          free Trilogy Academy Sessions per week. Includes all
                          member and non-member content.
                        </p>
                      </div>
                    </label>
                  </div>
                </li>
              </ul>
              <div className="flex flex-col items-center justify-center sm:flex-row gap-2 w-full">
                <button
                  type="button"
                  className="mt-12 p-2 border-[1px] w-full max-w-[300px] border-neutral-700 rounded-lg text-center hover:bg-neutral-200"
                  onClick={(e) => handlePrev(e)}
                >
                  Go back
                </button>
                <button
                  type="button"
                  onClick={(e) => handleContinue(e)}
                  className="mt-12 p-2 border-[1px] w-full max-w-[300px] border-neutral-700 rounded-lg text-center hover:bg-neutral-200"
                >
                  Continue
                </button>
              </div>
            </div>
          )}
          {currFormPage === 3 && (
            <div className="playerExperience flex flex-col items-center w-full h-full p-4">
              <h2 className="text-xl">Confirm Details & Submit</h2>
              <p className="text-sm text-neutral-500">
                Please review all information to ensure it is accurate.
              </p>
              <ul className="flex w-full flex-col px-4 gap-4 pt-6">
                <li className="flex flex-col">
                  <div className="text-sm text-neutral-500">Last Name:</div>
                  <div> {currPlayer.playerLastName}</div>
                </li>
                <li className="flex flex-col">
                  <div className="text-sm text-neutral-500">First Name:</div>
                  <div> {currPlayer.playerFirstName}</div>
                </li>
                <li className="flex flex-col">
                  <div className="text-sm text-neutral-500">Date of Birth:</div>
                  <div> {currPlayer.playerDob}</div>
                </li>
                <li className="flex flex-col">
                  <div className="text-sm text-neutral-500">Gender:</div>
                  <div> {currPlayer.playerGender}</div>
                </li>
                <li className="flex flex-col">
                  <div className="text-sm text-neutral-500">Current Team:</div>
                  <div> {currPlayer.playerTeam}</div>
                </li>
                <li className="flex flex-col">
                  <div className="text-sm text-neutral-500">Current Level:</div>
                  <div> {currPlayer.playerLevel}</div>
                </li>
                <li className="flex flex-col">
                  <div className="text-sm text-neutral-500">
                    Short Term Objectives:
                  </div>
                  <div> {currPlayer.playerShortObj}</div>
                </li>
                <li className="flex flex-col">
                  <div className="text-sm text-neutral-500">
                    Long term Objectives:
                  </div>
                  <div> {currPlayer.playerLongObj}</div>
                </li>
                <li className="flex flex-col">
                  <div className="text-sm text-neutral-500">Strengths:</div>
                  <div> {currPlayer.playerStrengths}</div>
                </li>
                <li className="flex flex-col">
                  <div className="text-sm text-neutral-500">Weaknesses</div>
                  <div> {currPlayer.playerWeaknesses}</div>
                </li>
                <li className="flex flex-col">
                  <div className="text-sm text-neutral-500">
                    Membership Selected:
                  </div>
                  <div> {currPlayer.playerMembership} Membership</div>
                </li>
              </ul>
              <div className="flex flex-col items-center justify-center sm:flex-row gap-2 w-full">
                <button
                  type="button"
                  className="mt-12 p-2 border-[1px] w-full max-w-[300px] border-neutral-700 rounded-lg text-center hover:bg-neutral-200"
                  onClick={(e) => handlePrev(e)}
                >
                  Go back
                </button>
                <button
                  type="submit"
                  className="mt-12 p-2 border-[1px] w-full max-w-[300px]  border-neutral-700 rounded-lg text-center bg-blue-400 hover:bg-blue-300"
                >
                  Continue to final step
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default CreateNewPlayer;
