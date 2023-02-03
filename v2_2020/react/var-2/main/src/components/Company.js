import React, { Component } from 'react'

class Company extends Component {



  select=()=>{
    this.props.onSelect(this.props.item.id)
  }

  render() {
  	let {item} = this.props
    return (
      <div>
    		Name {item.name} with {item.employees} employees {item.revenue} revenue
        <button value="select" id="select" onClick={this.select}>Select</button>
      </div>
    )
  }
}

export default Company
