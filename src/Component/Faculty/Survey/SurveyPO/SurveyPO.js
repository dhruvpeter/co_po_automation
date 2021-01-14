import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";


// It's not clear to me how to trigger updates to the UI
const useForceUpdate = () => useState()[1];

function SurveyPO() {
  const fileInput = useRef(null);
  const forceUpdate = useForceUpdate();

  useEffect(e => {
    window.addEventListener("keyup", clickFileInput);
    return () => window.removeEventListener("keyup", clickFileInput);
  });

  function clickFileInput(e) {
    if (fileInput.current.nextSibling.contains(document.activeElement)) {
      // Bind space to trigger clicking of the button when focused
      if (e.keyCode === 32) {
        fileInput.current.click();
      }
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log("Submit Button clicked.");
  }

  return (
    <div className="container-fluid">
      <div><h3>Survey for Students(PO)</h3></div>
      <form onSubmit={onSubmit}>
        <input
          id="file"
          type="file"
          ref={fileInput}
          // The onChange should trigger updates whenever
          // the value changes?
          // Try to select a file, then try selecting another one.
          onChange={forceUpdate}
          multiple
        />
        <br />
        <br />
    
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<SurveyPO />, rootElement);


export default SurveyPO;
