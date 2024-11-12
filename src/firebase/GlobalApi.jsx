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
  const parentCollectionRef = query(
    collection(db, "parents"),
    where("uid", "==", uid)
  );
  const data = await getDocs(parentCollectionRef);
  const parent = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  return parent[0] || null;
}

async function getAllPlayers(uid) {
  const playerCollectionUidRef = query(
    collection(db, "players"),
    where("playerParentId", "==", uid)
  );
  const data = await getDocs(playerCollectionUidRef);
  const players = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return players;
}

async function createParent(parent) {
  await addDoc(collection(db, "parents"), parent);
}

async function updateParentInfo(id, newParent) {
  const docRef = doc(db, "parents", id);
  await updateDoc(docRef, newParent);
}

async function updatePlayerInfo(playerid, newPlayer) {
  const docRef = doc(db, "players", playerid);
  await updateDoc(docRef, newPlayer);
}

export default {
  getAllParents,
  getParentByUid,
  createParent,
  updateParentInfo,
  getAllPlayers,
  updatePlayerInfo,
};
