import { Connect } from "react-redux";
import "./App.css";
import WellcomeRedux from "./components/WellcomeRedux";

 function App() {
  return (
    <div className="container">
      <h1 className="mt-5">Welcome to Redux</h1>{" "}
      <div className="row">
        <div className="col-12">
          <div className="input-group mb-3">
            {" "}
            <span className="input-group-text" id="inputGroup-sizing-default">
              Change UserName
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onChange={this.handleChangeUserName}
            ></input>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Change CourseName
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onChange={this.handleChangeCouserName}
            ></input>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12"><WellcomeRedux/></div>
      </div>
    </div>
  );
}

export default App;
