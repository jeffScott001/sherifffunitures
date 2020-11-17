import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFittings, fetchFurnitures, fetchItems } from "../actions/postActions";


class Body extends Component {

  componentDidMount() {
    this.props.fetchFittings();
    this.props.fetchFurnitures();
  }
 
openModel = (id, area) => {
    this.props.showModel(id);
    this.props.fetchItems(id, area);

}
  render() {
    const {furnitures, fittings} = this.props
    let getFurnitureCategory = [];
    let getFittingCategory = [];

    for(let i in furnitures )
    {
        if(getFurnitureCategory.indexOf(furnitures[i].area) < 0)    
        {    
              getFurnitureCategory.push(furnitures[i].area);

        }
    }

    for(let i in fittings )
    {
        if(getFittingCategory.indexOf(fittings[i].area) < 0)    
        {    
              getFittingCategory.push(fittings[i].area);

        }
    }
    return (
      <div className="containerbody">
        <div className="card2">
          <div className="cover2">
            <h2>Furnitures</h2>
            <div className="options">
              {getFurnitureCategory.map((furniture, index)=>(
                <button key={index} onClick = {() => this.openModel('furniture', {furniture})}>{furniture}</button>
              ))}
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="cover2">
            <h2>Fittings</h2>
            <div className="options">
            {getFittingCategory.map((fitting, index)=>(
                <button key={index} onClick = {() => this.openModel('fitting', {fitting})}>{fitting}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

}
const mapStateToProps = (state) => ({
  furnitures: state.item.furniture,
  fittings: state.item.fitting
})


export default connect(mapStateToProps, {fetchFurnitures, fetchFittings, fetchItems})(Body);
