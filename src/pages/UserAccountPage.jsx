import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/init";
import Header from "../components/nav/Header";
import UserAsideBar from "../components/userDash/UserAsideBar";
import SignOutModal from "../components/userDash/SignOutModal";

function UserAccountPage() {
  const { user, loggedIn, setUser, setLoggedIn } = useContext(GlobalContext);
  const [userMenuOpen, setUserMenuOpen] = useState();
  const [showLogOutModal, setShowLogOutModal] = useState(false);
  const navigate = useNavigate();

  //user info states
  const [userName, setUserName] = useState("Francisco Perez");
  const [userEmail, setUserEmail] = useState("fperezfrancisco4@gmail.com");
  const [userPhone, setUserPhone] = useState("661-390-6504");
  const [userAddress, setUserAddress] = useState("20401 Soledad Canyon Rd 309");
  const [accountType, setAccountType] = useState("Parent");
  const [billingLink, setBillingLink] = useState("");
  const [editInfo, setEditInfo] = useState(false);

  const handleEditInfo = () => {
    setEditInfo(true);
  };

  const handleConfirmInfo = () => {
    setEditInfo(false);
  };

  const handleSignOut = () => {
    signOut(auth);
    setUser({});
    setLoggedIn(false);
    navigate("/");
  };

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
                <SignOutModal setShowLogOutModal={setShowLogOutModal} />
              )}
              <div className="w-full py-4 my-4 flex flex-col lg:flex-wrap lg:flex-row gap-4">
                <div className=" flex flex-col w-full lg:max-w-[600px]">
                  <ul className="flex flex-col gap-3 items-start w-full">
                    <li className="flex flex-col gap-0 leading-tight w-full">
                      <p className="text-neutral-400">Name</p>
                      {editInfo ? (
                        <input
                          className="p-2 rounded-lg border-2 border-neutral-300"
                          type="text"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                        />
                      ) : (
                        <p>{userName}</p>
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
                      {editInfo ? (
                        <select
                          name="accountType"
                          id="accountType"
                          className="p-2 bg-neutral-200 rounded-lg cursor-pointer"
                          value={accountType}
                          onChange={(e) => setAccountType(e.target.value)}
                        >
                          <option value="Parent">Parent</option>
                          <option value="Player">Player</option>
                        </select>
                      ) : (
                        <p>{accountType}</p>
                      )}
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
            </div>
          </>
        )}
        {!loggedIn && <div className="p-8">Sign in to view your dashboard</div>}
      </main>
    </div>
  );
}

export default UserAccountPage;
