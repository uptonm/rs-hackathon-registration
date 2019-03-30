import React, { Component } from "react";
import { connect } from "react-redux";
import { putUser } from "../actions/index";
import Input from "./InputField";
import SelectInput from "./SelectField";
import "bootstrap/dist/css/bootstrap.min.css";
class Form extends Component {
  state = {
    first: {
      id: "first",
      label: "First Name",
      placeHolder: "Enter First Name",
      value: ""
    },
    last: {
      id: "last",
      label: "Last Name",
      placeHolder: "Enter Last Name",
      value: ""
    },
    email: {
      id: "email",
      label: "Email",
      placeHolder: "Enter Email",
      value: ""
    },
    phone: {
      id: "phone",
      label: "Phone Number",
      placeHolder: "Enter Phone Number",
      value: ""
    },
    school: {
      id: "school",
      label: "School",
      placeHolder: "Enter School",
      value: "",
      other: ""
    },
    major: {
      id: "major",
      label: "Major",
      placeHolder: "Enter Major",
      value: ""
    },
    dietaryRestrictions: {
      id: "dietaryRestrictions",
      label: "Dietary Restrictions",
      placeHolder: "Enter Dietary Restrictions",
      value: ""
    },
    waiverSigned: {
      id: "waiver",
      label: "I agree to the terms listed in the ",
      value: false
    },
    conductSigned: {
      id: "conduct",
      label: "I agree to the ",
      value: false
    },
    errors: {
      email: "",
      phone: ""
    },
    doOnce: 0
  };

  onSubmit = async event => {
    event.preventDefault();
    // console.log(this.props.auth);
    const {
      first,
      last,
      email,
      phone,
      school,
      major,
      dietaryRestrictions,
      waiverSigned,
      conductSigned
    } = this.state;
    const data = {
      first: first.value,
      last: last.value,
      email: email.value,
      phone: phone.value,
      school: school.value !== "other" ? school.value : school.other,
      major: major.value,
      dietaryRestrictions: dietaryRestrictions.value,
      waiverSigned: waiverSigned.value,
      conductSigned: conductSigned.value
    };
    await putUser(this.props.auth._id, data);
    this.props.history.push("/post-sign-in");
  };

  renderContent() {
    this.setState({
      first: {
        ...this.state.first,
        value: this.props.auth.first
      },
      last: {
        ...this.state.last,
        value: this.props.auth.last
      },
      email: {
        ...this.state.email,
        value: this.props.auth.email
      },
      school: {
        ...this.state.school,
        value: this.props.auth.school !== "gmail" ? this.props.auth.school : ""
      }
    });
  }

  componentWillReceiveProps = () => {
    switch (this.props.auth) {
      case null:
        break;
      case false:
        break;
      default:
        this.renderContent();
    }
  };

  validateEmail() {
    let email = this.state.email.value;
    let error = "";
    if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      error = "";
    } else {
      error = "Invalid Email";
    }
    return error;
  }

  validatePhone() {
    let phone = this.state.phone.value;
    let error = "";
    if (phone.match(/^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/)) {
      error = "";
    } else {
      error = "Invalid Phone Number";
    }
    return error;
  }

  validateSchool() {
    let school = this.state.school.value;
    let error = "";
    if (school === "other") {
      school = this.state.school.other;
    }
    if (school.length > 0) {
      error = "";
    } else {
      error = "School is Required";
    }
    return error;
  }

  validateMajor() {
    let major = this.state.major.value;
    let error = "";
    if (major.length > 0) {
      error = "";
    } else {
      error = "Major is required";
    }
    return error;
  }

  validateFirst() {
    let first = this.state.first.value;
    let error = "";
    if (first.length > 0) {
      error = "";
    } else {
      error = "First Name is required";
    }
    return error;
  }

  validateLast() {
    let last = this.state.last.value;
    let error = "";
    if (last.length > 0) {
      error = "";
    } else {
      error = "Last Name is required";
    }
    return error;
  }

  canSubmit = () => {
    let errors = {};
    errors.email = this.validateEmail();
    errors.phone = this.validatePhone();
    errors.major = this.validateMajor();
    errors.school = this.validateSchool();
    errors.first = this.validateFirst();
    errors.last = this.validateLast();
    if (
      errors.email === "" &&
      errors.phone === "" &&
      errors.major === "" &&
      errors.school === "" &&
      errors.first === "" &&
      errors.last === "" &&
      this.state.conductSigned.value &&
      this.state.waiverSigned.value
    ) {
      return false;
    } else {
      return true;
    }
  };

  renderFields = () => {
    switch (this.props.auth) {
      case null:
        return <div>Loading...</div>;
      case false:
        return <div>Logged Out</div>;
      default:
        if (this.state.doOnce === 0) {
          this.renderContent();
          this.setState({ doOnce: this.state.doOnce + 1 });
        }
        return (
          <div>
            <Input
              id={this.state.first.id}
              label={this.state.first.label}
              placeholder={this.state.first.placeHolder}
              value={this.state.first.value}
              onChange={event =>
                this.setState({
                  first: {
                    ...this.state.first,
                    value: event.target.value
                  }
                })
              }
            />
            <Input
              id={this.state.last.id}
              label={this.state.last.label}
              placeholder={this.state.last.placeHolder}
              value={this.state.last.value}
              onChange={event =>
                this.setState({
                  last: {
                    ...this.state.last,
                    value: event.target.value
                  }
                })
              }
            />
            <Input
              id={this.state.email.id}
              label={this.state.email.label}
              placeholder={this.state.email.placeHolder}
              value={this.state.email.value}
              onChange={event =>
                this.setState({
                  email: {
                    ...this.state.email,
                    value: event.target.value
                  }
                })
              }
              error={this.state.errors.phone}
            />
            <Input
              id={this.state.phone.id}
              label={this.state.phone.label}
              placeholder={this.state.phone.placeHolder}
              value={this.state.phone.value}
              onChange={event =>
                this.setState({
                  phone: {
                    ...this.state.phone,
                    value: event.target.value
                  }
                })
              }
              error={this.state.errors.phone}
            />
            <SelectInput
              id={this.state.school.id}
              label={this.state.school.label}
              value={this.state.school.value}
              onChange={event =>
                this.setState({
                  school: {
                    ...this.state.school,
                    value: event.target.value
                  }
                })
              }
            />
            {this.state.school.value === "other" ? (
              <Input
                id={this.state.school.id}
                label={this.state.school.label}
                placeholder={this.state.school.placeHolder}
                value={this.state.school.other}
                onChange={event =>
                  this.setState({
                    school: {
                      ...this.state.school,
                      other: event.target.value
                    }
                  })
                }
              />
            ) : (
              <div />
            )}
            <Input
              id={this.state.major.id}
              label={this.state.major.label}
              placeholder={this.state.major.placeHolder}
              value={this.state.major.value}
              onChange={event =>
                this.setState({
                  major: {
                    ...this.state.major,
                    value: event.target.value
                  }
                })
              }
            />
            <Input
              id={this.state.dietaryRestrictions.id}
              label={this.state.dietaryRestrictions.label}
              placeholder={this.state.dietaryRestrictions.placeHolder}
              value={this.state.dietaryRestrictions.value}
              onChange={event =>
                this.setState({
                  dietaryRestrictions: {
                    ...this.state.dietaryRestrictions,
                    value: event.target.value
                  }
                })
              }
            />
            <div className="form-check">
              <input
                id={this.state.waiverSigned.id}
                className="form-check-input"
                type="checkbox"
                value={this.state.waiverSigned.value}
                onChange={event =>
                  this.setState({
                    waiverSigned: {
                      ...this.state.waiverSigned,
                      value: event.target.checked
                    }
                  })
                }
              />
              <label
                className="form-check-label"
                htmlFor={this.state.waiverSigned.id}
              >
                {this.state.waiverSigned.label}{" "}
                <a href="https://hackwit.us/liability-waiver/">
                  HackWITus Liability Waiver
                </a>
              </label>
            </div>

            <div className="form-check">
              <input
                id={this.state.conductSigned.id}
                className="form-check-input"
                type="checkbox"
                value={this.state.conductSigned.value}
                onChange={event =>
                  this.setState({
                    conductSigned: {
                      ...this.state.conductSigned,
                      value: event.target.checked
                    }
                  })
                }
              />
              <label
                className="form-check-label"
                htmlFor={this.state.conductSigned.id}
              >
                {this.state.conductSigned.label}{" "}
                <a href="https://hackwit.us/code_of_conduct/">
                  HackWITus Code of Conduct
                </a>
              </label>
            </div>
          </div>
        );
    }
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center display-4">Registration Review</h1>
        <form onSubmit={this.onSubmit}>
          {this.renderFields()}
          <button
            type="submit"
            className={`btn btn-lg ${
              this.canSubmit() ? "" : "btn-success"
            } float-right`}
            disabled={this.canSubmit()}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Form);
