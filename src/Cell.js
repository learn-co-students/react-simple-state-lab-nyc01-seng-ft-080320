import React from 'react';

class Cell extends React.Component{

    constructor(props){
        super()
        this.state = {
            color: props.value
        }
        
    }

    render(){
        // console.log(this.props.value)
        return(
            <div className="cell" onClick={() => this.setState({color: '#333' })} style={{backgroundColor: this.state.color}}>
                
            </div>
        )
    }
}

export default Cell