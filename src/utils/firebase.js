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
import Toastify from "./Toastify";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_API_KEY,
  authDomain:process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL:process.env.REACT_APP_DATABASE_URL,
  projectId:process.env.REACT_APP_PROJECT_ID,
  storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId:process.env.REACT_APP_APP_ID
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
  Toastify('Add User')
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
  Toastify('Deleted User')
};



//veriyi update etme
export const UpdateUser = (id,username,phoneNumber,gender) => {
  const db = getDatabase(firebase);
  // const userRef = ref(db, "users/");
  const updates = {};

  updates["users/" + id] = {id, username, phoneNumber,gender};
  Toastify('Update User')
  return update(ref(db), updates);
};