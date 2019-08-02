import React from "react"
// import logo from "./logo.svg"
import "./App.css"

class HelloMessage extends React.Component {
  render() {
    return <div className="App-header">Hello {this.props.name}</div>
  }
}

function App() {
  return (
    (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
      </div>
    ),
    <HelloMessage name="Mel" />
  )
}

export default App
