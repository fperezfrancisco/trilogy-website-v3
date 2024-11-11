import React from "react";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  updateDoc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "./init";

async function getAllParents() {
  const data = await getDocs(collection(db, "parents"));
  const parents = data.docs.map((doc) => doc);
  return parents;
}

async function getParentByUid(uid) {
  const parentCollectionRef = await query(
    collection(db, "parents"),
    where("uid", "==", uid)
  );
  const data = await getDoc(parentCollectionRef);
  if (data.exists()) {
    return data.data();
  } else {
    return null;
  }
}

async function createParent(parent) {
  await addDoc(collection(db, "parents"), parent);
}

export default {
  getAllParents,
  getParentByUid,
  createParent,
};
