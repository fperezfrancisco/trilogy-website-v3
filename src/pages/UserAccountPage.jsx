import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/context";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/init";
import Header from "../components/nav/Header";
import UserAsideBar from "../components/userDash/UserAsideBar";
import SignOutModal from "../components/userDash/SignOutModal";
import DialogBox from "../components/mui/DialogBox";
import { signOut } from "firebase/auth";
import GlobalApi from "../firebase/GlobalApi";

function UserAccountPage() {
  const {
    currUser,
    loggedIn,
    setCurrUser,
    setLoggedIn,
    parentObj,
    setParentObj,
  } = useContext(GlobalContext);
  const [userMenuOpen, setUserMenuOpen] = useState();
  const [showLogOutModal, setShowLogOutModal] = useState(false);
  const navigate = useNavigate();

  //user info states
  const [userFirstName, setUserFirstName] = useState();
  const [userLastName, setUserLastName] = useState();
  const [userEmail, setUserEmail] = useState("fperezfrancisco4@gmail.com");
  const [userPhone, setUserPhone] = useState("661-390-6504");
  const [userAddress, setUserAddress] = useState("20401 Soledad Canyon Rd 309");
  const [accountType, setAccountType] = useState("Parent");
  const [billingLink, setBillingLink] = useState("");
  const [editInfo, setEditInfo] = useState(false);
  const [accountId, setAccountId] = useState();

  const handleEditInfo = () => {
    setEditInfo(true);
  };

  const handleConfirmInfo = () => {
    const newParent = {
      parentFName: userFirstName,
      parentLName: userLastName,
      parentPhone: userPhone,
      address: userAddress,
      id: parentObj.id,
      uid: parentObj.uid,
      playerList: parentObj.playerList,
    };
    GlobalApi.updateParentInfo(parentObj.id, newParent);
    setParentObj(newParent);
    setEditInfo(false);
  };

  const handleSignOut = () => {
    signOut(auth);
    setCurrUser({});
    setLoggedIn(false);
    navigate("/");
  };

  useEffect(() => {
    if (parentObj) {
      setUserFirstName(parentObj.parentFName);
      setUserLastName(parentObj.parentLName);
      setUserEmail(currUser.user.email);
      setUserPhone(parentObj.parentPhone);
      setUserAddress(parentObj.address);
      setAccountId(currUser.user.uid);
    }
  }, [parentObj]);

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
              <h1 className="text-xl lg:text-2xl">My Account</h1>
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
              {parentObj === null ? (
                <div className="my-8 flex flex-col">
                  <Link
                    to={"/parentInfo"}
                    className="hover:underline p-2 border-2 border-neutral-700 rounded-xl max-w-[350px] flex items-center justify-center hover:bg-neutral-200"
                  >
                    Complete Parent Info
                  </Link>
                </div>
              ) : (
                <div className="w-full py-4 my-4 flex flex-col lg:flex-wrap lg:flex-row gap-4">
                  <div className=" flex flex-col w-full lg:max-w-[600px]">
                    <ul className="flex flex-col gap-3 items-start w-full">
                      <li className="flex flex-col gap-0 leading-tight w-full">
                        <p className="text-neutral-400">Account Id</p>
                        <p className="text-sm">{accountId}</p>
                      </li>
                      <li className="flex flex-col gap-0 leading-tight w-full">
                        <p className="text-neutral-400">First Name</p>
                        {editInfo ? (
                          <input
                            className="p-2 rounded-lg border-2 border-neutral-300"
                            type="text"
                            value={userFirstName}
                            onChange={(e) => setUserFirstName(e.target.value)}
                          />
                        ) : (
                          <p>{userFirstName}</p>
                        )}
                      </li>
                      <li className="flex flex-col gap-0 leading-tight w-full">
                        <p className="text-neutral-400">Last Name</p>
                        {editInfo ? (
                          <input
                            className="p-2 rounded-lg border-2 border-neutral-300"
                            type="text"
                            value={userLastName}
                            onChange={(e) => setUserLastName(e.target.value)}
                          />
                        ) : (
                          <p>{userLastName}</p>
                        )}
                      </li>
                      <li className="flex flex-col gap-0 leading-tight w-full">
                        <p className="text-neutral-400">Email</p>
                        {editInfo ? (
                          <input
                            className="p-2 rounded-lg border-2 border-neutral-300"
                            type="email"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                          />
                        ) : (
                          <p>{userEmail}</p>
                        )}
                      </li>
                      <li className="flex flex-col gap-0 leading-tight w-full">
                        <p className="text-neutral-400">Phone Number</p>
                        {editInfo ? (
                          <input
                            className="p-2 rounded-lg border-2 border-neutral-300"
                            type="mobile"
                            value={userPhone}
                            onChange={(e) => setUserPhone(e.target.value)}
                          />
                        ) : (
                          <p>{userPhone}</p>
                        )}
                      </li>
                      <li className="flex flex-col gap-0 leading-tight w-full">
                        <p className="text-neutral-400">Address</p>
                        {editInfo ? (
                          <input
                            className="p-2 rounded-lg border-2 border-neutral-300"
                            type="text"
                            value={userAddress}
                            onChange={(e) => setUserAddress(e.target.value)}
                          />
                        ) : (
                          <p>{userAddress}</p>
                        )}
                      </li>
                      <li className="flex flex-col gap-0 leading-tight w-full">
                        <p className="text-neutral-400">Account Type</p>
                        <p>{accountType}</p>
                      </li>
                      <li className="flex flex-col gap-0 leading-tight w-full">
                        <p className="text-neutral-400">Billing Info</p>
                        <p>Visit billing info for account</p>
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
              )}
            </div>
          </>
        )}
        {!loggedIn && <div className="p-8">Sign in to view your dashboard</div>}
      </main>
    </div>
  );
}

export default UserAccountPage;
