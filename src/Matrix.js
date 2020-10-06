import React, { Component } from 'react';
import Cell from './cell';

export default class Matrix extends Component {
  
  genRow = (vals) => {
    // return vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
    return vals.map(val => <Cell value= {"#F00"}/> ) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
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
  values: (() => {
    const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defRow))
  })()
}