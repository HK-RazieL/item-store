import React, { Component } from 'react'
import { connect } from "react-redux";
import { getItems } from "../../actions/itemActions";

class ItemsComponent extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items } = this.props.items;
    return items.length 
      ? (<div>{items.map((item) => (
        <div key={item._id}>
            {item.name}
        </div>
      ))}</div>) 
      : (<div>No Items</div>);
    
  }
}

const mapStateToProps = (state) => ({
  items: state.items
})

export default connect(mapStateToProps, { getItems })(ItemsComponent);