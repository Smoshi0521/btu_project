"use client"
import Image from "next/image";
import Practice from "./layout/Practice";
import Introduction from "./layout/Introduction";
import Main from "./layout/Main";
import MainTextMobile from "./layout/MainTextMobile";
import Navbar from "./components/Navbar";
import Sample from "./layout/Sample";
import { useState } from "react";
import { useEffect } from "react";
export default function Home() {
  const [viewSecondPage, setViewSecondPage] = useState<boolean>(false)
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  return (
    <>
      {/* <Introduction /> */}
      <Navbar setOpenMenu={setOpenMenu}/>
      <Main viewSecondPage={viewSecondPage} />
      <MainTextMobile />
      <Practice setViewSecondPage={setViewSecondPage} />
      <Sample />

    </>
  );
}
