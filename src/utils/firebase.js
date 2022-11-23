// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
  update,
} from "firebase/database";
import { useEffect, useState } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDybekg94Z5upwBPbr7nnPXfbZt3n0TyTg",
  authDomain: "realtime-dc0d1.firebaseapp.com",
  databaseURL: "https://realtime-dc0d1-default-rtdb.firebaseio.com",
  projectId: "realtime-dc0d1",
  storageBucket: "realtime-dc0d1.appspot.com",
  messagingSenderId: "275867191175",
  appId: "1:275867191175:web:e967dd5e3eb43d8e64f522",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;

export const addUser = (username, phoneNumber, gender) => {
  const db = getDatabase(firebase);

  const userRef = ref(db, "users/");
  const newUserRef = push(userRef);

  set(newUserRef, {
    username: username,
    phoneNumber: phoneNumber,
    gender: gender,
  });
};

//veriyi yazdirma
export const useFetch = () => {
  const [isLoadIng, setIsLoading] = useState(true);
  const [contactList, setContactList] = useState();
  useEffect(() => {
    const db = getDatabase(firebase);
    const userRef = ref(db, "users/");

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];
     
      for (let id in data) {
        userArray.push({ id, ...data[id] });
      }
      
      setContactList(userArray);

      setIsLoading(false);
    });
  }, []);
  return { isLoadIng, contactList };
};

// veriyi silme

export const DeleteUser = (id) => {
  const db = getDatabase(firebase);
  remove(ref(db, "users/" + id));
  // Toastify('Deleted')
};



//veriyi update etme
export const UpdateUser = (id,username,phoneNumber,gender) => {
  const db = getDatabase(firebase);
  // const userRef = ref(db, "users/");
  const updates = {};

  updates["users/" + id] = {id, username, phoneNumber,gender};

  return update(ref(db), updates);
};