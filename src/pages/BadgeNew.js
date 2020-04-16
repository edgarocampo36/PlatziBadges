import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import BadgeForm from "../components/BadgeForm";
import Badge from "../components/Badge";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstname: "",
      lastname: "",
      email: "",
      jobtitle: "",
      twitter: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstname}
                lastName={this.state.form.lastname}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobtitle}
                email={this.state.form.email}
                avatar="https://s.gravatar.com/avatar/b66e425f8811974401bd35eebbe9fd20?d=identicon"
              />
            </div>

            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
