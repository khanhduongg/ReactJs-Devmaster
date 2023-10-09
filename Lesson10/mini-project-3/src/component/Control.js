import React, { useState } from "react";

function Control({ onAddTask, onSearch,onSort }) {
  const [searchInput, setSearchInput] = useState("");
  const handleSearch = () => {
    onSearch(searchInput);
  };
  const hanldeAdd = () => {
    onAddTask(true, "Save", null);
  };
  // sắp xếp
  const [sort,setSort]=useState('')
  const hanldeSort = (event)=>{
    onSort(event)
  }
  return (
    <div className="row">
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <span className="input-group-btn">
            <button
              className="btn btn-info"
              type="button"
              onClick={() => handleSearch()}
            >
              Go!
            </button>
          </span>
        </div>
      </div>
      {/* SEARCH : START */}
      {/* SEARCH : END */}
      {/* SORT : START */}
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="dropdown">
          <button
            className="btn btn-default dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Sort by <span className="caret" onClick={()=>hanldeSort("sort-by")} />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li>
              <a href="/#" role="button"  onClick={ ()=>hanldeSort("name-asc")}>
                Name ASC
              </a>
            </li>
            <li>
              <a href="/#" role="button" onClick={ ()=>hanldeSort("name-desc")} >
                Name DESC
              </a>
            </li>
            <li role="separator" className="divider" />
            <li>
              <a href="/#" role="button" onClick={ ()=>hanldeSort("level-asc")}>
                Level ASC
              </a>
            </li>  
            <li>
              <a href="/#" role="button" onClick={ ()=>hanldeSort("level-desc")}>
                Level DESC
              </a>
            </li>
          </ul>
          <span className="label label-success label-medium">NAME - DESC</span>
        </div>
      </div>
      {/* SORT : END */}
      {/* ADD : START */}
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
        <button
          type="button"
          className="btn btn-info btn-block"
          onClick={hanldeAdd}
        >
          Add Task
        </button>
      </div>
      {/* ADD : END */}
    </div>
  );
}

export default Control;
