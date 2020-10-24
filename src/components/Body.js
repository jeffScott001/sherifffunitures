import React, { Component } from "react";

class Body extends Component {
  state = {
      furnitures: ["Livingroom furnitures", "Kitchen furnitures", "Dinning furnitures", "Office furnitures", "Bedroom furnitures"],
      fittings: ["Livingroom fitting", "Kitchen fitting", "Dinning fitting", "Office fitting", "Bedroom fitting"]
  }
openModel = (id) => {
    this.props.showModel(id)

}
  render() {
    return (
      <div className="containerbody">
        <div className="card2">
          <div className="cover2">
            <h2>Furnitures</h2>
            <div className="options">
              {this.state.furnitures.map((furniture, index)=>(
                <button key={index} onClick = {() => this.openModel(furniture)}>{furniture}</button>
              ))}
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="cover2">
            <h2>Fittings</h2>
            <div className="options">
            {this.state.fittings.map((fitting, index)=>(
                <button key={index} onClick = {() => this.openModel(fitting)}>{fitting}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Body;
