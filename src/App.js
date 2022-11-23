import NewTable from "./components/table/NewTable";
import "bootstrap/dist/css/bootstrap.min.css";
import NevForm from "./components/form/NevForm";
import "./App.css";
import { addUser, UpdateUser } from "./utils/firebase";
import { useState } from "react";
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [username, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [id, setId] = useState();
  const [add, setAdd] = useState("ADD");

  const handelSubmit = (e) => {
    e.preventDefault();
    if (id) {
      UpdateUser(id, username, phoneNumber, gender);
    } else {
      addUser(username, phoneNumber, gender);
    }
    setAdd("ADD");
    setId("");
    setUserName("");
    setGender("");
    setPhoneNumber("");
    console.log(username, phoneNumber, gender);
  };

  const showInForm = (id, username, phoneNumber, gender) => {
    setAdd("UPDATE");
    setId(id);
    setUserName(username);
    setPhoneNumber(phoneNumber);
    setGender(gender);
    console.log(id, username, phoneNumber, gender);
  };

  return (
    <div className="container">
      <NevForm
        add={add}
        id={id}
        username={username}
        setUserName={setUserName}
        gender={gender}
        setGender={setGender}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        handelSubmit={handelSubmit}
      />
      <NewTable showInForm={showInForm} />
      <ToastContainer/>
    </div>
  );
}

export default App;
