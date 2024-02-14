import Image from "next/image";
import Practice from "./layout/Practice";
import Introduction from "./layout/Introduction";
import Main from "./layout/Main";
import MainTextMobile from "./layout/MainTextMobile";
import Navbar from "./components/Navbar";
import Sample from "./layout/Sample";

export default function Home() {
  return (
    <>
      {/* <Introduction /> */}
      <Navbar />
      <Main />
      <MainTextMobile />
      <Practice />
      <Sample />

    </>
  );
}
