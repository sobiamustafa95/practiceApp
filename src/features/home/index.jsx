import React from "react";
import Header from "../../components/Header";
const Home = () => {
  return (
    <>
      <Header />
      <div
        className="mt-5"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <h3>Home Page</h3>
      </div>
    </>
  );
};

export default Home;
