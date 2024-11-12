import { Alert } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/context";
import GlobalApi from "../firebase/GlobalApi";

function ParentInfoPage() {
  const navigate = useNavigate();
  const [alertDisplay, setAlertDisplay] = useState(false);
  const [alertText, setAlertText] = useState();

  const { currUser, setCurrUser } = useContext(GlobalContext);

  const [parentLName, setParentLName] = useState();
  const [parentFName, setParentFName] = useState();
  const [parentPhone, setParentPhone] = useState();
  const [address, setAddress] = useState();

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    //link to dashboard & create new parent document in collections linked to account
    const newParentObject = {
      parentLName,
      parentFName,
      parentPhone,
      address,
      playerList: [],
      uid: currUser.user.uid,
    };
    setCurrUser({ ...currUser, parentInfo: newParentObject });
    console.log("Parent: ", newParentObject);
    GlobalApi.createParent(newParentObject);
    navigate(`/userdashboard/${currUser.user.uid}/`);
  };

  return (
    <div
      className="w-screen h-full min-h-screen sm:p-4 md:p-8 flex flex-col items-center justify-center bg-neutral-900/80"
      id="authScreen"
    >
      <p
        className="absolute top-8 left-8 cursor-pointer font-semibold hover:underline z-10 text-white"
        onClick={() => navigate("/")}
      >
        Back to Home
      </p>
      <div className="absolute w-full h-full z-0 bg-blue-500/60"></div>
      <div className="max-w-[600px] w-full z-10 p-4 mt-8 flex flex-col items-center h-screen sm:h-fit sm:rounded-2xl min-[400px]:shadow-2xl bg-white">
        <h1 className="font-medium text-xl">Finalize Parent Details</h1>
        <div className="flex flex-col gap-4 p-4 w-full max-w-[450px] my-4">
          {alertDisplay && <Alert severity="error">{alertText}</Alert>}
          <form onSubmit={(e) => handleRegisterSubmit(e)}>
            <ul className="w-full flex flex-col gap-4">
              <li className="w-full flex flex-col gap-2">
                <label htmlFor="userParentLastName" className="font-medium">
                  Parent Last Name
                  <span className="text-[0.95rem] text-blue-500 pl-1">*</span>
                </label>
                <input
                  type="text"
                  name="userParentLastName"
                  id="userParentLastName"
                  className="p-2 pl-3 border-[2px] border-neutral-200 rounded-2xl"
                  placeholder="Parent Last Name"
                  required
                  onChange={(e) => setParentLName(e.target.value)}
                />
              </li>
              <li className="w-full flex flex-col gap-2">
                <label htmlFor="userParentLastName" className="font-medium">
                  Parent First Name
                  <span className="text-[0.95rem] text-blue-500 pl-1">*</span>
                </label>
                <input
                  type="text"
                  name="userParentFirstName"
                  id="userParentFirstName"
                  className="p-2 pl-3 border-[2px] border-neutral-200 rounded-2xl"
                  placeholder="Parent First Name"
                  onChange={(e) => setParentFName(e.target.value)}
                  required
                />
              </li>
              <li className="w-full flex flex-col gap-2">
                <label htmlFor="userParentPhone" className="font-medium">
                  Phone Number
                </label>
                <input
                  type="mobile"
                  name="userParentPhone"
                  id="userParentPhone"
                  className="p-2 pl-3 border-[2px] border-neutral-200 rounded-2xl"
                  placeholder="Phone Number"
                  onChange={(e) => setParentPhone(e.target.value)}
                />
              </li>
              <li className="w-full flex flex-col gap-2">
                <label htmlFor="userAddress" className="font-medium">
                  Address
                </label>
                <input
                  type="address"
                  name="userAddress"
                  id="userAddress"
                  className="p-2 pl-3 border-[2px] border-neutral-200 rounded-2xl"
                  placeholder="ex: 1234 Soccer Ln, Valencia, Ca"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </li>
            </ul>
            <button
              tabIndex={0}
              className="w-full p-3 bg-blue-500 text-white flex items-center text-center justify-center rounded-2xl mt-4 font-semibold hover:bg-blue-700 focus:bg-blue-700"
            >
              Create My Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ParentInfoPage;
