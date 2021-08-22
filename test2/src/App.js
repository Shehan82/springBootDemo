import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "./axios";

function App() {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");

  var sendUserDetails = () => {
    axios
      .post("/saveUser", {
        userName: userName,
        password: password,
      })
      .then((res) => {
        if (res.data == 1) {
          alert("User saved successfully!");
        }
      });
  };

  return (
    <div className="main_cnt">
      <div className="App">
        <input
          type="text"
          placeholder="name"
          onChange={(e) => {
            setuserName(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <br />
        <button onClick={sendUserDetails}>submit</button>
      </div>
    </div>
  );
}

export default App;
