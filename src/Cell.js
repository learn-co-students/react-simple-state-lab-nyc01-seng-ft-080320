import React from 'react'

class Cell extends React.Component {

    state = {color: this.props.value}

    renderNewColor = () => {
        this.setState({color: '#333'})
    }

    render() {
        return(
            <div onClick={this.renderNewColor} className="cell" style={{backgroundColor: this.state.color}}>
            </div>
        )
    }
}

export default Cell