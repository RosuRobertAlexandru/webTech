import React, { Component } from 'react'

class Company extends Component {
	constructor(props){
		super(props)
		let {item} = this.props
		this.state = {
			name : item.name,
			employees : item.employees,
      revenue : item.revenue,
      isEditing:false
		}
		this.handleChange = (evt) => {
			this.setState({
				[evt.target.name] : evt.target.value
			})
		}
  }
  

  startEdit=()=>{this.setState({isEditing:true})}

  succes=()=>{
    let company ={
      name:this.state.name,
      employees:this.state.employees,
      revenue:this.state.revenue
    }
    this.props.onSave(this.props.item.id,company)
  }

  render() {
    let {item} = this.props
    if (this.state.isEditing){
      return (
        <div>
          <input id="name" type="text" name="name" onChange={this.handleChange}/>
          <input id="employees" type="text" name="employees" onChange={this.handleChange}/>
          <input id="revenue" type="text" name="revenue" onChange={this.handleChange}/>
          <input type="button" value="save" onClick={this.succes} />
          <input type="button" value="cancel" onClick={()=>{this.setState({isEditing:false})}} />						
        </div>
      )
    }
    else{
      return (
        <div>
          Name {item.name} with {item.employees} employees {item.revenue} revenue
          <input type="button" value="edit" onClick={this.startEdit}/>        
        </div>
      )
    }
  }
}

export default Company
