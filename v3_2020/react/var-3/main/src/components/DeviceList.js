import React from 'react';
import AddDevice from './AddDevice'

class DeviceList extends React.Component {
    constructor(){
        super();
        this.state = {
            devices: []
        };
    }   
    
    addItem =(newdevice)=>{
        
        let oldDevices=this.state.devices
        oldDevices.push(newdevice);
        this.setState({devices: oldDevices});
        console.log(this.state.devices)
    }
  
    render(){
        return (
            <div>
                <AddDevice onAdd={this.addItem}></AddDevice>
            </div>
        )
    }
}

export default DeviceList;