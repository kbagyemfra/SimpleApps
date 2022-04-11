import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";
import AppProvider from "./context/context";

function App() {
  return (
    <>
      <AppProvider>
        <Navbar />
        {/* <Sidebar /> */}
        {/* <Hero /> */}
        {/* <Submenu /> */}
      </AppProvider>
    </>
  );
}

export default App;
