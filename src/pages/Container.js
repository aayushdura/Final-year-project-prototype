

import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import LeftNavBar from "../components/LeftNavBar";
import RightNavBar from "../components/RightNavBar";
import "../components/styles/Container.scss";
import { randomTestData } from "../MockData/DemoData";
const Container = () => {
  return (
    <>
      <Header />
      <div className="primary-section">
        <div className="leftnav-body">
          <LeftNavBar />
        </div>
        <section className="routing-section">
          <h2>Home</h2>
          {randomTestData.map((data) => {
            return <Card key={data.id} data={data} />;
          })}
        </section>
        <div className="rightnav-body">
          <RightNavBar />
        </div>
      </div>
    </>
  );
};

export default Container;

