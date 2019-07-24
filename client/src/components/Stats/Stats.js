import React from "react";
import "./style.css";

function Stats() {
  return (
    <div className="jumbotron stats">
      <div className="container">
        <div className="row">
          In Virginia, <span className="VAStats">863,390</span>people are
          struggling with hunger - and of them{" "}
          <span className="VAStats">247,470</span>are children.
        </div>
        <div className="row ">
          <div className="col">
            <div className="row justify-content-md-center">
              1 in 10 people
            </div>
            <div className="row justify-content-md-center">
              <i class="fas fa-male firstIcon" />
              <i class="fas fa-male" />
              <i class="fas fa-male" />
              <i class="fas fa-male" />
              <i class="fas fa-male" />
            </div>
            <div className="row justify-content-md-center">
              <i class="fas fa-male" />
              <i class="fas fa-male" />
              <i class="fas fa-male" />
              <i class="fas fa-male" />
              <i class="fas fa-male" />
            </div>
            <div className="row justify-content-md-center">
              struggles with hunger.
            </div>
          </div>
          <div className="vl" />
          <div className="col">
            <div className="row justify-content-md-center">
              1 in 8 children
            </div>
            <div className="row justify-content-md-center">
              <i class="fas fa-male firstIcon" />
              <i class="fas fa-male" />
              <i class="fas fa-male" />
              <i class="fas fa-male" />
            </div>
            <div className="row justify-content-md-center">
              <i class="fas fa-male" />
              <i class="fas fa-male" />
              <i class="fas fa-male" />
              <i class="fas fa-male" />
            </div>
            <div className="row justify-content-md-center">
              struggles with hunger.
            </div>
          </div>
        </div>
        <hr />
        <div className="row justify-content-md-center">
          People facing hunger in
        </div>
        <div className="row justify-content-md-center">Virginia</div>
        <div className="row justify-content-md-center">
          are estimated to report needing
        </div>
        <div className="row justify-content-md-center moneyNeeded">
          $446,691,000
        </div>
        <div className="row">
          <p>
            more per year to meet their food needs. The average cost of a meal
            in Virginia is $3.03. Data from Feeding America's{" "}
            <a
              className="study"
              href="https://map.feedingamerica.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Map the Meal Gap 2017{" "}
            </a>
            study.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Stats;
