import React, { Component } from "react";
import { ExcelRenderer, OutTable } from "react-excel-renderer";
import { Button } from "react-bootstrap";

class AddMark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      cols: [],
    };
  }
  //  WORKING CODE ---------------------
  changeHandler(event) {
    let fileObj = event.target.files[0];
    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          cols: resp.cols,
          rows: resp.rows,
        });
        console.log(this.state);
      }
    });
  }
  //  WORKING CODE ---------------------

  render() {
    function Submit(e) {
      e.preventDefault();
      console.log("Upload Button clicked.");
    }

    return (
      <div className="container-fluid">
        <div>
          <h1>Upload File</h1>
          <input
            className="btn"
            type="file"
            onChange={this.changeHandler.bind(this)}
          />
          <OutTable
            data={this.state.rows}
            columns={this.state.cols}
            tableClassName="ExcelTable2007"
            tableHeaderRowClass="heading"
          />
        </div>

        <div>
          <Button variant="primary" onClick={Submit}>
            Upload
          </Button>
        </div>
      </div>
    );
  }
}

export default AddMark;
