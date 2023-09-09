import React from "react";
import { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup/Signup";
import Login from './Components/Login/Login';
import {AuthContext, FirebaseContext } from './store/FirebaseContext'
import "./App.css";


import Home from "./Pages/Home";

function App() {
  const {user, setUser} = useContext(AuthContext);
  const {firebase} = useContext(FirebaseContext);
  useEffect(()=>{
  firebase.auth().onAuthStateChanged((user) => {
    setUser(user)
  })
  })
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
