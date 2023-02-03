import React from "react";

class AddDevice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      device: {
        name: "",
        price: 0,
      },
    };
  }
  onHandleChange = (evt) => {
    let newdevice = this.state.device;
    newdevice[evt.target.name] = evt.target.value;
    newdevice.price = parseFloat(newdevice.price);
    this.setState({
      device: newdevice,
    });
    console.log(this.state.device);
  };
  render() {
    return (
      <div>
        <input
          name="name"
          type="text"
          id="name"
          onChange={this.onHandleChange}
        />
        <input
          name="price"
          type="number"
          id="price"
          onChange={this.onHandleChange}
        />
        <button
          onClick={() => {
            this.props.onAdd(this.state.device);
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default AddDevice;
