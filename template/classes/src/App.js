import './App.css';
import React from 'react'
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      counter:0
    }
  }
  render() {
    return(
      <div className="App">
        <div style={{textAlign:"center",color:"white"}}>
          <h1>Naveenkumar M</h1>
        </div>
        <div style={{fontSize:"30px"}}>
          {this.state.counter}

        </div><br/>
        <button onClick={()=>this.setState({counter:this.state.counter+1})}>Increment</button><br/><br/>
        <button onClick={()=>this.setState({counter:this.state.counter-1})}>Decrement</button>
      </div>
    )
  }
}
export default App
