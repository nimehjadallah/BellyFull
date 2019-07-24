import React from "react";
import "./Mission.css";

function Mission() {
  return (
    <div className="container-fluid">
      <div className="home">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="subHeader">Our Mission</h3>
            <p className="inform">
              At BellyFull our vision is a simple one, help the Richmond
              community. The US is facing a food waste crisis. Up to 40% of
              all food goes to waste across the country, and restaurants alone
              throw away 133 billion pounds of food each year. This has a
              serious impact on small business, food insecurity, and is a
              major contributing force to climate change. To empower local
              community programs to improve the health and quality of life of
              those they serve so that no one is left hungry or isolated. We
              seek to create a world of equity and justice and to help all
              people lead a life of dignity and security.
            </p>
            <h3 className="subHeader">Why Join?</h3>
            <h4 className="lastHeader">Restaurants:</h4>
            <p className="inform">
              We understand that running a business is your first priority,
              what does this do for you? By participating in this program you
              will be eligible for the{" "}
              <strong>1976 Federal Tax Law (H.R. 10612)</strong> that permits
              the deduction of the costs of producing, packaging and
              delivering products, plus up to 50 percent of the difference
              between the cost and the fair market value. What if the food you
              donate makes someone sick? Is it a liability issue? No! Under
              the{" "}
              <strong>
                Federal Bill Emerson Good Samaritan Food Donation Act
              </strong>{" "}
              you are covered for full faith donations!
            </p>
            <h4 className="lastHeader">Non-Profits:</h4>
            <p className="inform">
              We know that nonperishable foods are what most charities prefer,
              not to mention makes it easier to store and plan food for when less donations
              come in. Using BellyFull, however, allows you to keep ALL of
              your nonperishables for a rainy day. We also help you to provide
              fresh, healthy food to food-insecure families, providing them
              the best options whenever possible.
            </p>
            <a href="/LogIn" className="btn getStarted">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
