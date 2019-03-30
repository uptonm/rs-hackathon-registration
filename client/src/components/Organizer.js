import React, { Component } from "react";
import { fetchUsers, putUser } from "../actions/index";
import hackwitusLogo from "../assets/leologo-web.png";

class Organizer extends Component {
  state = {
    users: {}
  };

  componentDidMount = () => {
    this.refreshUsers();
  };

  async setSwag({ _id }) {
    const data = { swagRedeemed: true };
    this.state.users[_id].swagRedeemed = true;
    this.forceUpdate();
    await putUser(_id, data);
  }

  refreshUsers = async () => {
    const res = await fetchUsers();
    res.forEach(user => {
      if (!this.state.users[user._id]) {
        this.state.users[user._id] = user;
        this.forceUpdate();
      }
    });
  };

  renderUsers = () => {
    return Object.keys(this.state.users).map(keyName => {
      let user = this.state.users[keyName];
      return (
        <tr key={user._id}>
          <td>{user.email}</td>
          <td>{user.first}</td>
          <td>{user.last}</td>
          <td>{user.school}</td>
          <td>{user.major}</td>
          <td>{user.phone}</td>
          <td>{user.dietaryRestrictions}</td>
          <td>
            {this.state.users[keyName].swagRedeemed === false ? (
              <button
                id={this._id}
                className="btn btn-sm btn-primary"
                onClick={this.setSwag.bind(this, user)}
              >
                Redeem
              </button>
            ) : (
              <span>Swag Redeemed</span>
            )}
          </td>
        </tr>
      );
    });
  };

  renderUserCount() {
    return (
      <button className="btn btn-outline-secondary my-2 my-sm-0">
        <strong>{Object.keys(this.state.users).length - 4}</strong> Users
        Signed-In
      </button>
    );
  }

  render() {
    return (
      <div className="container">
        {/* <button className="btn btn-success btn-sm nav-link" onClick={this.refreshUsers} style={{ marginBottom: '1em' }}>
          <i className="fas fa-sync" style={{ marginRight: "0.5em" }} />
          Refresh
            </button> */}
        <nav className="navbar navbar-light bg-light">
          <a href="https://hackwit.us" className="navbar-brand">
            <img
              src={hackwitusLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
              style={{ marginRight: "0.5em" }}
            />
            HackWITus Hackers
          </a>
          {this.renderUserCount()}
          <ul className="navbar-nav">
            <button
              onClick={this.refreshUsers}
              className="btn btn-outline-secondary my-2 my-sm-0"
            >
              <i className="fas fa-sync" style={{ marginRight: "0.5em" }} />
              Refresh
            </button>
          </ul>
        </nav>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">School</th>
              <th scope="col">Major</th>
              <th scope="col">Phone</th>
              <th scope="col">Dietary</th>
              <th scope="col">Swag</th>
            </tr>
          </thead>
          <tbody>{this.renderUsers()}</tbody>
        </table>
      </div>
    );
  }
}

export default Organizer;
