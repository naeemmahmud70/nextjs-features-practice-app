import Head from "next/head";
import Meta from "../components/Meta";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Meta title="Home page"></Meta>
      <Navbar></Navbar>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div>
          <h1 style={{ height: "60px", color: "gray" }}>
            Get Started with NextJS
          </h1>
        </div>
      </div>
    </>
  );
}
