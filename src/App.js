import React from 'react';
import { pattern1 } from './data.js'
import Matrix from './Matrix.js'

class App extends React.Component {
  render() {
    return (
      <Matrix values={pattern1} />
    )
  }
}

export default App;