import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc,getDoc } from "firebase/firestore";
import { db } from "./firebase-config";

/**
 * Create a new house document in Firestore
 * @param {Object} houseData - The data to be added
 * @returns {string|null} - Returns the new document ID or null if failed
 */
export const createHouse = async (houseData) => {
  if (!houseData || typeof houseData !== "object") {
    console.error("Invalid house data");
    return null;
  }

  try {
    const docRef = await addDoc(collection(db, "property"), houseData);
    console.log("House created with ID:", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Failed to add house:", e.message);
    return null;
  }
};

/**
 * Get all house documents from Firestore
 * @returns {Array} - List of house objects
 */
export const getHouses = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "property"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (e) {
    console.error("Failed to fetch houses:", e.message);
    return [];
  }
};

/**
 * Update a house document in Firestore
 * @param {string} houseId - The ID of the house document
 * @param {Object} updatedData - The data to update
 * @returns {boolean} - Success status
 */
export const updateHouse = async (houseId, updatedData) => {
  if (!houseId || !updatedData) {
    console.error("Invalid parameters for updating house");
    return false;
  }

  try {
    const houseRef = doc(db, "property", houseId);
    await updateDoc(houseRef, updatedData);
    console.log("House updated successfully");
    return true;
  } catch (e) {
    console.error("Failed to update house:", e.message);
    return false;
  }
};

/**
 * Delete a house document from Firestore
 * @param {string} houseId - The ID of the house document
 * @returns {boolean} - Success status
 */
export const deleteHouse = async (houseId) => {
  if (!houseId) {
    console.error("House ID is required for deletion");
    return false;
  }

  try {
    const houseRef = doc(db, "property", houseId);
    await deleteDoc(houseRef);
    console.log("House deleted successfully");
    return true;
  } catch (e) {
    console.error("Failed to delete house:", e.message);
    return false;
  }
};



export const getHouseById = async (id) => {
  const docRef = doc(db, "property", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    return null;
  }
};
