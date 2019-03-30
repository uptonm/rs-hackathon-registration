import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import Landing from "./Landing";
import FormSubmit from "./Form-Submit";
import Form from "./Form";
import Organizer from "./Organizer";
import Unauthorized from "./Unauthorized";
import * as actions from "../actions";
import '@fortawesome/fontawesome-free/css/all.min.css'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  isAuthorized = () => {
    switch (this.props.auth) {
      case null:
        break;
      case false:
        return Unauthorized;
      default:
        if (this.props.auth.organizer) {
          return Organizer;
        }
        return Unauthorized;
    }
  };
  render() {
    return (
      <div>
        <BrowserRouter>
          <main>
            <Route exact path="/" component={Landing} />
            <Route path="/follow-up" component={Form} />
            <Route path="/post-sign-in" component={FormSubmit} />
            <Route path="/organizer" component={this.isAuthorized()} />
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  actions
)(App);
