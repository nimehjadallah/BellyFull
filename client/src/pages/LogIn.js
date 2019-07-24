import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import LoginBtns from "../components/LoginBtns";
import LogInForm from "../components/loginForm";
import API from "../utils/API";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: false,
      register: false,
      loginEmail: "",
      loginPassword: "",
      organization: "",
      contactFirst: "",
      contactLast: "",
      phone: "",
      streetAddress: "",
      cityStateZip: "",
      email: "",
      password: "",
      organizationlogIn: [],
      redirect: false
    };

    this.handleSignInClick = this.handleSignInClick.bind(this);
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOrganizationFormSubmit = this.handleOrganizationFormSubmit.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
  }

  handleSignInClick = event => {
    this.setState({ signIn: true, register: false });
  };

  handleRegisterClick = event => {
    this.setState({ register: true, signIn: false });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleOrganizationFormSubmit = event => {
    if (this.state.organization) {
      API.addOrganization({
        organization: this.state.organization,
        contactFirstName: this.state.contactFirst,
        contactLastName: this.state.contactLast,
        phone: this.state.phone,
        streetAddress: this.state.streetAddress,
        cityStateZipAddress: this.state.cityStateZip,
        email: this.state.email,
        password: this.state.password
      })
        .then(
          res => console.log(res),
          this.setState({
            organization: "",
            contactFirst: "",
            contactLast: "",
            phone: "",
            streetAddress: "",
            cityStateZip: "",
            email: "",
            password: ""
          })
        )
        .catch(err => console.log(err));
    }
  };

  setRedirect = () => {
    this.setState({ redirect: true })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/donations" />
    }
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <Jumbotron>
          <div className="signinWelcome text-center">
            <h1 className="welcomeHeader">Welcome to Bellyfull!</h1>
            <h2 className="secondHeader">
              Let's fight Richmond's hunger crisis and reduce waste.
            </h2>
            <p className="welcomeMsg">
              Sign in to connect with local restaurants. <br /> New here?
              Register your organization and start connecting today.
            </p>
            <LoginBtns
              handleSignInClick={this.handleSignInClick}
              handleRegisterClick={this.handleRegisterClick}
            />
          </div>
        </Jumbotron>
        <div className="container-fluid">
          <div className="logIn">
            <div className="row">
              <div className="col-12">
                <LogInForm
                  signIn={this.state.signIn}
                  register={this.state.register}
                  handleSubmit={this.handleSubmit}
                  handleInputChange={this.handleInputChange}
                  handleOrganizationFormSubmit={
                    this.handleOrganizationFormSubmit
                  }
                  loginEmail={this.state.loginEmail}
                  loginPassword={this.state.loginPassword}
                  organization={this.state.organization}
                  contactFirst={this.state.contactFirst}
                  contactLast={this.state.contactLast}
                  phone={this.state.phone}
                  streetAddress={this.state.streetAddress}
                  cityStateZip={this.state.cityStateZip}
                  email={this.state.email}
                  password={this.state.password}
                  setRedirect={this.setRedirect}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;
