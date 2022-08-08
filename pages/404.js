import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Meta from "../components/Meta";

const PageNotFound = () => {
  const router = useRouter();
  const handleBack = () => {
    router.push("/");
  };
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Meta title="Error page"></Meta>
      <div className="error-div">
        <h1>This page is not found</h1>
        <button onClick={handleBack} className="back-btn">
          Back to home
        </button>
        {/* <Link href="/">
          <button className="back-btn">Back to home</button>
        </Link> */}
      </div>

      <style jsx>
        {`
          .error-div {
            text-align: center;
          }
          .back-btn {
            border: 0;
            border-radius: 7px;
            background-color: blue;
            color: white;
            text-weight: bold;
            padding: 8px 12px;
          }
        `}
      </style>
    </div>
  );
};

export default PageNotFound;
