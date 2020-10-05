import React, { Component } from 'react';

class Cell extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         color: props.value
    //     }
    // }
    
    state = { color: this.props.value}
    //ahh so I gotta do this arrow style or the this gets odd
    clickBoi = () => {
        this.setState({color: '#333'})
    }

    render(){
        return(
            <div 
                className = 'cell' 
                style = {{backgroundColor: this.state.color}}
                onClick = {this.clickBoi}
                >
            </div>
        )
    }
}

export default Cell