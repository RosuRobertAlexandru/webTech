import React, { Component } from 'react'

class CompanyDetails extends Component {
    
    constructor(props) {
        super(props)
    }

    cancel=()=>{
        this.props.onCancel();
    }

    render(){
        return (
            <div>
                Details for the company: {this.props.item}
                <button value="cancel" onClick={this.cancel}>Cancel </button>
            </div>
        )
    }
}

export default CompanyDetails
