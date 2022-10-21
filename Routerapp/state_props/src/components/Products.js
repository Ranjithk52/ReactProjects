import React, { Component } from 'react'

export class Products extends Component {
    constructor(props){
        super(props)
        this.state={
            id:this.props.id,
            name:this.props.name,
            qty:this.props.qty,
            pic:this.props.img
        }
    }
  render() {
    return (
      <div>
        <p>{this.state.img} </p>
        <p>Product ID:{this.state.id} </p>
        <p>Product Name:{this.state.name} </p>
        <p>Product Qty:{this.state.qty} </p>
        <hr/>
      </div>
    )
  }
}

export default Products
