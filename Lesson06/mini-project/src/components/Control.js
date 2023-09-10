import React, { Component } from 'react'

export default class Control extends Component {
    handleAdd = ()=>{
        this.props.onAddorEditView(true,"SAVE")
    }
  render() {
    return (
      <div>
          <div className="col-12">
            <button className=" btn btn-info w-25 mb-3" type="button"
            onClick={this.handleAdd}
            >
              Them san pham
            </button>
          </div>

      </div>
    )
  }
}
