import React from "react";
import "./App.css";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import SchoolList from "../SchoolList/SchoolList";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <SchoolList />
      <Footer />
    </div>
  );
}

export default App;
