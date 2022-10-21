import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
export default function TexthtmlForm(props) {
  const [Text, setText] = useState("Enter text here");
  const handleClick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    // calling a function from app.js using props
    //  here i am using the function as props. showAlert and passing the values
    props.showAlert("success", "Converted to UpperCase");
  };
  const handleLoClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("success", "Converted to Lower Case");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("success", "text cleared");
  };

  const handleCopyClick = () => {
    var text = document.getElementById("mytext");
    navigator.clipboard.writeText(text.value);
    props.showAlert("success", "text copied");
  };

  const handleExtraSpaces = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("success", "Extra Spaces removed");
  };

  return (
    <>
      <div className="container">
        <div className="container mb-3">
          <h1 style={{ color: "" }}> {props.heading}</h1>
          <label htmlFor="myBox" className="htmlForm-label"></label>
          <textarea
            // using ternary operator here if the mode is light then the background color will change to whoite otherwise grey
            style={{
              backgroundColor: props.bgColor,
              color: props.textColor,
            }}
            type="text"
            className="form-control"
            value={Text}
            onChange={handleOnChange}
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            rows="8"
            id="mytext"
          />
        </div>
        <button className="btn btn-primary mx-1" onClick={handleClick} style ={{backgroundColor: props.bgColor, color: props.textColor}}>
          Convert to Uppercase
         
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick} style ={{backgroundColor: props.bgColor,color: props.textColor}}>
          Convert to Lower Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick} style ={{backgroundColor: props.bgColor,color: props.textColor}}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick} style ={{backgroundColor: props.bgColor,color: props.textColor}}>
          Copy text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} style ={{backgroundColor: props.bgColor,color: props.textColor}}>
          clear extra spaces
        </button>
      </div>

      <div className="container my-5">
        <h3 style={{ color: props.mode === "light" ? "black" : "white" }}>
          Your text summary{" "}
        </h3>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          number of characters : {Text.length}
        </p>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          number of words : {Text.split(" ").filter((element)=>{return element.length!=0}).length}
        </p>
        <h4 style={{ color: props.mode === "light" ? "black" : "white" }}>
          preview text{" "}
        </h4>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          {Text}
        </p>
      </div>
    </>
  );
}
TexthtmlForm.prototype = {
  heading: PropTypes.string,
};
