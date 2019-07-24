import React from "react";
import "./style.css";

function DonationsCard(props) {
  if (props.claimed === false) {
    return (
      <div className="card mx-auto rounded">
        <div className="card-header">
          <h5>{props.restaurant}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            <p className="itemsClaimed">Items:</p>
            {props.listItems}
          </li>
          <li className="list-group-item">{props.address}</li>
        </ul>{" "}
        <hr />
        <div className="cardbody">
          <button className="btn claimBtn" onClick={props.handleClaimClick}>
            Claim
          </button>
        </div>
      </div>
    );
  } else {
    return <div />;
  }
}

export default DonationsCard;