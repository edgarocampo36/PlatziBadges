import React from "react";
import "./styles/BadgesListItem.css";

import Gravatar from "./Gravatar";

export default class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem__container">
        <div className="BadgesListItem__section">
          <Gravatar
            className="BadgesListItem__avatar"
            email={this.props.badge.email}
          />
          <div>
            <h6>
              {this.props.badge.firstName} {this.props.badge.lastName}
            </h6>
            <p className="BadgesListItem__section-twitter">
              @{this.props.badge.twitter}
            </p>
            <p>{this.props.badge.jobTitle}</p>
          </div>
        </div>
      </div>
    );
  }
}
