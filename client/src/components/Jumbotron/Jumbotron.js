import React from "react";
import "./jumbotron.css";

function Jumbotron ({children}){
    return (
      <div className="jumbotron jumbotron-fluid jumbo">
        <div className="container">
         {children}
        </div>
      </div>
    );
    
}
export default Jumbotron;