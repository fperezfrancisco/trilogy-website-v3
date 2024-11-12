import React, { useContext, useEffect, useState } from "react";
import Header from "../components/nav/Header";
import UserAsideBar from "../components/userDash/UserAsideBar";
import SignOutModal from "../components/userDash/SignOutModal";
import { GlobalContext } from "../context/context";
import { Link, useNavigate, useParams } from "react-router-dom";
import { auth } from "../firebase/init";
import { TiChevronRight } from "react-icons/ti";
import DialogBox from "../components/mui/DialogBox";
import { signOut } from "firebase/auth";
import GlobalApi from "../firebase/GlobalApi";

function PlayerProfilePage() {
  const {
    currUser,
    parentObj,
    loggedIn,
    setCurrUser,
    setLoggedIn,
    playerList,
    setPlayerList,
  } = useContext(GlobalContext);
  const [userMenuOpen, setUserMenuOpen] = useState();
  const [showLogOutModal, setShowLogOutModal] = useState(false);
  const [currPlayer, setCurrPlayer] = useState();
  const navigate = useNavigate();

  const [editInfo, setEditInfo] = useState(false);
  const [playerFirstName, setPlayerFirstName] = useState();
  const [playerLastName, setPlayerLastName] = useState();
  const [playerDob, setPlayerDob] = useState();
  const [playerGender, setPlayerGender] = useState();
  const [playerLevel, setPlayerLevel] = useState();
  const [playerLongObj, setPlayerLongObj] = useState();
  const [playerMembership, setPlayerMembership] = useState();
  const [playerShortObj, setPlayerShortObj] = useState();
  const [playerStrengths, setPlayerStrengths] = useState();
  const [playerTeam, setPlayerTeam] = useState();
  const [playerWeaknesses, setPlayerWeaknesses] = useState();

  const { id, playerid } = useParams();

  const handleSignOut = () => {
    signOut(auth);
    setUser({});
    setLoggedIn(false);
    navigate("/");
  };

  const handleEditInfo = () => {
    setEditInfo(true);
  };

  const handleConfirmInfo = () => {
    const newPlayer = {
      playerFirstName: playerFirstName,
      playerLastName: playerLastName,
      id: playerid,
      playerParentId: parentObj.uid,
      playerList: parentObj.playerList,
      playerDob: playerDob,
      playerGender: playerGender,
      playerLevel: playerLevel,
      playerLongObj: playerLongObj,
      playerShortObj: playerShortObj,
      playerMembership: playerMembership,
      playerStrengths: playerStrengths,
      playerWeaknesses: playerWeaknesses,
      playerTeam: playerTeam,
    };
    //GlobalApi.updateParentInfo(parentObj.id, newParent);
    GlobalApi.updatePlayerInfo(playerid, newPlayer);
    const updatedPlayerList = playerList.map((player) =>
      player.id === playerid ? newPlayer : player
    );
    setPlayerList(updatedPlayerList);
    setEditInfo(false);
  };

  useEffect(() => {
    if (playerList && playerList.length > 0) {
      const tempPlayer = playerList.find((player) => player.id === playerid);
      setCurrPlayer(tempPlayer);
      setPlayerFirstName(tempPlayer.playerFirstName);
      setPlayerLastName(tempPlayer.playerLastName);
      setPlayerGender(tempPlayer.playerGender);
      setPlayerDob(tempPlayer.playerDob);
      setPlayerLevel(tempPlayer.playerLevel);
      setPlayerLongObj(tempPlayer.playerLongObj);
      setPlayerShortObj(tempPlayer.playerShortObj);
      setPlayerMembership(tempPlayer.playerMembership);
      setPlayerStrengths(tempPlayer.playerStrengths);
      setPlayerWeaknesses(tempPlayer.playerWeaknesses);
      setPlayerTeam(tempPlayer.playerTeam);
    }
  }, [playerid]);

  return (
    <div className="w-full h-full">
      <Header />
      <main className="w-full max-w-[2400px] mx-auto mt-[56px] flex h-full relative ">
        {loggedIn && (
          <>
            <UserAsideBar
              userMenuOpen={userMenuOpen}
              setUserMenuOpen={setUserMenuOpen}
              setShowLogOutModal={setShowLogOutModal}
            />
            <div
              className={`flex flex-col w-full h-full p-4 sm:px-8 ${
                userMenuOpen
                  ? "ml-[80px] sm:ml-[100px] lg:ml-[432px]"
                  : "ml-[80px] sm:ml-[100px]"
              }`}
            >
              <h1 className="text-xl lg:text-2xl flex items-center gap-2">
                <Link to={`/userdashboard/${id}/myplayers`}>My Players</Link>
                <TiChevronRight /> Current Player
              </h1>
              {showLogOutModal && (
                <DialogBox
                  openDialog={true}
                  title={"Are you sure you want to sign out?"}
                  text={"You will have to sign in again if you continue."}
                  confirmBtnText={"Yes Sign Out"}
                  cancelBtnText={"Cancel"}
                  confirmBtnAction={handleSignOut}
                  cancelBtnAction={() => setShowLogOutModal(false)}
                />
              )}
              <div className="w-full py-4 my-4 flex flex-col lg:flex-wrap lg:flex-row gap-4">
                <div className=" flex flex-col w-full lg:max-w-[600px]">
                  <ul className="flex flex-col gap-3 items-start w-full">
                    <li className="flex flex-col gap-0 leading-tight w-full">
                      <p className="text-neutral-400">Account Id</p>
                      <p className="text-sm">{currPlayer && currPlayer.id}</p>
                    </li>
                    <li className="flex flex-col gap-0 leading-tight w-full">
                      <p className="text-neutral-400">First Name</p>
                      {editInfo ? (
                        <input
                          className="p-2 rounded-lg border-2 border-neutral-300"
                          type="text"
                          value={playerFirstName}
                          onChange={(e) => setPlayerFirstName(e.target.value)}
                        />
                      ) : (
                        <p>{playerFirstName}</p>
                      )}
                    </li>
                    <li className="flex flex-col gap-0 leading-tight w-full">
                      <p className="text-neutral-400">Last Name</p>
                      {editInfo ? (
                        <input
                          className="p-2 rounded-lg border-2 border-neutral-300"
                          type="text"
                          value={playerLastName}
                          onChange={(e) => setPlayerLastName(e.target.value)}
                        />
                      ) : (
                        <p>{playerLastName}</p>
                      )}
                    </li>
                    <li className="flex flex-col gap-0 leading-tight w-full">
                      <p className="text-neutral-400">Gender</p>
                      {editInfo ? (
                        <select
                          className="p-2 border-[1px] border-neutral-300 rounded-lg cursor-pointer"
                          id="gender"
                          name="gender"
                          value={playerGender}
                          onChange={(e) => setPlayerGender(e.target.value)}
                        >
                          <option value={"male"}>Male</option>
                          <option value={"female"}>Female</option>
                          <option value={"prefer not say"}>
                            Prefer not say
                          </option>
                        </select>
                      ) : (
                        <p>{playerGender}</p>
                      )}
                    </li>
                    <li className="flex flex-col gap-0 leading-tight w-full">
                      <p className="text-neutral-400">Date of birth</p>
                      {editInfo ? (
                        <input
                          className="p-2 rounded-lg border-2 border-neutral-300"
                          type="date"
                          value={playerDob}
                          onChange={(e) => setPlayerDob(e.target.value)}
                        />
                      ) : (
                        <p>{playerDob}</p>
                      )}
                    </li>
                    <li className="flex flex-col gap-0 leading-tight w-full">
                      <p className="text-neutral-400">Player Team</p>
                      {editInfo ? (
                        <input
                          className="p-2 rounded-lg border-2 border-neutral-300"
                          type="text"
                          value={playerTeam}
                          onChange={(e) => setPlayerTeam(e.target.value)}
                        />
                      ) : (
                        <p>{playerTeam}</p>
                      )}
                    </li>
                    <li className="flex flex-col gap-0 leading-tight w-full">
                      <p className="text-neutral-400">Player Level</p>
                      {editInfo ? (
                        <input
                          className="p-2 rounded-lg border-2 border-neutral-300"
                          type="text"
                          value={playerLevel}
                          onChange={(e) => setPlayerLevel(e.target.value)}
                        />
                      ) : (
                        <p>{playerLevel}</p>
                      )}
                    </li>
                    <li className="flex flex-col gap-0 leading-tight w-full">
                      <p className="text-neutral-400">Short Term Objectives</p>
                      {editInfo ? (
                        <textarea
                          className="p-2 rounded-lg border-2 border-neutral-300"
                          type="text"
                          value={playerShortObj}
                          onChange={(e) => setPlayerShortObj(e.target.value)}
                        />
                      ) : (
                        <p>{playerShortObj}</p>
                      )}
                    </li>
                    <li className="flex flex-col gap-0 leading-tight w-full">
                      <p className="text-neutral-400">Long Term Objectives</p>
                      {editInfo ? (
                        <textarea
                          className="p-2 rounded-lg border-2 border-neutral-300"
                          type="text"
                          value={playerLongObj}
                          onChange={(e) => setPlayerLongObj(e.target.value)}
                        />
                      ) : (
                        <p>{playerLongObj}</p>
                      )}
                    </li>
                    <li className="flex flex-col gap-0 leading-tight w-full">
                      <p className="text-neutral-400">Strengths</p>
                      {editInfo ? (
                        <textarea
                          className="p-2 rounded-lg border-2 border-neutral-300"
                          type="text"
                          value={playerStrengths}
                          onChange={(e) => setPlayerStrengths(e.target.value)}
                        />
                      ) : (
                        <p>{playerStrengths}</p>
                      )}
                    </li>
                    <li className="flex flex-col gap-0 leading-tight w-full">
                      <p className="text-neutral-400">Weaknesses</p>
                      {editInfo ? (
                        <textarea
                          className="p-2 rounded-lg border-2 border-neutral-300"
                          type="text"
                          value={playerWeaknesses}
                          onChange={(e) => setPlayerWeaknesses(e.target.value)}
                        />
                      ) : (
                        <p>{playerWeaknesses}</p>
                      )}
                    </li>
                  </ul>
                  <div className="flex flex-col py-2 mt-8">
                    {editInfo ? (
                      <button
                        className="p-2 rounded-lg bg-neutral-200 hover:bg-neutral-300  w-full max-w-[350px]"
                        onClick={handleConfirmInfo}
                      >
                        Confirm Changes
                      </button>
                    ) : (
                      <button
                        className="p-2 rounded-lg bg-neutral-200 hover:bg-neutral-300  w-full max-w-[350px]"
                        onClick={handleEditInfo}
                      >
                        Edit Account Info
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {!loggedIn && <div className="p-8">Sign in to view your dashboard</div>}
      </main>
    </div>
  );
}

export default PlayerProfilePage;
