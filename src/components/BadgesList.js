/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./styles/BadgesList.css";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <div className="BadgesList__container">
              <li key={badge.id}>
                <div className="BadgesList__section">
                  <img className="BadgeList__avatar" src={badge.avatarUrl} />

                  <div>
                    <h6>
                      {badge.firstName} {badge.lastName}
                    </h6>
                    <p className="BadgesList__section-twitter">
                      @{badge.twitter}
                    </p>
                    <p>{badge.jobTitle}</p>
                  </div>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
