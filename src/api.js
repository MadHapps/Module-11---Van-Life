import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyD2c6ucplbilZgNQMcR6KdWf-_5-Vj_0L0",
  authDomain: "realtime-database-29a09.firebaseapp.com",
  databaseURL: "https://realtime-database-29a09-default-rtdb.firebaseio.com",
  projectId: "realtime-database-29a09",
  storageBucket: "realtime-database-29a09.appspot.com",
  messagingSenderId: "25396518480",
  appId: "1:25396518480:web:c0cdffc8e536fd6cecbb55",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans");

export async function getVans() {
  const snapshot = await getDocs(vansCollectionRef);
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vans;
}

export async function getVan(id) {
  const docRef = doc(db, "vans", id);
  const vanDetail = await getDoc(docRef);

  return {
    ...vanDetail.data(),
    id: vanDetail.id,
  };
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const snapshot = await getDocs(q);
    const vans = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return vans;
  }

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
