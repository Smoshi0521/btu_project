import Image from "next/image";
import Practice from "./layout/Practice";
import Introduction from "./layout/Introduction";
import Main from "./layout/Main";

export default function Home() {
  return (
    <main className="">
      <Introduction />
      <Main />
    </main>
  );
}
