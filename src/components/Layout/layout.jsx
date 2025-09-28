import { Outlet } from "react-router-dom";
import { useState } from "react"

import Header from "../header";
import NavBar from "../navigation/navigation";
import Footer from "../footer";

export default function Layout({toggleSearch}) {
  const [choice, setChoice] = useState(false);

  function toggleLiked() {
    setChoice((prevStatus) => !prevStatus);
  }

  return (
    <>
      <Header />
      <NavBar
        choice={choice}
        toggleLiked={toggleLiked}
        toggleSearch={toggleSearch}
      />
      <Outlet />
      <Footer />
    </>
  );
}
