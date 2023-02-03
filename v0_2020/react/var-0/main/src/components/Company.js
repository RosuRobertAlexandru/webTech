import React, { Component } from 'react'

class Company extends Component {
 
    render() {
        let {item}=this.props
        return (
            <div>
                	Hello, my name is {item.id}. I am a {item.name} 
                    <button value="delete" onClick={this.props.onDelete}>Delete</button>
            </div>

        )
    }
}

export default Company
