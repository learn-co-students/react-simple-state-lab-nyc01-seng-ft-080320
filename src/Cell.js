import React from 'react'

class Cell extends React.Component{
    constructor(props){
        super()
        this.state = {
            color: props.value
        }
    }

    changeColor = () => {
        this.setState({
            color: '#333'
        })
    }
    render(){
        return(
            <div onClick={this.changeColor} style={{backgroundColor: `${this.state.color}`}}className="cell">hello</div>
        )
    }

}

export default Cell