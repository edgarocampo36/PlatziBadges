import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://www.gravatar.com/avatar/b66e425f8811974401bd35eebbe9fd20?s=40&d=https%3A%2F%2Fi.ibb.co%2Fn0YycJ7%2Fyoconefecto.jpg"
            alt="Avatar"
          />
          <h1>
            Edgar <br /> Ocampo{" "}
          </h1>
        </div>

        <div className="Badge__section-info">
          <p>Frontend Developer</p>
          <p>@edgarocampo36</p>
        </div>

        <div className="Badge__footer">
          <p>#platziconf</p>
        </div>
      </div>
    );
  }
}

export default Badge;
