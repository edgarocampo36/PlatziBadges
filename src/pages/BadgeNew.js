import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Edgar"
                lastName="Ocampo"
                avatar="https://s.gravatar.com/avatar/b66e425f8811974401bd35eebbe9fd20?d=identicon"
                jobTitle="Programing Developer"
                linkedin="edgarocampo36"
                hashtag="platziconf"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
