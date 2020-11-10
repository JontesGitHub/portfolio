import React from "react"
import Footer from "./components/Footer"
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
      <Footer />
    </div>
  );
}
