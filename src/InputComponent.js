import React from "react";
import "./InputComponent.css";
export default class InputComponent extends React.Component {
  render() {
    return (
      <>
        Input tags
        <label data-domain="min">
          <input type="text" placeholder="12" />
        </label>
      </>
    );
  }
}
