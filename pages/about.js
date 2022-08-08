import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Meta from "../components/Meta";

const about = () => {
  return (
    <div>
      <Meta title="About page"></Meta>
      <Navbar></Navbar>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <Image height="300" width="300" src="/naeem1.png" alt="Naeem"></Image>
        <Image
          height="300"
          width="300"
          src="https://images.unsplash.com/photo-1659777067579-14205de45cb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Keyboard"
        ></Image>
      </div>
    </div>
  );
};

export default about;
