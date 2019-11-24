import React from "react";
import ReactDom from "react-dom";
import InputComponet from "./InputComponent";

const element = (
  <h1>
    <InputComponet />
  </h1>
);
ReactDom.render(element, document.getElementById("root"));
