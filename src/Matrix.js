import React, { Component } from 'react';
import Cell from './Cell'

export default class Matrix extends Component {
  
  genRow = (vals) => {
      //vals are a single array of 10 cells: a row
    return vals.map(val => <Cell value={val}/>) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
      //creates a div with class="row" for each row: renders all the rows: grid of rows
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
}

Matrix.defaultProps = {
    values:[
        ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
        ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
        ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
        ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
        ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
        ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
        ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
        ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
        ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
        ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
      ]
}
