import Head from "next/head";
import Meta from "../components/Meta";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Meta title="Home page"></Meta>
      <Navbar></Navbar>
      <div>
        <h1>This is home page</h1>
      </div>
    </>
  );
}
