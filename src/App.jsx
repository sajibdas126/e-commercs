import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./Component/Navbar/Navbar";
import { Hero } from "./Component/Navbar/Section/Hero";
import { Cateogory } from "./Component/Navbar/Section/Cateogory";
import { Types } from "./Component/Navbar/Section/Types";
import { Services } from "./Component/Navbar/Section/Services";
import { Productsgrid } from "./Component/Navbar/Section/Productsgrid";
import { Banner } from "./Component/Navbar/Section/Banner";
import { Reviews } from "./Component/Navbar/Section/Reviews";
import { Insta } from "./Component/Navbar/Section/Insta";
import { Footer } from "./Component/Navbar/Section/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div >
        <Navbar></Navbar>
      </div>
      <div><Hero></Hero></div>
      <div><Cateogory></Cateogory></div>
      <div><Types></Types></div>
      <div><Services></Services></div>
      <div><Productsgrid></Productsgrid></div>
      <div><Banner></Banner></div>
      <div><Reviews></Reviews></div>
      <div><Insta></Insta></div>
      <div><Footer></Footer></div>
    </>
  );
}

export default App;
