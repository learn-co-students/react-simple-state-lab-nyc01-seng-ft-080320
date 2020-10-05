import React from 'react';
import './index.css';
import { pattern1 } from './data.js'
import Matrix from './Matrix.js'

class App extends React.Component {

    render(){
        return (
            <React.Fragment>
            <Matrix values={pattern1} />
            </React.Fragment>
        )
    }
}

export default App;