import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react"

import Header from "../header";
import NavBar from "../navigation/navigation";
import Footer from "../footer";

export default function Layout({itemsNumber}) {

  const [choice, setChoice] = useState(() => {
    const savedChoice = localStorage.getItem("choice");
    return savedChoice ? JSON.parse(savedChoice) : false;
  });

  function toggleLiked() {
    setChoice((prevStatus) => !prevStatus);
  }
  
  useEffect(() => {
    localStorage.setItem('choice',JSON.stringify(choice));
  }, [choice]);

  return (
    <>
      <Header />
      <NavBar
        choice={choice}
        toggleLiked={toggleLiked}
        itemsNumber={itemsNumber}
      />
      <Outlet />
      <Footer />
    </>
  );
}
