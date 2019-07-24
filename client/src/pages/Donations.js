    
import React, {Component} from "react";
import DonationsCard from "../components/DonationsCard/DonationsCard";
import ClaimedCard from "../components/ClaimedCard/ClaimedCard";
import API from "../utils/API";
import List from "../components/List";
import ListItem from "../components/List";
import { Link } from "react-router-dom";

class Donations extends Component {
  state = {
    food: []
  };

  componentDidMount() {
    this.loadFood();
  }

  loadFood = () => {
    API.getFood()
      .then(res => this.setState({ food: res.data }))
      .catch(err => console.log(err));
  };

  handleClaimClick = food => {
    food.claimed = true;
    API.updateFoodById(food._id, food)
      .then(this.loadFood())
      .catch(err => console.log(err));
  };

  handleUnclaimClick = food => {
    food.claimed = false;
    API.updateFoodById(food._id, food)
      .then(this.loadFood())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="donations">
          <div className="row">
            <div className="col-md-6 text-center">
              <h2 className="pageHeader">Available Donations</h2>
              <hr className="donationsLine"/>
              <br />
              {this.state.food.length ? (
                <List>
                  {this.state.food.map(food => (
                    <ListItem key={food._id}>
                      <Link to={"/food/" + food._id}>
                      </Link>
                      <DonationsCard
                        restaurant={food.restaurant}
                        contact={food.phone}
                        listItems={food.donations}
                        address={food.address}
                        contactName={food.contactName}
                        claimed={food.claimed}
                        handleClaimClick={() => this.handleClaimClick(food)}
                        key={food._id}
                      />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <div />
              )}
            </div>
            <div className="col-md-6 text-center">
              <h2 className="pageHeader">Claimed</h2>
              <hr className="donationsLine" />
              <br />
              {this.state.food.length ? (
                <List>
                  {this.state.food.map(food => (
                    <ListItem key={food._id}>
                      <Link to={"/food/" + food._id}>
                      </Link>
                      <ClaimedCard
                        restaurant={food.restaurant}
                        contact={food.phone}
                        listItems={food.donations}
                        contactName={food.contactName}
                        address={food.address}
                        claimed={food.claimed}
                        handleUnclaimClick={() => this.handleUnclaimClick(food)}
                        key={food._id}
                      />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Donations;