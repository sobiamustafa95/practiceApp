import React from "react";
import Header from "../../components/Header";
// import TodoCard from "../../components/Card";
const Home = () => {
  return (
    <>
      <Header />
      <div
        className="mt-3 d-flex justify-content-center"
        // style={{ display: "flex", justifyContent: "center" }}
      >
        <h3>user Notes</h3>
      </div>
      <div className="container col-lg-8 mt-3">{/*<TodoCard />*/}</div>
    </>
  );
};

export default Home;
