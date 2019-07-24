import React from "react";
import Mission from "../components/Mission/Mission";
import Jumbotron from "../components/Jumbotron/Jumbotron";

function Home() {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-4 text-center">Feeding Richmond Since 2019</h1>
      </Jumbotron>
      <Mission />
    </div>
  );
}

export default Home;
