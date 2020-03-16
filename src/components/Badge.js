import React from "react";
import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div>
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b45pec07710c08d50"
            alt="Avatar"
          />
          <h1>
            Edgar <br /> Ocampo{" "}
          </h1>
        </div>

        <div>
          <p>Frontend Developer</p>
          <p>@edgarocampo36</p>
        </div>

        <div>
          <p>#platziconf</p>
        </div>
      </div>
    );
  }
}

export default Badge;
