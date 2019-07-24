import React from "react";
import Stats from "../components/Stats/Stats";

function About() {
  return (
    <div className="container-fluid">
      <div className="about">
        <div className="row justify-content-center">
          <h1 className="aboutUs  mb-5 ">About Us</h1>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="whoWeAre">
            <div className="row">
              <h3 className="font-weight-bold">Who we are... </h3>
            </div>
            <div className="row">
              <div className="col-md-10">
                <p>
                  BellyFull was founded in Richmond, VA by Carrie Mosby, Nimeh
                  Jadallah, and Molly Levine in 2019.
                </p>
              </div>
            </div>
            </div>
            
            <div className="mission">
            <div className="row">
              <h3 className="font-weight-bold">Our Mission...</h3>
            </div>
            <div className="row">
              <div className="col-md-10">
                <p>
                  We help restaurants connect with local non-profit
                  organizations to donate their leftover food and reduce food
                  waste.
                </p>
              </div>
            </div>
            </div>

            
            <div className="row">
              <h3 className="font-weight-bold">Our Vision...</h3>
            </div>
            <div className="row">
              <div className="col-md-10">
                <p>
                  {" "}
                  The US is facing a food waste crisis. Up to 40% of all food
                  goes to waste across the country, and restaurants alone throw
                  away 133 billion pounds of food each year.
                </p>
                <p>
                  This has a serious impact on small business, food insecurity,
                  and is a major contributing force to climate change.
                </p>
                <p>
                  We seek a world of hope, tolerance and social justice, where
                  poverty has been overcome and all people live with dignity and
                  security.{" "}
                </p>
                  <a href="/LogIn" className="btn joinUs">
                    Join Us Today
                  </a>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="row">
              <div className="col-md-10">
                <h3 className="hunger text-center">What Hunger Looks Like in Virginia</h3>
              </div>
            </div>
            <div> 
              <Stats />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
