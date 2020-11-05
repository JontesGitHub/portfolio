import React, { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import AboutScreen from "./screens/AboutScreen"
import HomeScreen from "./screens/HomeScreen"
import WorkScreen from "./screens/WorkScreen"

export default function App() {

  return (
    <div>
      <Navbar />
      <HomeScreen />
      <WorkScreen />
      <AboutScreen />
    </div>
  );
}
